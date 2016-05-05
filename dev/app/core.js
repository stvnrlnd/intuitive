(function() {
  'use strict';
  angular.module('intuitive', [])
    .controller('planController', function($scope, planService) {
      planService.getPlans(function(response) {
        $scope.plans = response.data;
        console.log(response.data);
      });
    })
    .service('planService', function($http) {
      this.getPlans = function(callback) {
        $http.get('app/mock/plans.json')
          .then(callback);
      };
    });
})();
