angular.module('app.guideTabController', [])
.controller('GuideTabCtrl', function($scope){
  $scope.items = [
  {
    id:0,
    title : '古川未鈴',
    subtitle : '歌って踊れるゲーマーアイドル',
    background : 'img/furukawamirin.jpg'
  },
  {
    id:1,
    title : '相沢梨紗',
    subtitle : '2.5次元伝説！',
    background : 'img/aizawarisa.jpg'
  },
  {
    id:2,
    title : '夢眠ねむ',
    subtitle : '永遠の魔法少女未満',
    background : 'http://cdn.desktopwallpapers4.me/media/thumbs_400x250/2/15159.jpg'
  },
  {
    id : 3,
    title : '成瀬瑛美',
    subtitle : 'ハイテンションA-POPガール',
    background : 'http://cdn.desktopwallpapers4.me/media/thumbs_400x250/2/15159.jpg'
  },
  {
    id : 4,
    title : '最上もが',
    subtitle : '金色の異端児',
    background : 'http://cdn.desktopwallpapers4.me/media/thumbs_400x250/2/15159.jpg'
  },
  {
    id : 5,
    title : '藤咲彩音',
    subtitle : '踊ってみたら七変化！',
    background : 'http://cdn.desktopwallpapers4.me/media/thumbs_400x250/2/15159.jpg'
  }
  ];
})