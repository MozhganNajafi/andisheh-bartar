+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('LinkRest', ['Restangular', LinkRestService]);

  function LinkRestService(Restangular) {
    return Restangular.service('link');
  }

    angular
    .module('DashboardApplication')
    .factory('FoldersRest', [ 'Restangular', FoldersRestService ]);

  function FoldersRestService( Restangular ) {
    return Restangular.service('Folder');
  }

  angular
    .module('DashboardApplication')
    .factory('FilesRest', [ 'Restangular', FilesRestService ]);

  function FilesRestService( Restangular ) {
    return Restangular.service('File');
  }

})();