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

package testing

import (
	"bytes"
	"flag"
	"fmt"
	"os"
	"runtime"
	"strings"
	"testing"
	"text/template"
	"time"

	"github.com/GoogleCloudPlatform/google-cloud-go/profiler/proftest"
	"golang.org/x/net/context"
	"golang.org/x/oauth2/google"
	compute "google.golang.org/api/compute/v1"
)

var (
	repo                = flag.String("repo", "https://github.com/googleapis/cloud-profiler-nodejs.git", "git repo to test")
	branch              = flag.String("branch", "", "git branch to test")
	commit              = flag.String("commit", "", "git commit to test")
	pr                  = flag.Int("pr", 0, "git pull request to test")
	runOnlyV8CanaryTest = flag.Bool("run_only_v8_canary_test", false, "if true test will be run only with the v8-canary build, otherwise, no tests will be run with v8 canary")

	runID = strings.Replace(time.Now().Format("2006-01-02-15-04-05.000000-0700"), ".", "-", -1)
)

const cloudScope = "https://www.googleapis.com/auth/cloud-platform"

const startupTemplate = `
#! /bin/bash

(
# Shut down the VM in 5 minutes after this script exits
# to stop accounting the VM for billing and cores quota.
trap "sleep 300 && poweroff" EXIT

retry() {
  for i in {1..3}; do
    "${@}" && return 0
  done
  return 1
}

# Fail on any error
set -eo pipefail

# Display commands being run
set -x
# Install git
retry apt-get update >/dev/null
retry apt-get -y -q install git build-essential >/dev/null

# Install desired version of Node.js
retry curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash >/dev/null
export NVM_DIR="$HOME/.nvm" >/dev/null
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" >/dev/null

# nvm install writes to stderr and stdout on successful install, so some
# output will appear on successful installs. To reduce the amount of output, 
# while maintaining error messages printed when nvm install fails, output to
# stdout is redirected to /dev/null.
{{if .NVMMirror}}NVM_NODEJS_ORG_MIRROR={{.NVMMirror}}{{end}} retry nvm install {{.NodeVersion}} >/dev/null
npm -v
node -v
NODEDIR=$(dirname $(dirname $(which node)))

# Install agent
retry git clone {{.Repo}}
cd cloud-profiler-nodejs
retry git fetch origin {{if .PR}}pull/{{.PR}}/head{{else}}{{.Branch}}{{end}}:pull_branch
git checkout pull_branch
git reset --hard {{.Commit}}
retry npm install --nodedir="$NODEDIR" >/dev/null
npm run compile 
npm pack --nodedir="$NODEDIR" >/dev/null
VERSION=$(node -e "console.log(require('./package.json').version);")
PROFILER="$HOME/cloud-profiler-nodejs/google-cloud-profiler-$VERSION.tgz"

TESTDIR="$HOME/test"
mkdir -p "$TESTDIR"
cp -r "testing/busybench" "$TESTDIR"
cd "$TESTDIR/busybench"

retry npm install --nodedir="$NODEDIR" "$PROFILER" >/dev/null
retry npm install
npm run compile

# Run benchmark with agent
GCLOUD_PROFILER_LOGLEVEL=5 GAE_SERVICE={{.Service}} node --trace-warnings --require @google-cloud/profiler build/src/busybench.js 600

# Indicate to test that script has finished running
echo "busybench finished profiling"

# Write output to serial port 2 with timestamp.
) 2>&1 | while read line; do echo "$(date): ${line}"; done >/dev/ttyS1
`

type profileSummary struct {
	profileType  string
	functionName string
}

type nodeGCETestCase struct {
	proftest.InstanceConfig
	name         string
	nodeVersion  string
	nvmMirror    string
	wantProfiles []profileSummary
}

