(function(){
  angular
    .module('EventTrackerApp', ['ui.router', 'events'])
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'index.html'
    })
    .state('createEvent', {
      url: '/createEvent',
      templateUrl: '/partials/create.html',
    })
    .state('home', {
      url: '/home',
      templateUrl: '/partials/home.html',
    })
    .state('editEvent', {
      url: '/editEvent',
      templateUrl: '/partials/edit.html',
    })
  }
})()
