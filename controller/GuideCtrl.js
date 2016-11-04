angular.module('app.guideCtrl', [])

.controller('GuideTabCtrl', function($scope, Guides){
  $scope.guides = Guides.all();
  $scope.moredata = false;

  $scope.loadMoreData = function() {
    $scope.guides.push({
      id: $scope.guides.length,
      title: $scope.guides.length,
      subtitle : $scope.guides.length
    });
    if($scope.guides.length==100){
      $scope.moredata = true;
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };
})
