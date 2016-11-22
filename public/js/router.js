(function(){
  angular
    .module('tracker', ['ui.router'])
    .config(Router);

  function Router($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/index");

    $stateProvider
    .state('index', {
      url: '/index',
    })
    .state('addEvent', {
      url: '/events/new',
      templateUrl: '/partials/new.html',
    })
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
