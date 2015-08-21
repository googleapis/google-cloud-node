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

    bigquery: {
      title: 'BigQuery',
      _url: '{baseUrl}/bigquery',
      pages: [
        {
          title: 'Dataset',
          url: '/dataset'
        },
        {
          title: 'Job',
          url: '/job'
        },
        {
          title: 'Table',
          url: '/table'
        }
      ]
    },

    compute: {
      title: 'Compute',
      _url: '{baseUrl}/compute',
      pages: [
        {
          title: 'Address',
          url: '/address'
        },
        {
          title: 'Disk',
          url: '/disk'
        },
        {
          title: 'Firewall',
          url: '/firewall'
        },
        {
          title: 'Network',
          url: '/network'
        },
        {
          title: 'Operation',
          url: '/operation'
        },
        {
          title: 'Region',
          url: '/region'
        },
        {
          title: 'Snapshot',
          url: '/snapshot'
        },
        {
          title: 'VM',
          url: '/vm'
        },
        {
          title: 'Zone',
          url: '/zone'
        }
      ]
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

    dns: {
      title: 'DNS',
      _url: '{baseUrl}/dns',
      pages: [
        {
          title: 'Zone',
          url: '/zone'
        },
        {
          title: 'Record',
          url: '/record'
        },
        {
          title: 'Change',
          url: '/change'
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

    search: {
      title: 'Search',
      _url: '{baseUrl}/search',
      pages: [
        {
          title: 'Index',
          url: '/index'
        },
        {
          title: 'Document',
          url: '/document'
        },
        {
          title: 'Field',
          url: '/field'
        }
      ]
    },

    storage: {
      title: 'Storage',
      _url: '{baseUrl}/storage'
    },

    storageWithFiles: {
      title: 'Storage',
      _url: '{baseUrl}/storage',
      pages: [
        {
          title: 'Bucket',
          url: '/bucket'
        },
        {
          title: 'File',
          url: '/file'
        }
      ]
    },

    VERSIONS: {
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
      '*': ['gcloud'],

      // deprecate old datastore api.
      '<0.8.0': ['datastore'],

      // introduce datastore refactor + pubsub.
      '>=0.8.0': ['datastoreWithTransaction', 'pubsub'],

      // deprecate old storage api.
      '<0.9.0': ['storage'],

      // introduce new storage api.
      '>=0.9.0': ['storageWithFiles'],

      // introduce bigquery api.
      '>=0.10.0': ['bigquery'],

      // introduce search api.
      '>=0.16.0': ['search'],

      // introduce dns api.
      '>=0.18.0': ['dns'],

      // introduce compute api.
      '>=0.20.0': ['compute']
    }
  });
