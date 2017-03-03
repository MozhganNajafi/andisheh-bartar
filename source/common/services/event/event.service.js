(function() {

  'use strict';

  angular
    .module('CommonApplication')
    .service('Event', EventService);

  function EventService() {

    var topics = {};
    var hasOwnProperty = topics.hasOwnProperty;

    return {
      subscribe: function( topic, listener ) {

        if(!hasOwnProperty.call(topics, topic)) {
          topics[topic] = [];
        }
          
        var index = topics[topic].push(listener) - 1;
        
        return {
          remove: function() {
            delete topics[topic][index];
          }
        };
      },
      publish: function( topic, info ) {
        if(!hasOwnProperty.call(topics, topic)) {
          return;
        }
        topics[topic].forEach(function( item ) {
          item(info != undefined ? info : {});
        });
      },
      get: function( topic ) {
        return topics[topic];
      }
    };

  }

})();