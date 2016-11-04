angular.module('app.detailCtrl', [])

.controller('DetailCtrl', function($scope, $stateParams, Guides){
    $scope.guide = Guides.get($stateParams.guideId);
})