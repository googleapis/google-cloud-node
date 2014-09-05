angular
  .module('gcloud', ['ngRoute', 'hljs', 'gcloud.docs'])
  .config(function($routeProvider) {
    'use strict';

    $routeProvider
      .when('/', {
        templateUrl: 'home.html'
      });
  });
