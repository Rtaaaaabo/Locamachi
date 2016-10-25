angular.module('app.routes', [])

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
  .state('guide.0', {
    url : '/mirin',
    views : {
      'guide-tab@tabs': {
        templateUrl : "templates/mirin.html"
      }
    }
  })
  .state('guide.1', {
    url : '/risa',
    views : {
      'guide-tab@tabs': {
        templateUrl : "templates/risa.html"
      }
    }
  })
  .state('guide.2', {
    url : '/nemu',
    views : {
      'guide-tab@tabs' : {
        templateUrl : "templates/nemu.html"
      }
    }
  })
  .state('guide.3', {
    url : '/eimi',
    views : {
      'guide-tab@tabs' : {
        templateUrl : "templates/eimi.html"
      }
    }
  })
  .state('guide.4', {
    url : '/moga',
    views : {
      'guide-tab@tabs' : {
        templateUrl : "templates/moga.html"
      }
    }
  })
  .state('guide.5', {
    url : '/ayane',
    views : {
      'guide-tab@tabs' : {
      templateUrl : "templates/ayane.html"
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
  $urlRouterProvider.otherwise("/tab/location");
})