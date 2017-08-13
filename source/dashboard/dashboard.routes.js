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
        controller: 'AdminController',
        controllerAs: 'AdminViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/assets/stylesheets/foundation.css',
              '/assets/stylesheets/fontawesome.css',
              '/dashboard/pages/admin/admin.css',
              '/dashboard/pages/home/home.rest.services.js',
              '/dashboard/pages/admin/admin.controller.js'

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
              '/bower_components/adm-dtp/dist/ADM-dateTimePicker.js', 
              '/bower_components/adm-dtp/dist/ADM-dateTimePicker.css',
              '/bower_components/ng-tags-input/ng-tags-input.css', 
              '/bower_components/ng-tags-input/ng-tags-input.js',          
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
              '/bower_components/adm-dtp/dist/ADM-dateTimePicker.js', 
              '/bower_components/adm-dtp/dist/ADM-dateTimePicker.css',
              '/bower_components/ng-tags-input/ng-tags-input.css', 
              '/bower_components/ng-tags-input/ng-tags-input.js',                
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
      .state('admin.comment', {
        url: '/comment',
        templateUrl: 'dashboard/pages/admin/comment/view/comment.html',
        controller: 'CommentController',
        controllerAs: 'CommentViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/admin/comment/view/comment.controller.js',
              '/dashboard/pages/admin/comment/view/comment.css',
              '/dashboard/pages/admin/comment/comment.rest.services.js'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'مدیریت نظرات'
        }
      })

      .state('admin.commentdetails', {
        url: '/commentdetails/:id',
        templateUrl: 'dashboard/pages/admin/comment/details/comment-details.html',
        controller: 'CommentDetailsController',
        controllerAs: 'CommentDetailsViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/admin/comment/details/comment-details.controller.js',
              '/dashboard/pages/admin/comment/details/comment-details.css',
              '/dashboard/pages/admin/comment/comment.rest.services.js'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'مدیریت نظرات'
        }
      })

      
      .state('admin.visitor', {
        url: '/visitor',
        templateUrl: 'dashboard/pages/admin/visitor/visitor.html',
        controller: 'VisitorController',
        controllerAs: 'VisitorViewModel',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/admin/visitor/visitor.controller.js',
              '/dashboard/pages/admin/visitor/visitor.css'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'مدیریت بازدیدکنندگان'
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
      })
      .state('admin.filemanager', {
        url: '/filemanager',
        templateUrl: 'dashboard/pages/admin/filemanageradmin/filemanageradmin.html',
        controller: 'FileManagerAdminController',
        resolve: {
          controller: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/dashboard/pages/admin/filemanageradmin/filemanageradmin.controller.js',
              '/dashboard/pages/admin/filemanageradmin/filemanageradmin.css',
              '/assets/stylesheets/dashboard.css',
              '/bower_components/ng-dialog/css/ngDialog-theme-default.css',
              '/bower_components/ng-dialog/css/ngDialog.css',
              '/bower_components/ng-dialog/js/ngDialog.js',
              '/bower_components/toastr/toastr.css',
              '/bower_components/toastr/toastr.js',
              '/bower_components/angular-tree-control/css/tree-control.css',
              '/bower_components/angular-tree-control/angular-tree-control.js',
              '/bower_components/ng-file-upload/ng-file-upload.js',
              '/bower_components/ng-file-upload-shim/ng-file-upload-shim.js'
            ]);
          }]
        },
        ncyBreadcrumb: {
          label: 'مدیریت اطلاعات شخصی'
        }
      });
  }

})();