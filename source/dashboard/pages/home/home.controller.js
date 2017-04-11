+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('HomeController', ['$state', HomeController]);

  function HomeController($state) {

    var vm = this;
    vm.redirect = redirect;

    function redirect(newsId) {
      $state.go('dashboard.news', { id: newsId });
    }

    vm.news = [{
      'id': 1,
      'content': 'Danish Green Card allows you to get the residence permit to look for work or do work in Denmark. The work permit and residency in Denmark under the Green Card Scheme is granted to a candidate, based on his score in point based evaluation system.',
      'title': 'خبر خوب خبر بد',
      'creationDatetime': '1395/02/05 05:11',
      'author': 'عباس مقدسی',
      'newscategory': null,
      'newslabels': [],
      'relatedLinks': []
    },
    {
      'id': 2,
      'content': 'Danish Green Card allows you to get the residence permit to look for work or do work in Denmark. The work permit and residency in Denmark under the Green Card Scheme is granted to a candidate, based on his score in point based evaluation system.',
      'title': 'خبر خوب خبر بد',
      'creationDatetime': '1395/02/05 05:11',
      'author': 'عباس مقدسی',
      'newscategory': null,
      'newslabels': [],
      'relatedLinks': []
    },
    {
      'id': 3,
      'content': 'Danish Green Card allows you to get the residence permit to look for work or do work in Denmark. The work permit and residency in Denmark under the Green Card Scheme is granted to a candidate, based on his score in point based evaluation system.',
      'title': 'خبر خوب خبر بد',
      'creationDatetime': '1395/02/05 05:11',
      'author': 'عباس مقدسی',
      'newscategory': null,
      'newslabels': [],
      'relatedLinks': []
    },
    {
      'id': 4,
      'content': 'Danish Green Card allows you to get the residence permit to look for work or do work in Denmark. The work permit and residency in Denmark under the Green Card Scheme is granted to a candidate, based on his score in point based evaluation system.',
      'title': 'خبر خوب خبر بد',
      'creationDatetime': null,
      'author': 'عباس مقدسی',
      'newscategory': null,
      'newslabels': [],
      'relatedLinks': []
    },
    {
      'id': 5,
      'content': 'Danish Green Card allows you to get the residence permit to look for work or do work in Denmark. The work permit and residency in Denmark under the Green Card Scheme is granted to a candidate, based on his score in point based evaluation system.',
      'title': 'خبر خوب خبر بد',
      'creationDatetime': null,
      'author': 'عباس مقدسی',
      'newscategory': null,
      'newslabels': [],
      'relatedLinks': []
    }];


  }
})();