func (tc *nodeGCETestCase) initializeStartUpScript(template *template.Template) error {
	var buf bytes.Buffer
	err := template.Execute(&buf,
		struct {
			Service     string
			NodeVersion string
			NVMMirror   string
			Repo        string
			PR          int
			Branch      string
			Commit      string
		}{
			Service:     tc.name,
			NodeVersion: tc.nodeVersion,
			NVMMirror:   tc.nvmMirror,
			Repo:        *repo,
			PR:          *pr,
			Branch:      *branch,
			Commit:      *commit,
		})
	if err != nil {
		return fmt.Errorf("failed to render startup script for %s: %v", tc.name, err)
	}
	tc.StartupScript = buf.String()
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
				ProjectID:   projectID,
				Zone:        zone,
				Name:        fmt.Sprintf("profiler-test-node6-%s", runID),
				MachineType: "n1-standard-1",
			},
			name:         fmt.Sprintf("profiler-test-node6-%s-gce", runID),
			wantProfiles: []profileSummary{{"WALL", "busyLoop"}, {"HEAP", "benchmark"}},
			nodeVersion:  "6",
		},
		{
			InstanceConfig: proftest.InstanceConfig{
				ProjectID:   projectID,
				Zone:        zone,
				Name:        fmt.Sprintf("profiler-test-node8-%s", runID),
				MachineType: "n1-standard-1",
			},
			name:         fmt.Sprintf("profiler-test-node8-%s-gce", runID),
			wantProfiles: []profileSummary{{"WALL", "busyLoop"}, {"HEAP", "benchmark"}},
			nodeVersion:  "8",
		},
		{
			InstanceConfig: proftest.InstanceConfig{
				ProjectID:   projectID,
				Zone:        zone,
				Name:        fmt.Sprintf("profiler-test-node9-%s", runID),
				MachineType: "n1-standard-1",
			},
			name:         fmt.Sprintf("profiler-test-node9-%s-gce", runID),
			wantProfiles: []profileSummary{{"WALL", "busyLoop"}, {"HEAP", "benchmark"}},
			nodeVersion:  "9",
		},
		{
			InstanceConfig: proftest.InstanceConfig{
				ProjectID:   projectID,
				Zone:        zone,
				Name:        fmt.Sprintf("profiler-test-node10-%s", runID),
				MachineType: "n1-standard-1",
			},
			name:         fmt.Sprintf("profiler-test-node10-%s-gce", runID),
			wantProfiles: []profileSummary{{"WALL", "busyLoop"}, {"HEAP", "benchmark"}},
			nodeVersion:  "10",
		},
	}
	if *runOnlyV8CanaryTest {
		testcases = []nodeGCETestCase{{
			InstanceConfig: proftest.InstanceConfig{
				ProjectID:   projectID,
				Zone:        zone,
				Name:        fmt.Sprintf("profiler-test-v8-canary-%s", runID),
				MachineType: "n1-standard-1",
			},
			name:         fmt.Sprintf("profiler-test-v8-canary-%s-gce", runID),
			wantProfiles: []profileSummary{{"WALL", "busyLoop"}, {"HEAP", "benchmark"}},
			nodeVersion:  "node", // install latest version of node
			nvmMirror:    "https://nodejs.org/download/v8-canary",
		}}
	}

	// Allow test cases to run in parallel.
	runtime.GOMAXPROCS(len(testcases))

	for _, tc := range testcases {
		tc := tc // capture range variable
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			if err := tc.initializeStartUpScript(template); err != nil {
				t.Fatalf("failed to initialize startup script: %v", err)
			}

			gceTr.StartInstance(ctx, &tc.InstanceConfig)
			defer func() {
				if gceTr.DeleteInstance(ctx, &tc.InstanceConfig); err != nil {
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
			for _, wantProfile := range tc.wantProfiles {
				pr, err := gceTr.TestRunner.QueryProfiles(tc.ProjectID, tc.name, startTime, endTime, wantProfile.profileType)
				if err != nil {
					t.Errorf("QueryProfiles(%s, %s, %s, %s, %s) got error: %v", tc.ProjectID, tc.name, startTime, endTime, wantProfile.profileType, err)
					continue
				}
				if err := pr.HasFunction(wantProfile.functionName); err != nil {
					t.Errorf("Function %s not found in profiles of type %s: %v", wantProfile.functionName, wantProfile.profileType, err)
				}
			}
		})
	}
}
