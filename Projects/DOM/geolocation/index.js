const para1 = document.getElementById("latitudeText");
const para2 = document.getElementById("longitudeText");
let latValue;
let lonValue;

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

function getLocation() {
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, errorMsg,options);
  }

}

function showLocation(position) {
  console.log("show1");
  para1.textContent = position.coords.latitude;
  para2.textContent = position.coords.longitude;
  latValue = position.coords.latitude;
  lonValue = position.coords.longitude;
initMap()
}

function errorMsg(error) {
  // console.log(error);
  if (error.code == error.PERMISSION_DENIED) {
    alert("enable the location");
  }
}

let map;

async function initMap() {
  console.log("show3");
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: latValue, lng: lonValue },
    zoom: 20,
  });
}

//   const geocoder = new google.maps.Geocoder();
//   const infowindow = new google.maps.InfoWindow();
// document.getElementById("submit").addEventListener("click", ()=>{
//   geocodeLatLng(geocoder,map,infowindow);
// })
  


// async function geocodeLatLng(geocoder,map,infowindow) {
//   console.log(geocoder,infowindow);
//   const latlng = {
//     lat: parseFloat(latValue),
//     lng: parseFloat(lonValue),
//   };
//   console.log(latlng);
//  let resval = await geocoder.geocode({ location: latlng })
//  console.log(resval);

// }

