'use strict';

angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'ngMaterial',
  'ngResource',
  'books'
]).
config(['$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

  console.log('running the state provider');
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('laranerds', {
    url: '/home',
    views: {
      'home': {
        controller: 'LaranerdsHome',
        controllerAs: 'laranerdsHome',
        templateUrl: 'home/home.html'
      }
    }
  })
}]);
