angular.module("ol3.map.ctrl", [])
.controller("MapCtrl", ["ol3Map",
  function(ol3Map) {
  // === Variables ===
  var vm = this;
  // === Private ===
  // constructor
  function init() {
    ol3Map.init({
      // config options
    });
  }
  // === Start module ===
  init();
  // === Public ===
}]);
