angular.module('myApp').controller('HomeCtrl', function($scope, $rootScope, $state, $cordovaBluetoothLE) {
  $rootScope.devices = {};

  $scope.goToDevice = function(device) {
    $state.go("device", {address:device.address});
  };

  $scope.isEmpty = function() {
    if (Object.keys($rootScope.devices).length === 0) {
      return true;
    }
    return false;
  };

  $rootScope.initialize = function() {
    var params = {request:true};

    console.log("Initialize : " + JSON.stringify(params));

    $cordovaBluetoothLE.initialize(params).then(null, null, function(obj) {
      console.log("Initialize Success : " + JSON.stringify(obj));
    });
  };

  $rootScope.enable = function() {
    console.log("Enable");

    $cordovaBluetoothLE.enable().then(null, function(obj) {
      console.log("Enable Error : " + JSON.stringify(obj));
    });
  };

  $rootScope.disable = function() {
    console.log("Disable");

    $cordovaBluetoothLE.disable().then(null, function(obj) {
      console.log("Disable Error : " + JSON.stringify(obj));
    });
  };

  $rootScope.startScan = function() {
    var params = {
      services:[],
      allowDuplicates: false,
      scanMode: bluetoothle.SCAN_MODE_LOW_POWER,
      matchMode: bluetoothle.MATCH_MODE_STICKY,
      matchNum: bluetoothle.MATCH_NUM_ONE_ADVERTISEMENT,
      //callbackType: bluetoothle.CALLBACK_TYPE_FIRST_MATCH,
      //scanTimeout: 15000,
    };

    console.log("Start Scan : " + JSON.stringify(params));

    $cordovaBluetoothLE.startScan(params).then(function(obj) {
      console.log("Start Scan Auto Stop : " + JSON.stringify(obj));
    }, function(obj) {
      console.log("Start Scan Error : " + JSON.stringify(obj));
    }, function(obj) {
      console.log("Start Scan Success : " + JSON.stringify(obj));

      addDevice(obj);
    });
  };

  $rootScope.stopScan = function() {
    console.log("Stop Scan");

    $cordovaBluetoothLE.stopScan().then(function(obj) {
      console.log("Stop Scan Success : " + JSON.stringify(obj));
    }, function(obj) {
      console.log("Stop Scan Error : " + JSON.stringify(obj));
    });
  };

  $rootScope.retrieveConnected = function() {
    var params = {services:["180D"]};

    console.log("Retrieve Connected : " + JSON.stringify(params));

    $cordovaBluetoothLE.retrieveConnected(params).then(function(obj) {
      console.log("Retrieve Connected Success : " + JSON.stringify(obj));

      for (var i = 0; i < obj.length; i++) {
        addDevice(obj[i]);
      }
    }, function(obj) {
      console.log("Retrieve Connected Error : " + JSON.stringify(obj));
    });
  };

  $rootScope.isInitialized = function() {
    console.log("Is Initialized");

    $cordovaBluetoothLE.isInitialized().then(function(obj) {
      console.log("Is Initialized Success : " + JSON.stringify(obj));
    });
  };

  $rootScope.isEnabled = function() {
    console.log("Is Enabled");

    $cordovaBluetoothLE.isEnabled().then(function(obj) {
      console.log("Is Enabled Success : " + JSON.stringify(obj));
    });
  };

  $rootScope.isScanning = function() {
    console.log("Is Scanning");

    $cordovaBluetoothLE.isScanning().then(function(obj) {
      console.log("Is Scanning Success : " + JSON.stringify(obj));
    });
  };

  function addDevice(obj) {
    if (obj.status == "scanStarted") {
      return;
    }

    if ($rootScope.devices[obj.address] !== undefined) {
      return;
    }

    obj.services = {};
    $rootScope.devices[obj.address] = obj;
  }

  $rootScope.hasPermission = function() {
    console.log("Has Permission");

    $cordovaBluetoothLE.hasPermission().then(function(obj) {
      console.log("Has Permission Success : " + JSON.stringify(obj));
    }, function(obj) {
      console.log("Has Permission Error : " + JSON.stringify(obj));
    });
  };

  $rootScope.requestPermission = function() {
    console.log("Request Permission");

    $cordovaBluetoothLE.requestPermission().then(function(obj) {
      console.log("Request Permission Success : " + JSON.stringify(obj));
    }, function(obj) {
      console.log("Request Permission Error : " + JSON.stringify(obj));
    });
  };

  $rootScope.isLocationEnabled = function() {
    console.log("Is Location Enabled");

    $cordovaBluetoothLE.isLocationEnabled().then(function(obj) {
      console.log("Is Location Enabled Success : " + JSON.stringify(obj));
    }, function(obj) {
      console.log("Is Location Enabled Error : " + JSON.stringify(obj));
    });
  };
});
