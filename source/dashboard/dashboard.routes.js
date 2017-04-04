+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .config(DashboardRoutes);

  function DashboardRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('dashboard/home');

    $stateProvider
      .state({
        name: 'dashboard',
        url: '/dashboard',
        abstract: true,
        controller: 'DashboardController',
        controllerAs: 'DashboardViewModel',
        templateUrl: 'dashboard/dashboard.html',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              
              '/assets/stylesheets/foundation.css',
              '/assets/stylesheets/dashboard.css',
              '/assets/stylesheets/fontawesome.css'
            ]);
          }]
        }
      })
      .state({
        name: 'dashboard.home',
        url: '/home',
        controller: 'HomeController',
        controllerAs: 'HomeViewModel',
        templateUrl: 'dashboard/pages/home/home.html',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/home/home.controller.js',
              '/assets/stylesheets/fontawesome.css',
              '/assets/stylesheets/foundation.css',
              '/assets/stylesheets/dashboard.css',
              '/dashboard/pages/home/home.css'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'خانه'
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'dashboard/pages/login/login.html',
        controller: 'LoginController',
        controllerAs: 'LoginViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/login/login.controller.js',
              '/assets/stylesheets/foundation.css',
              '/dashboard/pages/login/login.css'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'ورود'
        }
      })
      .state('dashboard.chance', {
        url: '/chance',
        templateUrl: 'dashboard/pages/chance/chance.html',
        controller: 'ChanceController',
        controllerAs: 'ChanceViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([

            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'فرصت های من'
        }
      })
      .state('dashboard.addlead', {
        url: '/addlead',
        templateUrl: 'dashboard/pages/lead/add/add.html',
        controller: 'AddController',
        controllerAs: 'AddViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              files: [
                '/dashboard/pages/lead/add/add.controller.js',
                '/dashboard/pages/lead/lead.rest.service.js',
                '/bower_components/angular-wizard/dist/angular-wizard.min.js',
                '/bower_components/angular-wizard/dist/angular-wizard.min.css',
                '/bower_components/adm-dtp/dist/ADM-dateTimePicker.js',
                '/bower_components/adm-dtp/dist/ADM-dateTimePicker.css',
                '/bower_components/api-check/dist/api-check.js',
                '/bower_components/angular-ui-mask/dist/mask.js',
                '/bower_components/angular-messages/angular-messages.js',
                '/bower_components/angular-formly/dist/formly.js',
                '/bower_components/angular-formly-templates-foundation/dist/angular-formly-templates-foundation.js',
                '/bower_components/formviewer/dist/js/formviewer.js',
                // '/bower_components/datagrid/dist/datagrid.js',
                // '/bower_components/datagrid/dist/datagrid.css',
                '/bower_components/formviewer/dist/css/formviewer.css',
                '/assets/stylesheets/fontawesome.css',
                '/assets/stylesheets/foundation.css',
                '/assets/stylesheets/dashboard.css',
                '/dashboard/pages/lead/add/add.css'
              ],
              serie: true
            });
          }]
        },
        ncyBreadcrumb: {
          label: 'سرنخ جدید'
        }
      });

    // .state('Dashboard.addrelatedfields', {
    //   url: '/addrelatedfields',
    //   templateUrl: '/Dashboard/Dashboard/pages/add-related-fields/add.related.fields.template.html',
    //   controller: 'AddRelatedFieldsController',
    //   controllerAs: 'AddRelatedFieldsViewModel'
    // });
  }

})();