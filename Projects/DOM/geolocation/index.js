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

// function showLocation(position) {

//     const { latitude, longitude } = position.coords;
//     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=40f25cef362f4f6590c517d5a721927e`)
//       .then(response => response.json())
//       .then(data => console.log(data.results[0].components.city)); 

// }

async function showLocation(position){
  console.log(position);
  const { latitude, longitude} = position.coords;
  console.log(accuracy);
  let data = await  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=40f25cef362f4f6590c517d5a721927e`)
  let jsonData = await data.json();
  console.log(jsonData);

}

function errorMsg(error) {
  if (error.code == error.PERMISSION_DENIED) {                      
    alert("enable the location");
  }
}
