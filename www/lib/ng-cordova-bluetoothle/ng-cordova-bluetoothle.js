// install  :     cordova plugin add https://github.com/randdusing/cordova-plugin-bluetoothle.git
// link     :     https://github.com/randdusing/cordova-plugin-bluetoothle

angular.module('ngCordovaBluetoothLE', []).factory('$cordovaBluetoothLE', ['$q', '$timeout', function($q, $timeout){
  var errorUnsupported = {
    error: "unsupported",
    message: "Operation unsupported"
  };

  var initialize = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.initialize(
        function(obj) {
          q.notify(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var enable = function() {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.enable(
        null,
        function(obj) {
          q.reject(obj);
        }
      );
    }
    return q.promise;
  };

  var disable = function() {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.disable(
        null,
        function(obj) {
          q.reject(obj);
        }
      );
    }
    return q.promise;
  };

  var startScan = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = null;
      if (params.scanTimeout) {
        timeout = $timeout(function() {
          window.bluetoothle.stopScan(
            function(obj) {
              q.resolve(obj);
            },
            function(obj) {
              q.reject(obj);
            }
          );
        }, params.scanTimeout);
      }

      window.bluetoothle.startScan(
        function(obj) {
          q.notify(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var stopScan = function() {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.stopScan(
        function(obj) {
          q.resolve(obj);
        },
        function(obj) {
          q.reject(obj);
        }
      );
    }
    return q.promise;
  };

  var retrieveConnected = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.retrieveConnected(
        function(obj) {
          q.resolve(obj);
        },
        function(obj) {
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };


  var connect = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.connect(
        function(obj) {
          $timeout.cancel(timeout);
          if (params.useResolve) {
            q.resolve(obj);
          } else {
            q.notify(obj);
          }
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var reconnect = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.reconnect(
        function(obj) {
          $timeout.cancel(timeout);
          if (params.useResolve) {
            q.resolve(obj);
          } else {
            q.notify(obj);
          }
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var disconnect = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.disconnect(
        function(obj) {
          q.resolve(obj);
        },
        function(obj) {
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var close = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.close(
        function(obj) {
          q.resolve(obj);
        },
        function(obj) {
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var discover = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.discover(
        function(obj) {
          $timeout.cancel(timeout);
          q.resolve(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var services = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.services(
        function(obj) {
          $timeout.cancel(timeout);
          q.resolve(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var characteristics = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.characteristics(
        function(obj) {
          $timeout.cancel(timeout);
          q.resolve(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var descriptors = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.descriptors(
        function(obj) {
          $timeout.cancel(timeout);
          q.resolve(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var read = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.read(
        function(obj) {
          $timeout.cancel(timeout);
          q.resolve(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var subscribe = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.subscribe(
        function(obj) {
          $timeout.cancel(timeout);
          q.notify(obj);

          if (params.subscribeTimeout && obj.status == "subscribed") {
            $timeout(function() {
              window.bluetoothle.unsubscribe(
                function(obj) {
                  q.resolve(obj);
                },
                function(obj) {
                  q.reject(obj);
                },
                params
              );
            }, params.subscribeTimeout);
          }
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var unsubscribe = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.unsubscribe(
        function(obj) {
          $timeout.cancel(timeout);
          q.resolve(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var write = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.write(
        function(obj) {
          $timeout.cancel(timeout);
          q.resolve(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var readDescriptor = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.readDescriptor(
        function(obj) {
          $timeout.cancel(timeout);
          q.resolve(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var writeDescriptor = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.writeDescriptor(
        function(obj) {
          $timeout.cancel(timeout);
          q.resolve(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var rssi = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.rssi(
        function(obj) {
          $timeout.cancel(timeout);
          q.resolve(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var mtu = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.mtu(
        function(obj) {
          $timeout.cancel(timeout);
          q.resolve(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var requestConnectionPriority = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      var timeout = createTimeout(params, q);

      window.bluetoothle.requestConnectionPriority(
        function(obj) {
          $timeout.cancel(timeout);
          q.resolve(obj);
        },
        function(obj) {
          $timeout.cancel(timeout);
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };


  var isInitialized = function() {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.isInitialized(
        function(obj) {
          q.resolve(obj);
        }
      );
    }
    return q.promise;
  };

  var isEnabled = function() {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.isEnabled(
        function(obj) {
          q.resolve(obj);
        }
      );
    }
    return q.promise;
  };

  var isScanning = function() {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.isScanning(
        function(obj) {
          q.resolve(obj);
        }
      );
    }
    return q.promise;
  };

  var isConnected = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.isConnected(
        function(obj) {
          q.resolve(obj);
        },
        function(obj) {
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };

  var isDiscovered = function(params) {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.isDiscovered(
        function(obj) {
          q.resolve(obj);
        },
        function(obj) {
          q.reject(obj);
        },
        params
      );
    }
    return q.promise;
  };


  var hasPermission = function() {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.hasPermission(
        function(obj) {
          q.resolve(obj);
        },
        function(obj) {
          q.reject(obj);
        }
      );
    }
    return q.promise;
  };

  var requestPermission = function() {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.requestPermission(
        function(obj) {
          q.resolve(obj);
        },
        function(obj) {
          q.reject(obj);
        }
      );
    }
    return q.promise;
  };

  var isLocationEnabled = function() {
    var q = $q.defer();
    if (window.bluetoothle === undefined) {
      q.reject(errorUnsupported);
    } else {
      window.bluetoothle.isLocationEnabled(
        function(obj) {
          q.resolve(obj);
        },
        function(obj) {
          q.reject(obj);
        }
      );
    }
    return q.promise;
  };


  var encodedStringToBytes = function(value) {
    if (window.bluetoothle === undefined) {
      return;
    }
    return window.bluetoothle.encodedStringToBytes(value);
  };

  var bytesToEncodedString = function(value) {
    if (window.bluetoothle === undefined) {
      return;
    }
    return window.bluetoothle.bytesToEncodedString(value);
  };

  var stringToBytes = function(value) {
    if (window.bluetoothle === undefined) {
      return;
    }
    return window.bluetoothle.stringToBytes(value);
  };

  var bytesToString = function(value) {
    if (window.bluetoothle === undefined) {
      return;
    }
    return window.bluetoothle.bytesToString(value);
  };

  var createTimeout = function(params, q) {
    if (params.timeout) {
      return $timeout(function() {
        params.error = "timeout";
        q.reject(params);
      }, params.timeout);
    }
    return null;
  };

  return {
    initialize: initialize,
    enable: enable,
    disable: disable,
    startScan: startScan,
    stopScan: stopScan,
    retrieveConnected: retrieveConnected,

    connect: connect,
    reconnect: reconnect,
    disconnect: disconnect,
    close: close,
    discover: discover,
    services: services,
    characteristics: characteristics,
    descriptors: descriptors,
    read: read,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    write: write,
    readDescriptor: readDescriptor,
    writeDescriptor: writeDescriptor,
    rssi: rssi,
    mtu: mtu,
    requestConnectionPriority: requestConnectionPriority,

    isInitialized: isInitialized,
    isEnabled: isEnabled,
    isScanning: isScanning,
    isConnected: isConnected,
    isDiscovered: isDiscovered,

    hasPermission: hasPermission,
    requestPermission: requestPermission,
    isLocationEnabled: isLocationEnabled,

    encodedStringToBytes: encodedStringToBytes,
    bytesToEncodedString: bytesToEncodedString,
    stringToBytes: stringToBytes,
    bytesToString: bytesToString
  };
}]);
