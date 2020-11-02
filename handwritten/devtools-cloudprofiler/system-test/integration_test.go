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

package e2e

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

	"cloud.google.com/go/profiler/proftest"
	"golang.org/x/net/context"
	"golang.org/x/oauth2/google"
	compute "google.golang.org/api/compute/v1"
)

var (
	repo           = flag.String("repo", "https://github.com/googleapis/cloud-profiler-nodejs.git", "git repo to test")
	branch         = flag.String("branch", "", "git branch to test")
	commit         = flag.String("commit", "", "git commit to test")
	pr             = flag.Int("pr", 0, "git pull request to test")
	runBackoffTest = flag.Bool("run_backoff_test", false, "Enables the backoff integration test. This integration test requires over 45 mins to run, so it is not run by default.")

	runID             = strings.Replace(time.Now().Format("2006-01-02-15-04-05.000000-0700"), ".", "-", -1)
	benchFinishString = "benchmark application(s) complete"
	errorString       = "failed to set up or run the benchmark"
)

const (
	cloudScope       = "https://www.googleapis.com/auth/cloud-platform"
	gceBenchDuration = 600 * time.Second
	gceTestTimeout   = 25 * time.Minute

	// For any agents to receive backoff, there must be more than 32 agents in
	// the deployment. The initial backoff received will be 33 minutes; each
	// subsequent backoff will be one minute longer. Running 45 benchmarks for
	// 45 minutes will ensure that several agents receive backoff responses and
	// are able to wait for the backoff duration then send another request.
	numBackoffBenchmarks = 45
	backoffBenchDuration = 45 * time.Minute
	backoffTestTimeout   = 60 * time.Minute
)

const startupTemplate = `
{{ define "setup"}}

npm_install() {
	timeout 60 npm install --quiet --no-color --no-progress "${@}"
}

# Install git
retry apt-get update >/dev/null
retry apt-get -y -q install git >/dev/null

# Install desired version of Node.js
retry curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash >/dev/null
export NVM_DIR="$HOME/.nvm" >/dev/null
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" >/dev/null

# nvm install writes to stderr and stdout on successful install, so both are
# redirected to serial port 3.
retry nvm install {{.NodeVersion}} &>/dev/ttyS2
npm -v
node -v
NODEDIR=$(dirname $(dirname $(which node)))

# Install agent
retry git clone {{.Repo}}
cd cloud-profiler-nodejs
retry git fetch origin {{if .PR}}pull/{{.PR}}/head{{else}}{{.Branch}}{{end}}:pull_branch
git checkout pull_branch
git reset --hard {{.Commit}}

retry npm_install --nodedir="$NODEDIR"

npm run compile 
npm pack --nodedir="$NODEDIR" >/dev/null
VERSION=$(node -e "console.log(require('./package.json').version);")
PROFILER="$HOME/cloud-profiler-nodejs/google-cloud-profiler-$VERSION.tgz"

TESTDIR="$HOME/test"
mkdir -p "$TESTDIR"
cp -r "system-test/busybench" "$TESTDIR"
cd "$TESTDIR/busybench"

retry npm_install node-pre-gyp
retry npm_install --nodedir="$NODEDIR" "$PROFILER" typescript gts

npm run compile
{{- end }}

{{ define "integration" -}}
{{- template "prologue" . }}
{{- template "setup" . }}
# Run benchmark with agent
GCLOUD_PROFILER_LOGLEVEL=5 GAE_SERVICE={{.Service}} node --trace-warnings build/src/busybench.js {{.DurationSec}}

# Indicate to test that script has finished running
echo "{{.FinishString}}"

{{ template "epilogue" . -}}
{{end}}

{{ define "integration_backoff" -}}
{{- template "prologue" . }}
{{- template "setup" . }}

# Do not display commands being run to simplify logging output.
set +x

# Run benchmarks with agent.
echo "Starting {{.NumBackoffBenchmarks}} benchmarks."
for (( i = 0; i < {{.NumBackoffBenchmarks}}; i++ )); do
	# A Node.js application will not exit while a CreateProfile request is
	# inflight, so timeout is used to force the application to terminate.
	(timeout {{.DurationSec}} sh -c \
      'GCLOUD_PROFILER_LOGLEVEL=5 GAE_SERVICE={{.Service}} node --trace-warnings build/src/busybench.js {{.DurationSec}} 1'
	) |& while read line; do echo "benchmark $i: ${line}"; done || [ "$?" -eq "124" ] &
done
echo "Successfully started {{.NumBackoffBenchmarks}} benchmarks."

wait

# Continue displaying commands being run.
set -x

echo "{{.FinishString}}"

{{ template "epilogue" . -}}
{{ end }}

`

type profileSummary struct {
	profileType  string
	functionName string
	sourceFile   string
}

type nodeGCETestCase struct {
	proftest.InstanceConfig
	name          string
	nodeVersion   string
	benchDuration time.Duration
	timeout       time.Duration

	backoffTest bool

	// wantProfileTypes will not be used when the test is a backoff integration
	// test.
	wantProfiles []profileSummary
}

