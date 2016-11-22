(function(){
  angular.module('EventTrackerApp')
    .controller('eventsController', eventsController);


  function eventsController($http){

    var self = this;
    var server = "http://localhost:3000/"
    // For example, var server = 'https://enigmatic-garden-65625.herokuapp.com/api/'

    $http.get(`${server}/events`)
      .then(function(response) {
          self.events = response.data;
          console.log(response.data);
          console.log(self.events[0].name);
    });


  }
})()
