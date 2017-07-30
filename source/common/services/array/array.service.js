(function() {

  'use strict';

  angular
    .module('CommonApplication')
    .service('ArrayHelper', ArrayHelperService);

  function ArrayHelperService() {

    return {
      clean: clean,
      diff: diff,
      pickDeep: pickDeep,
      swap: swap,
      move: move,
      findDeep: findDeep,
      removeDeep: removeDeep
    };

    function swap(array, indexA, indexB) {
      var temp = array[indexA];
      array[indexA] = array[indexB];
      array[indexB] = temp;
    }

    function move(array, fromIndex, toIndex) {
      array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
    }

    function clean(array, deleteValue) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] == deleteValue) {
          array.splice(i, 1);
          i--;
        }
      }
      return array;
    }

    function diff(firstArray, secondArray) {
      var result = [];
      result = firstArray.filter(function(firstArrayItem) {
        return secondArray.filter(function(secondArrayItem) {
          return secondArrayItem.id !== firstArrayItem.id;
        }).length != 0;
      });
      return result;
    }

    function pickDeep(object, key) {
      if (_.has(object, key)) {
        return [object];
      }
      return _.flatten(_.map(object, function(v) {
        return typeof v == "object" ? pickDeep(v, key) : [];
      }), true);
    }

    function findDeep(array, id) {
      var object;
      var f = function(a) {
        if (a.id === id || a.uuid === id) {
          object = a;
          return true;
        }
        if (Array.isArray(a.items)) {
          for (var item in a.items) {
            try {
              if (angular.isArray(a.items[item])) {
                a.items[item].some(f);
              } else if (angular.isObject(a.items[item])) {
                f(a.items[item]);
              }
            } catch (error) {

            }
          }
        }
      };
      array.some(f);
      return object;
    }

    function removeDeep(array, id) {
      var f = function(a, parent) {
        if (a && (a.id === id || a.uuid === id)) {
          var arr = [];
          if (typeof parent === 'object'){
            arr = parent;
          }
          else{
            arr = array;
          }
          _.remove(arr, {
            uuid: id
          });
          return array;
        } else if (Array.isArray(a.items)) {
          for (var item in a.items) {
            try {
              if (angular.isArray(a.items[item])) {
                for (var index = 0; index < a.items[item].length; index++) {
                  f(a.items[item][index], a.items[item]);
                }
              } else if (angular.isObject(a.items[item])) {
                f(a.items[item]);
              }
            } catch (error) {

            }
          }
        }
      };
      array.some(f);
    }

  }

})();