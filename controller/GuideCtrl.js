angular.module('app.guideTabController', [])

.controller('GuideTabCtrl', function($scope){
    $scope.items = [
    {
      id:0,
      title : '古川未鈴',
      subtitle : '歌って踊れるゲーマーアイドル'
    },
    {
      id:1,
      title : '相沢梨紗',
      subtitle : '2.5次元伝説！'
    },
    {
      id:2,
      title : '夢眠ねむ',
      subtitle : '永遠の魔法少女未満'
    },
    {
      id : 3,
      title : '成瀬瑛美',
      subtitle : 'ハイテンションA-POPガール'
    },
    {
      id : 4,
      title : '最上もが',
      subtitle : '金色の異端児'
    },
    {
      id : 5,
      title : '藤咲彩音',
      subtitle : '踊ってみたら七変化！'
    }
  ];
  $scope.moredata = false;
  $scope.loadMoreData = function() {
    $scope.items.push({
      id: $scope.items.length,
      title: $scope.items.length,
      subtitle : $scope.items.length
    });
    if($scope.items.length==100){
      $scope.moredata = true;
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };
})
