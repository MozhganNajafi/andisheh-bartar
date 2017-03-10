+(function () {


    'use strict';

    angular
        .module('DashboardApplication')
        .component('recentArticles', {

            templateUrl: 'dashboard/components/recent-articles/recent.articles.html',
            scope: true,
            controller: 'RecentArticlesController',
            controllerAs: 'RecentArticlesViewModel',

        })



})();