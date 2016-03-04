angular.module('myApp').controller('ServiceCtrl', function($scope, $rootScope, $state, $stateParams, $cordovaBluetoothLE) {
  $scope.$on("$ionicView.beforeEnter", function () {
    $rootScope.selectedService = $rootScope.selectedDevice.services[$stateParams.service];
  });

  $scope.goToCharacteristic = function(characteristic) {
    $state.go("characteristic", {address:$rootScope.selectedDevice.address, service: $rootScope.selectedService.uuid, characteristic: characteristic.uuid});
  };
});
