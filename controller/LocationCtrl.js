angular.module('app.locationCtrl', [])

.controller('LocationTabCtrl', function($scope) {
  $scope.active_content = 'cafe';
  initialize('cafe')
  $scope.setActiveContent = function(active_content) {
    $scope.active_content = active_content;
    initialize(active_content);
  }

  function initialize (category) {
    var myLatlng = new google.maps.LatLng(35.681298, 139.766247);
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
      var latlng = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map : map,
        position : place.geometry.location,
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, marker);
        calcRoute(latlng);
      })
    }
    function calcRoute(latlng) {
      rendererOptions = {
        draggable : false,
        preserveViewport : true
      };
      var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
      directionsDisplay.suppressMarkers = true;
      var directionsService = new google.maps.DirectionsService();
      google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
        computeTotalDistance(directionsDisplay.directions); //総距離合計
      });
      var request = {
        origin : myLatlng,
        destination : latlng,
        travelMode : google.maps.DirectionsTravelMode.WALKING,  //徒歩モード
        optimizeWaypoints : true,         //最適された最短距離にする
      };
      directionsService.route(request, function(response, status) {
        if(status == google.maps.DirectionsStatus.OK){
          directionsDisplay.setDirections(response);
        }
      });
    }
    function computeTotalDistance(result) {
      total = 0;
      var myroute = result.routes[0];
      for (i=0; i<myroute.legs.length; i++) {
        total += myroute.legs[i].distance.value;
      }
      total = total / 1000.
    }
    console.log($scope.active_content);
  }
    })