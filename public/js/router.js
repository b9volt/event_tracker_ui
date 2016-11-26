(function(){
  angular
    .module('tracker', ['ui.router'])
    .config(Router);

  function Router($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/index");

    $stateProvider
    .state('index', {
      url: '/',
      templateUrl: "/index.html",
    })
    // .state('new', {
    //   url: '/newEvent',
    //   templateUrl: '/partials/new.html',
    //   controller: 'eventsController',
    //   controllerAs: 'events',
    // })
    .state('editEvent', {
      url: '/events/edit',
      params: {
        event: null
      },
      templateUrl: '/partials/edit.html',
    })
    .state('allEvents', {
      url: '/events',
      templateUrl: '/index.html',
    })
  }
})()
