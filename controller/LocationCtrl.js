angular.module('app.locationTabController', [])

.controller('LocationTabCtrl', function($scope) {
  $scope.active_content = 'cafe';
  initialize('cafe')
  $scope.setActiveContent = function(active_content) {
    $scope.active_content = active_content;
    initialize(active_content);
  }

  function initialize (category) {
    var myLatlng = new google.maps.LatLng(35.630442, 139.882951);
    var mapOptions = {
      zoom : 15,
      center : myLatlng,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location : myLatlng,
      radius : 2000,
      types : [category]
    }, callback);
    function callback (results, status) {
      if(status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }
    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map : map,
        position : place.geometry.location
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, marker);
      })
    };
    console.log($scope.active_content);
  }
    })