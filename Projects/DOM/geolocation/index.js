const para1 = document.getElementById("latitudeText");
const para2 = document.getElementById("longitudeText");

let id;
function getLocation() {
  let latitude = para1.textContent;
  let longitude = para2.textContent;
  getAddress(latitude, longitude);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, errorMsg);
    //   id = navigator.geolocation.watchPosition(showLocation);
  }
}

function showLocation(position) {
  para1.textContent = `Latitude : ${position.coords.latitude}`;
  para2.textContent = `Longitude : ${position.coords.longitude}`;
//   console.log(position);
  // console.log(id);
  // navigator.geolocation.clearWatch(id);
}

function errorMsg(error) {
  // console.log(error);
  if (error.code == error.PERMISSION_DENIED) {
    alert("enable the location");
  }
}

function getAddress(latitude, longitude) {
  let geocoder = new google.maps.Geocoder();
  let latlng = new google.maps.LatLng(latitude, longitude);

  geocoder.geocode({ latLng: latlng }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[0]) {
        let address = results[0].formatted_address;
        console.log(address);
      } else {
        console.log("No results found");
      }
    } else {
      console.log("Geocoder failed due to: " + status);
    }
  });
}
