//Ionic starter App

//angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example(also set in a <body> attribute in index.html)
// the 2nd parameter is array of 'requires'
// 'starter.controller' is fonund in service.js

angular.module('myApp', ['ionic','app.locationTabController', 'app.guideTabController', 'app.routes'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
