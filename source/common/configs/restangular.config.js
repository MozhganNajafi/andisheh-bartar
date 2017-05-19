(function() {

  'use strict';

  angular
    .module('CommonApplication')
    .config([ 'RestangularProvider', RestangularConfig ]);

  function RestangularConfig( RestangularProvider ) {
    RestangularProvider.setBaseUrl('http://server.abbasmoghadasi.com/api');

    RestangularProvider
    .addResponseInterceptor(function( data, operation, what, url, response ) {
      var newResponse = [];
      if (operation === 'getList') {
        newResponse.data = response.data.entity.data;
        newResponse.headers = response.data.entity.headers;
        if (response.data.entity.actions) {
          newResponse.actions = response.data.entity.actions;
        }
        return newResponse; 
      }
      return response.data;
    });

    RestangularProvider.setRestangularFields({
      id: 'Id'
    });

  }

})();