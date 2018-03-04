if( document.getElementsByClassName("map-box")[0] ) {

	var map;
	var marker;
	var image = "img/map_marker.png";
	var styles;

	function initMap() {

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 55.7938666, lng: 37.5445906},
			scrollwheel: false,
			scaleControl: false,
			zoom: 15
		});

		marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: {lat: 55.7931666, lng: 37.5445906},
			map: map,
			icon: image,
			title: 'Ziegler'
		});

		marker.addListener('click', toggleBounce);

	}

	function toggleBounce() {
	  if (marker.getAnimation() !== null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}

}



