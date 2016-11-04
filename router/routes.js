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
  /*.state('guide.0', {
    url : '/0',
    views : {
      'guide-tab@tabs': {
        templateUrl : "templates/0.html"
      }
    }
  })
  .state('guide.1', {
    url : '/risa',
    views : {
      'guide-tab@tabs': {
        templateUrl : "templates/1.html"
      }
    }
  })
  .state('guide.2', {
    url : '/nemu',
    views : {
      'guide-tab@tabs' : {
        templateUrl : "templates/2.html"
      }
    }
  })
  .state('guide.3', {
    url : '/eimi',
    views : {
      'guide-tab@tabs' : {
        templateUrl : "templates/3.html"
      }
    }
  })
  .state('guide.4', {
    url : '/moga',
    views : {
      'guide-tab@tabs' : {
        templateUrl : "templates/4.html"
      }
    }
  })
  .state('guide.5', {
    url : '/ayane',
    views : {
      'guide-tab@tabs' : {
      templateUrl : "templates/5.html"
      }
    }
  })*/
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