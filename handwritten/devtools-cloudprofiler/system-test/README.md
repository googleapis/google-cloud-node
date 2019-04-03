This directory contains an integration test that confirms the basic
functionality of the profiler works on Compute Engine. In particular, this test
confirms that the agent can create and upload profiles from a Compute Engine 
VM, and that these profiles contain symbolized samples from the benchmark
application.

More specifically, this test:
1. Starts 3 Compute Engine VMs, one to test Node.js versions 6, 8, and 9. 
   Each Compute Engine VM then:
    1. Downloads the desired version of Node.js, github, and build-essentials 
       (the dependencies needed to run the test).
    2. Clones the agent source code at the revision of interest.
    3. Runs the benchmark application, busybench.js (which repeatedly calls
       a function which creates and fills a buffer) with the agent attached.
2. Waits for the application in each Compute Engine VM to finish.
3. Queries the Stackdriver Profiler API to confirm that both heap and wall 
   profiles have been uploaded to the API and that the profiles contain 
   symbolized samples which include the name of the function in the benchmark.
