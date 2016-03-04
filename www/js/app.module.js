angular.module('myApp', ['ionic', 'ngCordovaBluetoothLE'])

//For live reload debugging
.run(function($state, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    $state.go("home");
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('app', {
    abstract: true,
    templateUrl: ''
  })

  .state('home', {
    parent: 'app',
    url: '/',
    controller: "HomeCtrl",
    templateUrl: "templates/home.html",
  })

  .state('device', {
    url: '/:address',
    templateUrl: 'templates/device.html',
    controller: "DeviceCtrl"
  })

  .state('service', {
    url: '/:address/:service',
    templateUrl: 'templates/service.html',
    controller: "ServiceCtrl"
  })

  .state('characteristic', {
    url: '/:address/:service/:characteristic',
    templateUrl: 'templates/characteristic.html',
    controller: "CharacteristicCtrl"
  });

  $urlRouterProvider.otherwise('/');
})

.filter('null', function() {
  return function(value) {
    if (value === null || value === undefined) {
      return "<null>";
    }
    return value;
  };
});
