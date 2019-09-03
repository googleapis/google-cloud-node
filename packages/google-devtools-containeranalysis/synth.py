# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""This script is used to synthesize generated parts of this library."""

import synthtool as s
import synthtool.gcp as gcp
import subprocess
import logging

logging.basicConfig(level=logging.DEBUG)

# Run the gapic generator
gapic = gcp.GAPICGenerator()
versions = ['v1beta1', 'v1']
for version in versions:
    library = gapic.node_library('containeranalysis', version,
            config_path=f"/google/devtools/containeranalysis/artman_containeranalysis_{version}.yaml")
    s.copy(library, excludes=['package.json', 'README.md', 'src/index.js'])

# Copy common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library()
s.copy(templates)

# fix the URL of grafeas.io (this is already fixed upstream).
s.replace('src/v1beta1/*.js',
        'cloud.google.comgrafeas.io',
        'grafeas.io')

# perform surgery inserting the Grafeas client.
s.replace("src/v1/container_analysis_client.js",
r"""const path = require\('path'\);
""",
r"""const path = require('path');
const { GrafeasClient } = require('@google-cloud/grafeas');
""")

s.replace("src/v1/container_analysis_client.js",
r"""        defaults\[methodName\],
        null
      \);
    }
  }""",
r"""
        defaults[methodName],
        null
      );
    }
    // expose the fully hydrated options, for the benefit of
    // the client.getGrafeas() method.
    this.opts = opts;
  }
""")

s.replace("src/v1/container_analysis_client.js",
r"""  matchNoteFromNoteName\(noteName\) {
    return this\._pathTemplates\.notePathTemplate
      \.match\(noteName\)
      \.note;
  }
""",
r"""  matchNoteFromNoteName(noteName) {
    return this._pathTemplates.notePathTemplate.match(noteName).note;
  }


  /**
   * Returns an instance of a @google-cloud/grafeas client, configured to
   * connect to Google Cloud's Container Analysis API. For documentation
   * on this client, see:
   * <a href="https://googleapis.dev/nodejs/grafeas/latest/index.html">https://googleapis.dev/nodejs/grafeas/latest/index.html</a>
   *
   * @returns {GrafeasClient} - An instance of a Grafeas client.
   *
   */
  getGrafeasClient() {
    return new GrafeasClient(this.opts);
  }
""")

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
subprocess.run(['npx', 'compileProtos', 'src'])
