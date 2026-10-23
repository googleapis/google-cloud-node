// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package main

// Service registry mirroring SpannerCoreInit / SpannerCoreClose. There is one
// registry per sidecar process (shared by all connections), exactly like the
// process-wide registry of the in-process FFI bridge, so handles are valid on
// every connection.

import (
	"context"
	"fmt"
	"sync"
	"sync/atomic"

	"cloud.google.com/go/spanner/sharedcore"
)

type serviceEntry struct {
	id          int64
	key         string
	refCount    int32 // guarded by serviceRegistry.mu
	activeRPCs  atomic.Int32
	closing     atomic.Bool
	closeOnce   sync.Once
	svc         *sharedcore.Service
	logsMu      sync.Mutex
	logs        []logRecord
	hasLogs     atomic.Bool
	headerSlots [headerCacheSlots]atomic.Pointer[cachedHeaderEntry]
}

func (se *serviceEntry) closeServiceUnderlying() error {
	var err error
	se.closeOnce.Do(func() {
		if se.svc != nil {
			err = se.svc.Close()
		}
	})
	return err
}

func (se *serviceEntry) onRPCStart() {
	se.activeRPCs.Add(1)
}

func (se *serviceEntry) onRPCEnd() {
	if se.activeRPCs.Add(-1) == 0 && se.closing.Load() {
		_ = se.closeServiceUnderlying()
	}
}

type serviceRegistry struct {
	mu     sync.Mutex
	nextID atomic.Int64
	byID   sync.Map // map[int64]*serviceEntry
	byKey  map[string]*serviceEntry

	newService func(context.Context, sharedcore.ClientConfig) (*sharedcore.Service, error)
}

func newServiceRegistry() *serviceRegistry {
	return &serviceRegistry{
		byKey:      make(map[string]*serviceEntry),
		newService: sharedcore.NewService,
	}
}

func (r *serviceRegistry) load(handle int64) (*serviceEntry, bool) {
	v, ok := r.byID.Load(handle)
	if !ok {
		return nil, false
	}
	return v.(*serviceEntry), true
}

func (r *serviceRegistry) count() int {
	r.mu.Lock()
	defer r.mu.Unlock()
	return len(r.byKey)
}

// initService mirrors SpannerCoreInit: services are de-duplicated by the full
// configuration key and reference counted. It returns the handle (<= 0 on
// failure) and the error message that the FFI exposes through
// SpannerCoreGetLastInitError.
func (r *serviceRegistry) initService(req initRequest) (handle int64, errMsg string) {
	defer func() {
		if rec := recover(); rec != nil {
			handle = -1
			errMsg = fmt.Sprintf("panic in SpannerCoreInit: %v", rec)
		}
	}()

	key := fmt.Sprintf(
		"%s|%d|%d|%d|%d|%s|%d|%d|%d|%d|%g|%g|%d|%s",
		req.endpoint,
		int(req.numChannels),
		int(req.usePlaintext),
		int(req.disableBuiltinAuth),
		int(req.enableDirectAccess),
		req.userAgent,
		int(req.dcpEnabled),
		int(req.dcpInitialChannels),
		int(req.dcpMinChannels),
		int(req.dcpMaxChannels),
		req.dcpMaxRPCPerChannel,
		req.dcpMinRPCPerChannel,
		int(req.dcpSelectionStrategy),
		req.universeDomain,
	)

	r.mu.Lock()
	if existing, ok := r.byKey[key]; ok {
		existing.refCount++
		id := existing.id
		r.mu.Unlock()
		return id, ""
	}
	r.mu.Unlock()

	se := &serviceEntry{
		key:      key,
		refCount: 1,
	}
	cfg := sharedcore.ClientConfig{
		Endpoint:           req.endpoint,
		UniverseDomain:     req.universeDomain,
		NumChannels:        int(req.numChannels),
		PlainText:          req.usePlaintext != 0,
		DisableBuiltInAuth: req.disableBuiltinAuth != 0,
		EnableDirectAccess: req.enableDirectAccess != 0,
		UserAgent:          req.userAgent,
		DynamicChannelPoolConfig: sharedcore.DynamicChannelPoolConfig{
			Enabled:           req.dcpEnabled != 0,
			InitialChannels:   int(req.dcpInitialChannels),
			MinChannels:       int(req.dcpMinChannels),
			MaxChannels:       int(req.dcpMaxChannels),
			MaxRPCPerChannel:  req.dcpMaxRPCPerChannel,
			MinRPCPerChannel:  req.dcpMinRPCPerChannel,
			SelectionStrategy: int(req.dcpSelectionStrategy),
		},
		LogFunc: se.appendLog,
	}

	svc, err := r.newService(context.Background(), cfg)
	if err != nil {
		return -1, err.Error()
	}
	se.svc = svc

	r.mu.Lock()
	if existing, ok := r.byKey[key]; ok {
		existing.refCount++
		id := existing.id
		r.mu.Unlock()
		_ = svc.Close()
		return id, ""
	}
	id := r.nextID.Add(1)
	se.id = id
	r.byID.Store(id, se)
	r.byKey[key] = se
	r.mu.Unlock()
	return id, ""
}

// release decrements the reference count of handle. On the last reference
// the service is unregistered and marked closing and is returned so that the
// caller can finish SpannerCoreClose (close paused streams, close the
// transport once idle).
func (r *serviceRegistry) release(handle int64) (se *serviceEntry, last bool, ok bool) {
	r.mu.Lock()
	defer r.mu.Unlock()
	v, found := r.byID.Load(handle)
	if !found {
		return nil, false, false
	}
	se = v.(*serviceEntry)
	se.refCount--
	if se.refCount > 0 {
		return se, false, true
	}
	r.byID.Delete(handle)
	delete(r.byKey, se.key)
	se.closing.Store(true)
	return se, true, true
}

// closeAll unregisters and closes every service regardless of reference counts
// and active RPCs (process shutdown).
func (r *serviceRegistry) closeAll() {
	r.mu.Lock()
	entries := make([]*serviceEntry, 0, len(r.byKey))
	for key, se := range r.byKey {
		entries = append(entries, se)
		r.byID.Delete(se.id)
		delete(r.byKey, key)
		se.closing.Store(true)
	}
	r.mu.Unlock()
	for _, se := range entries {
		_ = se.closeServiceUnderlying()
	}
}
