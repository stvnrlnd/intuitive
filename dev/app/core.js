(function() {
  'use strict';
  angular.module('intuitive', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'template/home.html',
          controller: 'homeController'
        })
        .state('plans', {
          url: '/plans',
          templateUrl: 'template/plans.html',
          controller: 'planController'
        })
        .state('directory', {
          url: '/directory',
          templateUrl: 'template/directory.html',
          controller: 'directoryController'
        });
      $urlRouterProvider
        .otherwise('/');
    })
    .controller('homeController', function($scope) {
      $scope.name = "beautiful";
    })
    .controller('planController', function($scope, planService) {
      $scope.search = '';
      planService.getPlans(function(response) {
        $scope.plans = response.data;
        console.log(response.data);
      });
    })
    .controller('directoryController', function($scope, directoryService) {
      directoryService.getPeople(function(response) {
        $scope.people = response.data;
        console.log(response.data);
      });
    })
    .service('planService', function($http) {
      this.getPlans = function(callback) {
        $http.get('app/mock/plans.json')
          .then(callback);
      };
    })
    .service('directoryService', function($http){
      this.getPeople = function(callback) {
        $http.get('app/mock/people.json')
          .then(callback);
      }
    });
})();
