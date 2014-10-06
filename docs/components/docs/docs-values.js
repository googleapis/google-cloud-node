angular.module('gcloud.docs')
  .value('pages', {
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

    storage: {
      title: 'Storage',
      _url: '{baseUrl}/storage'
    },

    VERSIONS: {
      // Give a version with/without a comparator, anything semver:
      //   https://github.com/npm/node-semver#versions
      // List should be in ascending order.
      '<=0.7.1': ['gcloud', 'datastore', 'storage'],
      '>0.7.1': ['gcloud', 'datastoreWithTransaction', 'storage']
    }
  });