func (tc *nodeGCETestCase) initializeStartUpScript(template *template.Template) error {
	params := struct {
		Service              string
		NodeVersion          string
		Repo                 string
		PR                   int
		Branch               string
		Commit               string
		FinishString         string
		ErrorString          string
		DurationSec          int
		NumBackoffBenchmarks int
	}{
		Service:      tc.name,
		NodeVersion:  tc.nodeVersion,
		Repo:         *repo,
		PR:           *pr,
		Branch:       *branch,
		Commit:       *commit,
		FinishString: benchFinishString,
		ErrorString:  errorString,
		DurationSec:  int(tc.benchDuration.Seconds()),
	}

	testTemplate := "integration"
	if tc.backoffTest {
		testTemplate = "integration_backoff"
		params.NumBackoffBenchmarks = numBackoffBenchmarks
	}

	var buf bytes.Buffer
	err := template.Lookup(testTemplate).Execute(&buf, params)
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

	template, err := proftest.BaseStartupTmpl.Parse(startupTemplate)
	if err != nil {
		t.Fatalf("failed to parse startup script template: %v", err)
	}

	gceTr := proftest.GCETestRunner{
		TestRunner: proftest.TestRunner{
			Client: client,
		},
		ComputeService: computeService,
	}

	wantProfiles := []profileSummary{
		{"WALL", "busyLoop", "busybench.ts"},
		{"HEAP", "benchmark", "busybench.ts"},
	}

	testcases := []nodeGCETestCase{
		{
			InstanceConfig: proftest.InstanceConfig{
				ProjectID:   projectID,
				Zone:        zone,
				Name:        fmt.Sprintf("profiler-test-node10-%s", runID),
				MachineType: "n1-standard-1",
			},
			name:          fmt.Sprintf("profiler-test-node10-%s-gce", runID),
			wantProfiles:  wantProfiles,
			nodeVersion:   "10",
			timeout:       gceTestTimeout,
			benchDuration: gceBenchDuration,
		},
		{
			InstanceConfig: proftest.InstanceConfig{
				ProjectID:   projectID,
				Zone:        zone,
				Name:        fmt.Sprintf("profiler-test-node12-%s", runID),
				MachineType: "n1-standard-1",
			},
			name:          fmt.Sprintf("profiler-test-node12-%s-gce", runID),
			wantProfiles:  wantProfiles,
			nodeVersion:   "12",
			timeout:       gceTestTimeout,
			benchDuration: gceBenchDuration,
		},
		{
			InstanceConfig: proftest.InstanceConfig{
				ProjectID:   projectID,
				Zone:        zone,
				Name:        fmt.Sprintf("profiler-test-node14-%s", runID),
				MachineType: "n1-standard-1",
			},
			name:          fmt.Sprintf("profiler-test-node14-%s-gce", runID),
			wantProfiles:  wantProfiles,
			nodeVersion:   "14",
			timeout:       gceTestTimeout,
			benchDuration: gceBenchDuration,
		},
	}

	if *runBackoffTest {
		testcases = append(testcases,
			nodeGCETestCase{
				InstanceConfig: proftest.InstanceConfig{
					ProjectID: projectID,
					Zone:      zone,
					Name:      fmt.Sprintf("profiler-backoff-test-node12-%s", runID),

					// Running many copies of the benchmark requires more
					// memory than is available on an n1-standard-1. Use a
					// machine type with more memory for backoff test.
					MachineType: "n1-highmem-2",
				},
				name:          fmt.Sprintf("profiler-backoff-test-node12-%s", runID),
				backoffTest:   true,
				nodeVersion:   "12",
				timeout:       backoffTestTimeout,
				benchDuration: backoffBenchDuration,
			})
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

			err := gceTr.StartInstance(ctx, &tc.InstanceConfig)
			if err != nil {
				t.Fatalf("failed to start GCE instance: %v", err)
			}
			defer func() {
				if gceTr.DeleteInstance(ctx, &tc.InstanceConfig); err != nil {
					t.Fatal(err)
				}
			}()

			timeoutCtx, cancel := context.WithTimeout(ctx, tc.timeout)
			defer cancel()
			output, err := gceTr.PollForAndReturnSerialOutput(timeoutCtx, &tc.InstanceConfig, benchFinishString, errorString)
			if err != nil {
				t.Fatal(err)
			}

			if tc.backoffTest {
				if err := proftest.CheckSerialOutputForBackoffs(output, numBackoffBenchmarks, "action throttled, backoff", "Attempting to create profile", "benchmark"); err != nil {
					t.Errorf("failed to check serial output for backoffs: %v", err)
				}
				return
			}

			timeNow := time.Now()
			endTime := timeNow.Format(time.RFC3339)
			startTime := timeNow.Add(-1 * time.Hour).Format(time.RFC3339)
			for _, wantProfile := range tc.wantProfiles {
				pr, err := gceTr.TestRunner.QueryProfilesWithZone(tc.ProjectID, tc.name, startTime, endTime, wantProfile.profileType, tc.Zone)
				if err != nil {
					t.Errorf("QueryProfiles(%s, %s, %s, %s, %s) got error: %v", tc.ProjectID, tc.name, startTime, endTime, wantProfile.profileType, err)
					continue
				}
				if wantProfile.sourceFile != "" {
					if err := pr.HasFunctionInFile(wantProfile.functionName, wantProfile.sourceFile); err != nil {
						t.Errorf("Function %s not found in source file %s in profiles of type %s: %v", wantProfile.functionName, wantProfile.sourceFile, wantProfile.profileType, err)
					}
					continue
				}
				if err := pr.HasFunction(wantProfile.functionName); err != nil {
					t.Errorf("Function %s not found in profiles of type %s: %v", wantProfile.functionName, wantProfile.profileType, err)
				}
			}
		})
	}
}
