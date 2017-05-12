+(function () {

    'use strict';
    angular
        .module('CommonApplication')
        .filter('htmlToPlaintext', function () {
            return function (text) {
                return text ? String(text).replace(/<[^>]+>/gm, '') : '';
            };
        });

})();