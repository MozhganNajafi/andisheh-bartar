(function() {
  'use strict';

  angular
    .module('DashboardApplication')
    .service('Dialog', [ 'ngDialog', DialogService ]);

  function DialogService( ngDialog ) {
    
    function open( config ) {
      return ngDialog.open({
        template: config.template,
        plain: config.plain || false,
        controller: config.controller,
        controllerAs: config.controllerAs,
        resolve: config.resolve,
        scope: config.scope,
        className: config.className || 'ngdialog-theme-default',
        appendClassName: config.appendClassName,
        disableAnimation: config.disableAnimation || false,
        overlay: config.overlay || true,
        showClose: config.showClose || true,
        data: config.data,
        width: config.width || '50%'
      });
    }

    function close( id, value ) {
      ngDialog.close(id, value);
    }

    return {
      open: open,
      close: close
    }
  }
})();