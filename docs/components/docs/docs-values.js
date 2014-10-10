angular.module('gcloud.docs')
  .value('pages', {

    //---------------------------------------------
    // Link schema:
    //---------------------------------------------
    // key: {
    //   title: 'Display Name for Link',
    //   _url: '{baseUrl}/module-name',
    //
    //   pages: [
    //     title: 'Display Name for Sub-Page Link',
    //     url: '/path-relevant-to-parent-url'
    //   ]
    // }
    //---------------------------------------------

    gcloud: {
      title: 'gcloud',
      _url: '{baseUrl}'
    },

    datastore: {
      title: 'Datastore',
      _url: '{baseUrl}/datastore',
      pages: [
        {
          title: 'Dataset',
          url: '/dataset'
        },
        {
          title: 'Query',
          url: '/query'
        }
      ]
    },

    datastoreWithTransaction: {
      title: 'Datastore',
      _url: '{baseUrl}/datastore',
      pages: [
        {
          title: 'Dataset',
          url: '/dataset'
        },
        {
          title: 'Transaction',
          url: '/transaction'
        },
        {
          title: 'Query',
          url: '/query'
        }
      ]
    },

    pubsub: {
      title: 'PubSub',
      _url: '{baseUrl}/pubsub',
      pages: [
        {
          title: 'Topic',
          url: '/topic'
        },
        {
          title: 'Subscription',
          url: '/subscription'
        }
      ]
    },

    storage: {
      title: 'Storage',
      _url: '{baseUrl}/storage'
    },

    VERSIONS: {
      // Give a version with/without a comparator, anything semver:
      //   https://github.com/npm/node-semver#versions
      //
      // Multiple keys may be used to match a version.
      //
      // Example:
      // A user is browsing the docs for 0.7.0. If the list below contains the
      // keys: "*", ">0.4.0", and "0.7.0", all of the contents will be joined.
      //
      // Notes on ordering:
      // These are sorted alphabetically by `module`.title.
      //
      // To keep the documentation for the main module, `gcloud`, on top of the
      // link list, **make sure the title is `gcloud`**
      '*': ['gcloud', 'storage'],
      '<0.8.0': ['datastore'],
      '>=0.8.0': ['datastoreWithTransaction', 'pubsub']
    }
  });
