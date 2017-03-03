+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('SidebarController', [SidebarController]);

  function SidebarController() {

    var self = this;
    self.expanded = true;
    self.name = 'آذرخش شالی';
    self.role = 'پشتیبانی';

    self.menuItems = [{
      icon: 'fa fa-comments-o',
      title: 'سرنخ های من',
      link: '#/dashboard/lead'
    }, {
      icon: 'fa fa-lightbulb-o',
      title: 'فرصت های من',
      link: '#/dashboard/chance'
    }, {
      icon: 'fa fa-address-book-o',
      title: 'سرنخ های عمومی',
      link: '#/dashboard/home'
    }];
  }

})();