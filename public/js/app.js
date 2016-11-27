(function(){
  angular.module('events', ['ui.router'])
    .controller('MainController', MainController);

    MainController.$inject = ['$http', '$state', '$stateParams', '$location'];

    function MainController($http, $state, $stateParams, $location) {

    var self = this;
    var server = "http://localhost:3000/"
    // var server = "https://dry-brook-77200.herokuapp.com/"

    $http.get(`${server}/events`)
      .then(function(response) {
          self.events = response.data;
          console.log(response.data);
          console.log(self.events[0].name);
    });

    // STATES
    // ==============================
    // this.isCreating

    // CRUD LOGIC
    // ==============================
    // this.createEvent = function() {
    //   self.newEvent = self.event
    //
    //   $http.post(server/events
    //   { event: self.newEvent
    //   })
    //     .catch(function(err) {
    //       console.log('err', err);
    //     })
    //     .then(function(response) {
    //       $state.go('home', {url: '/home'});
    //     });
    // }; //end this.createTrip


    //       newEvent.name = '';
    //       newEvent.location ='';
    //       newEvent.date = '';
    //       newEvent.description = '';
    //       console.log("I am working");
    //       $state.go('allEvents', {url: '/events'})
    //     })
    //     .catch(function(err) {
    //       console.log(err);
    //     });
    // }

    // PUBLIC METHODS
    // ==============================
    // this.createEvent = createEvent;
    // this.deleteEvent = deleteEvent;
    // this.editEvent = editEvent;
  }

})()
