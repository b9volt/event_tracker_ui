(function(){
  var app = angular.module('tracker', ['ui.router']);
  app.controller('MainCtrl', function($http, $state){
      var self = this;
      var rootUrl = "http://localhost:3000"

      $http.get(`${rootUrl}/events`, {
          // headers: {
          //   'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
          // }
        })
        .then(function(response) {
          self.events = response.data.events;
          console.log(response.data);
        })
        .catch(function(err) {
          console.log('err',err);
        });

      // CRUD LOGIC
      // ==============================
      // function addEvent(newEvent) {
      //   console.log(newEvent)
      //   $http.post(`${rootUrl}/events`, {event: newEvent}, {
      //       headers: {
      //         'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      //       }
      //     })
      //     .then(function(response) {
      //       newEvent.name = '';
      //       newEvent.location ='';
      //       newEvent.date = '';
      //       newEvent.description = '';
      //
      //       $state.go('allEvents', {url: '/events'})
      //     })
      //     .catch(function(err) {
      //       console.log(err);
      //     });
      // }

      // function deleteEvent(id) {
      //   $http.delete(`${rootUrl}/events/${id}`, {
      //      headers: {
      //        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      //      }
      //    })
      //     .then(function(response) {
      //       console.log(response);
      //       $state.go('allEvents', {url: '/events'}, {reload: true})
      //     })
      // }
      //
      // function editEvent(event) {
      //   $http.put(`${rootUrl}/events/${$state.params.event.id}`,
      //      { event: event }, {
      //         headers: {
      //           'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      //         }
      //       })
      //     .then(function(response){
      //       console.log(response);
      //       $state.go('allEvents', {url: '/events'})
      //     })
      // }

      // PUBLIC METHODS
      // this.addEvent = addEvent;
      // this.deleteEvent = deleteEvent;
      // this.editEvent = editEvent;
    })
})();
