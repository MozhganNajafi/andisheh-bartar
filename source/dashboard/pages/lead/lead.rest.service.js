+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .factory('LeadsRest', ['Restangular', LeadsRestService]);

  function LeadsRestService(Restangular) {

    return Restangular.service('crmindividual');
  }

  angular
    .module('DashboardApplication')
    .factory('ProfileTypeRest', ['Restangular', ProfileTypeRestService]);

  function ProfileTypeRestService(Restangular) {

    return Restangular.service('ProfileType');
  }

  angular
    .module('DashboardApplication')
    .factory('AcquaintanceRest', ['Restangular', AcquaintanceRestService]);

  function AcquaintanceRestService(Restangular) {

    return Restangular.service('AcquaintanceMethod');
  }

  angular
    .module('DashboardApplication')
    .factory('ContactTypeRest', ['Restangular', ContactTypeRestService]);

  function ContactTypeRestService(Restangular) {

    return Restangular.service('ContactType');
  }

  angular
    .module('DashboardApplication')
    .factory('ActivityFieldRest', ['Restangular', ActivityFieldRestService]);

  function ActivityFieldRestService(Restangular) {

    return Restangular.service('ActivityField');
  }

  angular
    .module('DashboardApplication')
    .factory('RealPersonExtra',['Restangular',RealPersonExtraService]);

  function RealPersonExtraService(Restangular){
    return Restangular.service('');
  }

})();