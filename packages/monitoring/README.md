Stackdriver Monitoring API for Node.js
=================================================

@google-cloud/monitoring uses [Google API extensions][google-gax] to provide an
easy-to-use client library for the [Stackdriver Monitoring API][] (v3) defined in the [googleapis][] git repository


[googleapis]: https://github.com/googleapis/googleapis/tree/master/google/google/monitoring/v3
[google-gax]: https://github.com/googleapis/gax-nodejs
[Stackdriver Monitoring API]: https://developers.google.com/apis-explorer/#p/monitoring/v3/

Getting started
---------------

@google-cloud/monitoring will allow you to connect to the [Stackdriver Monitoring API][] and access all its methods.

In order to do so, you need to set up authentication as well as install the library locally.


Setup Authentication
--------------------

To authenticate all your API calls, first install and setup the [Google Cloud SDK][].
Once done, you can then run the following command in your terminal:

    $ gcloud beta auth application-default login

or

    $ gcloud auth login

Please see [[gcloud beta auth application-default login][] document for the difference between these commands.

[Google Cloud SDK]: https://cloud.google.com/sdk/
[gcloud beta auth application-default login]: https://cloud.google.com/sdk/gcloud/reference/beta/auth/application-default/login


Installation
-------------------

Install this library using npm:

    $ npm install @google-cloud/monitoring

At this point you are all set to continue.
