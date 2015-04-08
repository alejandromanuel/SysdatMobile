// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'SysdatApp'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.init', {
    url: "/init",
    views: {
      'menuContent': {
        templateUrl: "templates/init.html"
      }
    }
  })
    .state('app.activities', {
      url: "/activities",
      views: {
        'menuContent': {
          templateUrl: "templates/activities.html",
          controller: 'AppCtrl'
        }
      }
    })

    .state('app.take-attendance', {
      url: "/take-attendance/:actID",
      views: {
        'menuContent': {
          templateUrl: "templates/take-attendance.html",
          controller:'ActCtrl'
        }
      }
    })

    .state('app.memeber-attendance', {
      url: "/memeber-attendance",
      views: {
        'menuContent': {
          templateUrl: "templates/member-attendance.html"
        }
      }
    })
       .state('app.activity', {
      url: "/activities/:actID",
      views: {
        'menuContent': {
          templateUrl: "templates/activity.html",
          controller: 'ActCtrl'
        }
      }
    })
         .state('app.member', {
      url: "/member/:actID",
      views: {
        'menuContent': {
          templateUrl: "templates/member.html",
          controller: 'AppCtrl'
        }
      }
    })
         .state('app.nonmember', {
      url: "/nonmember",
      views: {
        'menuContent': {
          templateUrl: "templates/nonmember.html",
          controller: 'AppCtrl'
        }
      }
    }) .state('app.report', {
      url: "/report/:actID",
      views: {
        'menuContent': {
          templateUrl: "templates/report.html",
          controller: 'AppCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/init');
});
