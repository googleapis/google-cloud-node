// Copyright 2018 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// +build integration,go1.7

package profiler

import (
	"bytes"
	"flag"
	"fmt"
	"os"
	"strings"
	"testing"
	"text/template"
	"time"

	"cloud.google.com/go/profiler/proftest"
	"golang.org/x/net/context"
	"golang.org/x/oauth2/google"
	compute "google.golang.org/api/compute/v1"
)

var (
	repo   = flag.String("repo", "", "git repo to test")
	branch = flag.String("branch", "", "git branch to test")
	commit = flag.String("commit", "", "git commit to test")
	runID  = time.Now().Unix()
)

const cloudScope = "https://www.googleapis.com/auth/cloud-platform"

const startupTemplate = `
#! /bin/bash

# Shut down the VM in 5 minutes after this script exits
# to stop accounting the VM for billing and cores quota.
trap "sleep 300 && poweroff" EXIT

# Fail on any error
set -eo pipefail

# Display commands being run
set -x
# Install git
apt-get update
apt-get -y -q install git-all build-essential

# Install desired version of Node.js
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install {{.NodeVersion}}
npm -v
node -v

# Install agent
git clone https://github.com/GoogleCloudPlatform/cloud-profiler-nodejs.git
cd cloud-profiler-nodejs
git pull {{.Repo}} {{.Branch}}
git reset --hard {{.Commit}}
npm install
npm run compile
npm pack
VERSION=$(node -e "console.log(require('./package.json').version);")
PROFILER="$HOME/cloud-profiler-nodejs/google-cloud-profiler-$VERSION.tgz"

TESTDIR="$HOME/test"
mkdir -p "$TESTDIR"
cp "testing/busybench.js" "$TESTDIR"
cd "$TESTDIR"

npm install "$PROFILER"

# Run benchmark with agent
GCLOUD_PROFILER_LOGLEVEL=5 GAE_SERVICE={{.Service}} node --require @google-cloud/profiler busybench.js 600

# Indicate to test that script has finished running
echo "busybench finished profiling"
`

type nodeGCETestCase struct {
	proftest.GCETestConfig
	name             string
	nodeVersion      string
	wantProfileTypes []string
}

func (inst *nodeGCETestCase) initializeStartUpScript(template *template.Template) error {
	var buf bytes.Buffer
	err := template.Execute(&buf,
		struct {
			Service     string
			NodeVersion string
			Repo        string
			Branch      string
			Commit      string
		}{
			Service:     inst.service,
			NodeVersion: inst.nodeVersion,
			Repo:        *repo,
			Branch:      *branch,
			Commit:      *commit,
		})
	if err != nil {
		return fmt.Errorf("failed to render startup script for %s: %v", inst.Name, err)
	}
	inst.StartupScript = buf.String()
	return nil
}

func TestAgentIntegration(t *testing.T) {
	projectID := os.Getenv("GCLOUD_TESTS_NODEJS_PROJECT_ID")
	if projectID == "" {
		t.Fatalf("Getenv(GCLOUD_TESTS_NODEJS_PROJECT_ID) got empty string")
	}

	zone := os.Getenv("GCLOUD_TESTS_NODEJS_ZONE")
	if zone == "" {
		t.Fatalf("Getenv(GCLOUD_TESTS_NODEJS_ZONE) got empty string")
	}

	if *commit == "" {
		t.Fatal("commit flag is not set")
	}

	ctx := context.Background()

	client, err := google.DefaultClient(ctx, cloudScope)
	if err != nil {
		t.Fatalf("failed to get default client: %v", err)
	}

	computeService, err := compute.New(client)
	if err != nil {
		t.Fatalf("failed to initialize compute Service: %v", err)
	}

	template, err := template.New("startupScript").Parse(startupTemplate)
	if err != nil {
		t.Fatalf("failed to parse startup script template: %v", err)
	}

	gceTr := proftest.GCETestRunner{
		TestRunner: proftest.TestRunner{
			Client: client,
		},
		ComputeService: computeService,
	}

	testcases := []nodeGCETestCase{
		{
			InstanceConfig: proftest.InstanceConfig{
				ProjectID: projectID,
				Zone:      zone,
				Name:      fmt.Sprintf("profiler-test-node6-%d", runID),
			},
			name:             fmt.Sprintf("profiler-test-node6-%d-gce", runID),
			wantProfileTypes: []string{"CPU", "HEAP"},
			nodeVersion:      "6",
		},
		{
			InstanceConfig: proftest.InstanceConfig{
				ProjectID: projectID,
				Zone:      zone,
				Name:      fmt.Sprintf("profiler-test-node8-%d", runID),
			},
			name:             fmt.Sprintf("profiler-test-node8-%d-gce", runID),
			wantProfileTypes: []string{"CPU", "HEAP"},
			nodeVersion:      "8",
		},
		{
			InstanceConfig: proftest.InstanceConfig{
				ProjectID: projectID,
				Zone:      zone,
				Name:      fmt.Sprintf("profiler-test-node9-%d", runID),
			},
			name:             fmt.Sprintf("profiler-test-node9-%d-gce", runID),
			wantProfileTypes: []string{"CPU", "HEAP"},
			nodeVersion:      "9",
		},
	}
	for _, tc := range testcases {
		tc := tc // capture range variable
		t.Run(tc.Service, func(t *testing.T) {
			t.Parallel()
			if err := tc.initializeStartUpScript(template); err != nil {
				t.Fatalf("failed to initialize startup script")
			}

			gceTr.StartInstance(ctx, &tc.InstanceConfig)
			defer func() {
				if gceTr.DeleteInstance(ctx, &tcInstanceConfig); err != nil {
					t.Fatal(err)
				}
			}()

			timeoutCtx, cancel := context.WithTimeout(ctx, time.Minute*25)
			defer cancel()
			if err := gceTr.PollForSerialOutput(timeoutCtx, &tc.InstanceConfig, "busybench finished profiling"); err != nil {
				t.Fatal(err)
			}

			timeNow := time.Now()
			endTime := timeNow.Format(time.RFC3339)
			startTime := timeNow.Add(-1 * time.Hour).Format(time.RFC3339)

			for _, pType := range tc.expProfileTypes {
				pr, err := tr.QueryProfiles(tc.ProjectID, tc.Service, startTime, endTime, pType)
				if err != nil {
					t.Fatalf("QueryProfiles(%s, %s, %s, %s, %s) got error: %v", tc.ProjectID, tc.Service, startTime, endTime, pType, err)
				}

				if pr.NumProfiles == 0 {
					t.Fatalf("profile response contains zero profiles: %v", pr)
				}
				if len(pr.Deployments) == 0 {
					t.Fatalf("profile response contains zero deployments: %v", pr)
				}
				if len(pr.Profile.Functions.Name) == 0 {
					t.Fatalf("profile does not have function data")
				}

				functionFound := false
				for _, name := range pr.Profile.Functions.Name {
					if strings.Contains(name, "benchmark") {
						functionFound = true
						break
					}
				}
				if !functionFound {
					t.Errorf("wanted function name %s not found in profile", "benchmark")
				}
			}
		})
	}
}
