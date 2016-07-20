<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Natural Language API Node.js Samples

[Cloud Natural Language API][language_docs] provides natural language
understanding technologies to developers, including sentiment analysis, entity
recognition, and syntax analysis. This API is part of the larger Cloud Machine
Learning API.

[language_docs]: https://cloud.google.com/natural-language/docs/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [analyze.js](#analyze)

## Setup

1. Please follow the [Set Up Your Project][quickstart] steps in the Quickstart
doc to create a project and enable the Cloud Natural Language API.
1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[quickstart]: https://cloud.google.com/natural-language/docs/getting-started#set_up_your_project
[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Analyze

View the [source code][analyze_code].

__Run the sample:__

Usage: `node analyze <sentiment|entities|syntax> <text>`

For example, the following command returns all entities found in the text:

Example:

    node analyze entities "President Obama is speaking at the White House."

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

[analyze_code]: analyze.js
