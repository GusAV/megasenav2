angular.module('megaApp.controllers', [])
    .controller('megasenaCtrl', function($scope) {
      var vm = $scope;  
      vm.id = [];
      for (x = 1; x <= 60; x++) {
        vm.id.push(x);
      }

});