const iframe_list = document.getElementById("iframe_list");
const getBtn = document.querySelector("input[type=button]");

getBtn.addEventListener("click", function getData() {
  const inputVal = document.getElementById("search").value;
  apiGetData(inputVal);
});

function apiGetData(val) {
  const xhttp = new XMLHttpRequest();
  let result;
  xhttp.onreadystatechange =  function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("you have successfullu fetched the data");
      result = JSON.parse(xhttp.response);
      for (a in result) {
        if (val === a) {
          for (let i = 0; i < result[a].length; i++) {
            let iframeElement = document.createElement("iframe");
            iframeElement.src = result[a][i] + "?controls=0";
            iframe_list.appendChild(iframeElement);
          }
        }
      }
    }
  };
  xhttp.open("GET", "http://localhost:3000/videos", true);
  xhttp.send();
}
