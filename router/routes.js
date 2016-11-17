angular.module('app.routes', [])

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.text(null);
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('scaffold', {
    abstract : true,
    templateUrl : "templates/scaffold.html"
  })

  .state('tabs', {
    url : '/tab',
    parent : "scaffold",
    abstract : true,
    templateUrl : "templates/tabs.html"
  })
  .state('location', {
    url : "/location",
    parent : "tabs",
    views : {
      'location-tab' : {
        templateUrl : "templates/location.html",
        controller : 'LocationTabCtrl'
      }
    }
  })
  .state('guide', {
    url : '/guide',
    parent : "tabs",
    views : {
      'guide-tab' : {
        templateUrl : "templates/guide.html",
        controller : "GuideTabCtrl"
      }
    }
  })
  .state('detail', {
    url : '/guide/:guideId',
    parent : "tabs",
    views : {
      'guide-tab@tabs' : {
        templateUrl : "templates/person-detail.html",
        controller : "DetailCtrl"
      }
    }
  })
  .state('more', {
    url : '/more',
    parent : "tabs",
    views : {
      'more-tab' : {
        templateUrl : "templates/more.html"
      }
    }
  })
  .state('more.favorite', {
    url : '/favorite',
    views : {
      'more-tab@tabs' : {
        templateUrl : "templates/favorite.html"
      }
    }
  })
  .state('more.setting', {
    url : '/setting',
    views : {
      'more-tab@tabs' : {
        templateUrl : "templates/setting.html"
      }
    }
  })
  .state('more.register', {
    url : '/register',
    views : {
      'more-tab@tabs' : {
        templateUrl : "templates/register.html"
      }
    }
  })
  .state('more.signUp', {
    url : '/signUp',
    views : {
      'more-tab@tabs' : {
        templateUrl : "templates/signUp.html"
      }
    }
  })
  $urlRouterProvider.otherwise("/tab/location");
})