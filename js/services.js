angular.module('app.services', [])

.factory('Guides', function(){
    var guides = [
    {
      id:0,
      title : '古川未鈴',
      subtitle : '歌って踊れるゲーマーアイドル',
      image : 'img/mirin.png'
    },
    {
      id:1,
      title : '相沢梨紗',
      subtitle : '2.5次元伝説！',
      image : 'img/risa.jpg'
    },
    {
      id:2,
      title : '夢眠ねむ',
      subtitle : '永遠の魔法少女未満',
      image : 'img/nemu.jpg'
    },
    {
      id : 3,
      title : '成瀬瑛美',
      subtitle : 'ハイテンションA-POPガール',
      image : 'img/eimi.jpg'
    },
    {
      id : 4,
      title : '最上もが',
      subtitle : '金色の異端児',
      image : 'img/moga.jpg'
    },
    {
      id : 5,
      title : '藤咲彩音',
      subtitle : '踊ってみたら七変化！',
      image : 'img/ayane.jpg'
    }
    ];
    return{
        all : function() {
            return guides;
        },
        get : function(guideId) {
            for (var i = 0; i < guides.length; i++) {
                if(guides[i].id === parseInt(guideId)) {
                    return guides[i];
                }
            }
            return null;
        }
    };
})