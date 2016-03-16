# Cloud Monitoring Sample

`list_resources.js` is a command-line program to demonstrate connecting to the Google
Monitoring API to retrieve API data.

`create_custom_metric.js` demonstrates how to create a custom metric, write a timeseries value to it,
and read it back.

## Prerequisites to run locally:

Go to the [Google Developers Console](https://console.developer.google.com).

    * Go to API Manager -> Credentials and click New Credential in the Google Developers Console.
     [or click here ]{https://console.developers.google.com/project/_/apiui/credential/serviceaccount)
      Select a JSON-format key, which will be downloaded to your computer. The key file must be located on the computer(s) from which you will access the Monitoring API. Access to the file should be restricted so that only trusted people can read the key.

    ```
    export GOOGLE_APPLICATION_CREDENTIALS=~/Downloads/<project-id>-0123456789abcdef.json
    ```

# Run locally
    
    npm install
    node list_resources.js <YOUR-PROJECT-ID>
    node create_custom_metric.js <YOUR-PROJECT-ID>


