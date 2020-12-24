if (document.querySelector('.main-slider')) {
  $('.main-slider').slick({
    dots: false,
    arrows: true,
    prevArrow: '<div class="main-slider-prev slick-prev"><img src="./img/slider-index-arrow-left.svg" alt=""></div>',
    nextArrow: '<div class="main-slider-next slick-next"><img src="./img/slider-index-arrow-right.svg" alt=""></div>',
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
}

// video

let btnVideoPlay = document.getElementById('btnVideoPlay');
let videoMain = document.getElementById('videoSrc');
let videoYout = document.getElementById('videoYout');
let tag = document.createElement('script');

if (videoYout) {
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoYout', {
      height: '460',
      videoId: '7jloZUlCRnE'
    });
  }
}

if (btnVideoPlay) {
  btnVideoPlay.onclick = function () {
    this.style.display = 'none';
    if (videoMain) {
      videoMain.play();
    } else if (videoYout) {
      player.playVideo();
    }
  }
}

// map

let mapBlock = document.getElementById('contact');

if (mapBlock) {
  google.maps.event.addDomListener(window, 'load', init);

  function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 11,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(40.6700, -73.9400), // New York

      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{
        "featureType": "all",
        "elementType": "labels",
        "stylers": [{"visibility": "off"}]
      }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [{"color": "#f4f0d3"}]
      }, {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{"color": "#d4e5ce"}]
      }, {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#d4e5ce"}]
      }, {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry",
        "stylers": [{"visibility": "off"}]
      }, {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#d4e5ce"}]
      }, {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#d4e5ce"}]}, {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [{"visibility": "off"}]
      }, {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
      }, {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
      }, {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [{"visibility": "on"}]
      }, {
        "featureType": "poi.government",
        "elementType": "geometry",
        "stylers": [{"color": "#d4e5ce"}]
      }, {
        "featureType": "poi.medical",
        "elementType": "geometry",
        "stylers": [{"color": "#d4e5ce"}]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{"color": "#d4e5ce"}]
      }, {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
      }, {
        "featureType": "poi.school",
        "elementType": "geometry",
        "stylers": [{"color": "#d4e5ce"}]
      }, {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#d4e5ce"}]
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{"visibility": "off"}]
      }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{"visibility": "off"}]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#ffe15f"}]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{"color": "#efd151"}]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#ffffff"}]
      }, {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [{"color": "black"}]
      }, {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
      }, {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#d4e5ce"}]
      }, {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
      }, {
        "featureType": "transit.station.rail",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
      }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#aacbd9"}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.6700, -73.9400),
      map: map,
      title: 'Snazzy!'
    });
  }
}
