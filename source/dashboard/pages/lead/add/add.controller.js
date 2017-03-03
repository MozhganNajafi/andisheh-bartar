+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('AddController', ['ProfileTypeRest', 'AcquaintanceRest', 'ContactTypeRest', 'ActivityFieldRest', '$scope', AddController]);

  function AddController(ProfileTypeRest, AcquaintanceRest, ContactTypeRest, ActivityFieldRest, $scope) {
    var vm = this;
    vm.addLead = addLead;

    vm.basicInfo = [{
      'lang': 'fa',
      'title': 'فارسی',
      'id': '1',
      'form': [{
        'title': 'اطلاعات پایه',
        'schema': [{
            'className': 'row',
            'fieldGroup': [{
              'key': 'ProfileTypeId',
              'type': 'select',
              'templateOptions': {
                'type': 'text',
                'label': 'نوع سرنخ',
                'onChange': 'getProfileType()',
                'required': true,
                'options': [],
                'column': '6',
              },
              'controller': ['$scope', function ($scope) {
                var items = [];
                ProfileTypeRest.getList().then(function (response) {
                    if (response && response.data) {
                      response.data.forEach(function (item) {
                        items.push({
                          value: item.id,
                          name: item.name
                        });
                      }, this);
                      $scope.to.options = items;
                    }
                  },
                  function (res) {
                    console.log(res);
                  });
              }]
            }, {
              'key': 'AcquaintanceId',
              'type': 'select',
              'templateOptions': {
                'type': 'text',
                'label': 'منبع سرنخ',
                'required': true,
                'options': [],
                'column': '6',
              },
              'controller': ['$scope', function ($scope) {
                var items = [];
                AcquaintanceRest.getList().then(function (response) {
                    if (response && response.data) {
                      response.data.forEach(function (item) {
                        items.push({
                          value: item.id,
                          name: item.name
                        });
                      }, this);
                      $scope.to.options = items;
                    }
                  },
                  function (res) {
                    console.log(res);
                  });
              }],
            }]
          }, {
            'className': 'row',
            'fieldGroup': [{
              'key': 'ActivityFieldId',
              'type': 'select',
              'templateOptions': {
                'type': 'text',
                'label': 'زمینه فعالیت',
                'required': true,
                'options': [],
                'column': '6',
              },
              'controller': ['$scope', function ($scope) {
                var items = [];
                ActivityFieldRest.getList().then(function (response) {
                    if (response && response.data) {
                      response.data.forEach(function (item) {
                        items.push({
                          value: item.id,
                          name: item.name
                        });
                      }, this);
                      $scope.to.options = items;
                    }
                  },
                  function (res) {
                    console.log(res);
                  });

                // $scope.relatedFields = function () {
                //   ActivityFieldRest.one().get({
                //     'parentId': vm.sampleModel.fa[0].ActivityFieldId
                //   }).then(function () {

                //   });
                // };
              }]
            }, {
              'key': 'RelatedFieldId',
              'type': 'select',
              'templateOptions': {
                'type': 'text',
                'label': 'گرایش',
                'required': true,
                'options': [],
                'column': '6',
              },
              'controller': ['$scope', function ($scope) {
                $scope.$watch('model.ActivityFieldId', function (newValue) {
                  if (newValue != null) {
                    $scope.to.loading = ActivityFieldRest.one().get({
                      'parentId': newValue
                    }).then(function (response) {
                      $scope.to.options = response.entity.data;
                    });
                  }
                });
              }]
            }]
          },
          {
            'className': 'row',
            'fieldGroup': [{
              'key': 'ContactTypeId',
              'type': 'select',
              'templateOptions': {
                'type': 'text',
                'label': 'راه ارتباطی',
                'required': true,
                'options': [],
                'column': '6',
              },
              'controller': ['$scope', function ($scope) {
                var items = [];
                ContactTypeRest.getList().then(function (response) {
                    if (response && response.data) {
                      response.data.forEach(function (item) {
                        items.push({
                          value: item.id,
                          name: item.name
                        });
                      }, this);
                      $scope.to.options = items;
                    }
                  },
                  function (res) {
                    console.log(res);
                  });
              }],
            }]
          },
          {
            'className': 'row',
            'fieldGroup': [{
              'key': 'Description',
              'type': 'textarea',
              'templateOptions': {
                'type': 'text',
                'label': 'توضیحات',
                'required': false,
                'column': '12'
              }
            }]
          }
        ]
      }]
    }];

    $scope.$watch('$scope.model', function (value) {
      if(value){
        console.log(value);
      }
      vm.extraModel = value;
    }, true);

    function addLead() {
      console.log(vm.basicModel);
      console.log($scope);
    }
  }
})();