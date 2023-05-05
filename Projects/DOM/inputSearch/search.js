let arr = [];
let orederedList = document.getElementById("citylist");

function clearInputValue() {
  document.getElementById("citysearch").value = "";
}

function clearSearch() {
  document.getElementById("heading").style.display = "none";
  orederedList.style.display = "block";
}

function submitCity() {
  let cityArray = document.getElementById("cityname").value;
  if (cityArray === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "enter the city!",
    });
  } else {
    arr.push(cityArray);
    let liElement = document.createElement("li");
    liElement.textContent = cityArray;
    orederedList.appendChild(liElement);
    document.getElementById("cityname").value = "";
  }
}

function submitSearch() {
  let citySearchName = document.getElementById("citysearch").value;
  if (citySearchName === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "enter the city!",
    });
  } else {
    if (arr.includes(citySearchName)) {
      orederedList.style.display = "none";
      document.getElementById("heading").textContent = citySearchName;
      clearInputValue();
    } else {
      orederedList.style.display = "none";
      document.getElementById("heading").textContent =
        "No city found with the given input....";
      clearInputValue();
    }
  }
}

function clearList() {
  document.querySelector("ul").innerHTML = "";
}
