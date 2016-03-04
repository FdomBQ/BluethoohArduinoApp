angular.module('myApp').controller('CharacteristicCtrl', function($scope, $rootScope, $stateParams, $cordovaBluetoothLE) {
  $scope.$on("$ionicView.beforeEnter", function () {
    $scope.selectedCharacteristic = $rootScope.selectedService.characteristics[$stateParams.characteristic];
  });
})
