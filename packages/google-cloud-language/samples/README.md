# Cloud Natural Language API Sample

These samples demonstrate the use of the
[Google Cloud Natural Language API](https://cloud.google.com/natural-language/docs/).

`analyze.js` is a command-line program that demonstrates how different methods
of the API can be called.

## Setup

Please follow the [Set Up Your Project](https://cloud-dot-devsite.googleplex.com/natural-language/docs/getting-started#set_up_your_project)
steps in the Quickstart doc to create a project and enable the
Cloud Natural Language API. Following those steps, make sure that you
[Set Up a Service Account](https://cloud.google.com/natural-language/docs/common/auth#set_up_a_service_account),
and export the following environment variable:

```
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/your-project-credentials.json
```

## Run locally

First install the needed dependencies.

```
npm install
```

To run:

```
node analyze.js <sentiment|entities|syntax> <text>
```

For example, the following command returns all entities found in the text:

```
node analyze.js entities "President Obama is speaking at the White House."
```

```
{
  "entities": [
    {
      "name": "Obama",
      "type": "PERSON",
      "metadata": {
        "wikipedia_url": "http://en.wikipedia.org/wiki/Barack_Obama"
      },
      "salience": 0.84503114,
      "mentions": [
        {
          "text": {
            "content": "Obama",
            "beginOffset": 10
          }
        }
      ]
    },
    {
      "name": "White House",
      "type": "LOCATION",
      "metadata": {
        "wikipedia_url": "http://en.wikipedia.org/wiki/White_House"
      },
      "salience": 0.15496887,
      "mentions": [
        {
          "text": {
            "content": "White House",
            "beginOffset": 35
          }
        }
      ]
    }
  ],
  "language": "en"
}
```
