(function(){
  angular.module('EventTrackerApp')
    .controller('eventsController', eventsController);


  function eventsController($http){

    var self = this;
    var server = "<YOUR_HEROKU_API_LINK_HERE>"
    // For example, var server = 'https://enigmatic-garden-65625.herokuapp.com/api/'

    $http.get(`${server}/events`)
      .then(function(response) {
          self.events = response.data;
          console.log(self.events[0].name);
    });
  }
})()
