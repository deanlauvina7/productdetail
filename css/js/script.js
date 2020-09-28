// Initialize and add the map
function initMap() {
  // The location to load the map at
  const sanFrancisco = {
    lat: 37.7575,
    lng: -122.4377
  };
  // The map, centered at San Francisco
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 12,
      center: sanFrancisco
    });
  // The marker, positioned at San Francisco
  const marker = new google.maps.Marker({
    position: sanFrancisco,
    map: map
  });
}