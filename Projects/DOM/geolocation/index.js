const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, errorMsg, options);
  }
}

// function showLocation(position) {

//     const { latitude, longitude } = position.coords;
//     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=40f25cef362f4f6590c517d5a721927e`)
//       .then(response => response.json())
//       .then(data => console.log(data.results[0].components.city));

// }

async function showLocation(position) {
  console.log(position);
  const { latitude, longitude } = position.coords;
  document.getElementById(
    "latitudeText"
  ).textContent = `Latitude : ${latitude}`;
  document.getElementById(
    "longitudeText"
  ).textContent = `Longitude : ${longitude}`;
  let data = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=40f25cef362f4f6590c517d5a721927e`
  );
  let jsonData = await data.json();
  console.log(jsonData);
  document.getElementById(
    "country"
  ).textContent = `Country : ${jsonData.results[0].components.country}`;
  document.getElementById(
    "state"
  ).textContent = `State : ${jsonData.results[0].components.state}`;
  document.getElementById(
    "city"
  ).textContent = `City : ${jsonData.results[0].components.city}`;
  document.getElementById(
    "suburb"
  ).textContent = `Suburb : ${jsonData.results[0].components.suburb}`;
  document.getElementById(
    "road"
  ).textContent = `Road : ${jsonData.results[0].components.road}`;
  document.getElementById(
    "postcode"
  ).textContent = `PostCode : ${jsonData.results[0].components.postcode}`;
}

function errorMsg(error) {
  if (error.code == error.PERMISSION_DENIED) {
    alert("enable the location");
  }
}

let promise = new Promise((myResolve, myReject) => {
  let req = new XMLHttpRequest();
  req.open(
    "Get",
    "https://api.opencagedata.com/geocode/v1/json?q=${12.9147928}+${77.5865094}&key=40f25cef362f4f6590c517d5a721927e"
  );
  req.onload = () => {
    if (req.status == 200) {
      myResolve("Data get method is successful");
    } else {
      myReject("Data get method is not successful");
    }
  };
  req.send();
});

promise.then(
  (result) => {
    console.log("The result of the promise is : " + result);
  },
  (error) => {
    console.log("The result of the promise is : " + error);
  }
);
