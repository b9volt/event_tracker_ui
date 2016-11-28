(function(){
  angular.module('EventList')
  .controller('eventsController', eventsController)

  function eventsController($http){
    // var url = 'http://localhost:3000'
    var url = 'https://dry-brook-77200.herokuapp.com/'
    var self = this;

    $http.get(`${url}/events`)
      .then(function(response){
        self.events = response.data;
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error);
      })

    self.index = function(events){
      return $http({
        url: `${url}/events`,
        method: 'GET',
        data: events
      })
      .then(function(response){
        self.events = response.data.events
        console.log('GOT EVENTS ===>', response.data.events);
      })
      .catch(function(error){
        console.log(error);
      })
    }

    self.create = function(event){
      return $http({
        url: `${url}/events`,
        method: 'POST',
        data: event
      })
      .then(function(response){
        event.name = response.data.event.name
        event.location = response.data.event.location
        event.date = response.data.event.date
        event.description = response.data.event.description
      })
      .then(function(response){
        event.name = ''
        event.location = ''
        event.date = ''
        event.description = ''
        self.index();
      })
      .catch(function(error){
        console.log(error);
      })
    }

    self.update = function(event){
      return $http({
        url: `${url}/events/${event.id}`,
        method: 'PUT',
        data: event
      })
      .then(function(response){
        event.name = response.data.event.name
        event.location = response.data.event.location
        event.date = response.data.event.date
        event.description = response.data.event.description
        console.log(event);
      })
      .then(function(response){
        self.index();
      })
      .catch(function(error){
        console.log(error);
      })
    }

    self.destroy = function(event){
      return $http({
        url: `${url}/events/${event.id}`,
        method: 'DELETE',
        data: event
      })
      .then(function(response){
        console.log('DELETE EVENTS', response);
      })
      .then(function(response){
        self.index();
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }
})()
