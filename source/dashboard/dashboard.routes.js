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
              // '/assets/stylesheets/fontawesome.css',
              // '/assets/stylesheets/foundation.css',
              // '/assets/stylesheets/dashboard.css',
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
      .state('dashboard.about', {
        url: '/about',
        templateUrl: 'dashboard/pages/about-us/aboutus.html',
        controller: 'AboutUsController',
        controllerAs: 'AboutUsViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/about-us/aboutus.controller.js',
              '/dashboard/pages/about-us/aboutus.css'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'درباره ما'
        }
      })
      .state('dashboard.news', {
        url: '/news',
        templateUrl: 'dashboard/pages/news/news.html',
        controller: 'NewsController',
        controllerAs: 'NewsViewModel',
        params: { id: null },
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/news/news.controller.js',
              '/dashboard/pages/news/news.css'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'اخبار'
        }
      })
      .state('dashboard.archive', {
        url: '/archive',
        templateUrl: 'dashboard/pages/archive/archive.html',
        controller: 'ArchiveController',
        controllerAs: 'ArchiveViewModel',
        params: { id: null },
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/archive/archive.controller.js',
              '/dashboard/pages/archive/archive.css'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'اخبار'
        }
      })
      .state('dashboard.contact', {
        url: '/contact',
        templateUrl: 'dashboard/pages/contact-us/contactus.html',
        controller: 'ContactUsController',
        controllerAs: 'ContactUsViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/contact-us/contactus.controller.js',
              '/dashboard/pages/contact-us/contactus.css'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'تماس با ما'
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