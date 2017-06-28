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
              '/assets/stylesheets/fontawesome.css',
              '/dashboard/pages/home/home.rest.services.js',
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
              '/dashboard/pages/about-us/aboutus.css',
              '/dashboard/pages/admin/profile/profile.rest.services.js'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'درباره ما'
        }
      })
      .state('dashboard.news', {
        url: '/news/:id',
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
          label: 'آرشیو'
        }
      })
      .state('dashboard.links', {
        url: '/links',
        templateUrl: 'dashboard/pages/link/link.html',
        controller: 'LinkController',
        controllerAs: 'LinkViewModel',
        params: { id: null },
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/link/link.controller.js',
              '/dashboard/pages/link/link.css'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'پیوندها'
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
      })
      .state('admin', {
        url: '/admin',
        abstract: true,
        templateUrl: 'dashboard/pages/admin/admin.html',
        // controller: 'AdminController',
        // controllerAs: 'AdminViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/assets/stylesheets/foundation.css',
              '/assets/stylesheets/fontawesome.css',
              '/dashboard/pages/admin/admin.css',
              '/dashboard/pages/home/home.rest.services.js'

            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'پنل مدیریت'
        }
      })
      .state('admin.index', {
        url: '/index',
        templateUrl: 'dashboard/pages/admin/index/index.html',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'پنل مدیریت'
        }
      })
      .state('admin.addContent', {
        url: '/addcontent',
        templateUrl: 'dashboard/pages/admin/addcontent/addcontent.html',
        controller: 'AddContentController',
        controllerAs: 'AddContentViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/admin/addcontent/addcontent.controller.js',
              '/dashboard/pages/admin/addcontent/addcontent.css',
              '/dashboard/pages/home/home.rest.services.js',
              '/dashboard/pages/admin/addcontent/addcontent.rest.services.js',
              // '/bower_components/ngMask/dist/ngMask.min.js'           
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'افزودن خبر'
        }
      })
      .state('admin.editContent', {
        url: '/editcontent',
        templateUrl: 'dashboard/pages/admin/editcontent/editcontent.html',
        controller: 'EditContentController',
        controllerAs: 'EditContentViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/admin/editcontent/editcontent.controller.js',
              '/dashboard/pages/admin/editcontent/editcontent.css',
              '/bower_components/angular-smart-table/dist/smart-table.js',
              '/dashboard/pages/admin/editcontent/editcontent.rest.services.js',
              // '/bower_components/ngMask/dist/ngMask.min.js'                   
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'ویرایش خبر'
        }
      })
      .state('admin.link', {
        url: '/link',
        templateUrl: 'dashboard/pages/admin/link/link.html',
        controller: 'LinkController',
        controllerAs: 'LinkViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/admin/link/link.controller.js',
              '/dashboard/pages/admin/link/link.css'           
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'مدیریت پیوند ها'
        }
      })
      .state('admin.profile', {
        url: '/profile',
        templateUrl: 'dashboard/pages/admin/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'ProfileViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/admin/profile/profile.controller.js',
              '/dashboard/pages/admin/profile/profile.css'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'مدیریت اطلاعات شخصی'
        }
      });
  }

})();