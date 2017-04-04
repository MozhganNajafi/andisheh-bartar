+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('HomeController', [ HomeController ]);

  function HomeController() {

    var vm = this;
    vm.redirect = redirect;

    function redirect() {

    }

    vm.news = [{
      'content': 'Danish Green Card allows you to get the residence permit to look for work or do work in Denmark. The work permit and residency in Denmark under the Green Card Scheme is granted to a candidate, based on his score in point based evaluation system.',
      'title': 'خبر خوب خبر بد',
      'creationDatetime': null,
      'author': 'mozhgan najafi',
      'newscategory': null,
      'newslabels': [],
      'relatedLinks': []
    },
    {
      'content': 'Danish Green Card allows you to get the residence permit to look for work or do work in Denmark. The work permit and residency in Denmark under the Green Card Scheme is granted to a candidate, based on his score in point based evaluation system.',
      'title': 'خبر خوب خبر بد',
      'creationDatetime': null,
      'author': 'mozhgan najafi',
      'newscategory': null,
      'newslabels': [],
      'relatedLinks': []
    },
    {
      'content': 'Danish Green Card allows you to get the residence permit to look for work or do work in Denmark. The work permit and residency in Denmark under the Green Card Scheme is granted to a candidate, based on his score in point based evaluation system.',
      'title': 'خبر خوب خبر بد',
      'creationDatetime': null,
      'author': 'mozhgan najafi',
      'newscategory': null,
      'newslabels': [],
      'relatedLinks': []
    },
    {
      'content': 'Danish Green Card allows you to get the residence permit to look for work or do work in Denmark. The work permit and residency in Denmark under the Green Card Scheme is granted to a candidate, based on his score in point based evaluation system.',
      'title': 'خبر خوب خبر بد',
      'creationDatetime': null,
      'author': 'mozhgan najafi',
      'newscategory': null,
      'newslabels': [],
      'relatedLinks': []
    },
    {
      'content': 'Danish Green Card allows you to get the residence permit to look for work or do work in Denmark. The work permit and residency in Denmark under the Green Card Scheme is granted to a candidate, based on his score in point based evaluation system.',
      'title': 'خبر خوب خبر بد',
      'creationDatetime': null,
      'author': 'mozhgan najafi',
      'newscategory': null,
      'newslabels': [],
      'relatedLinks': []
    }];


  }
})();