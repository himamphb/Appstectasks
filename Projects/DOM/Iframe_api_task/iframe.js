let iframe_list = document.getElementById("iframe_list");
let getBtn = document.querySelector("input[type=button]");

getBtn.addEventListener("click", function getData() {
    let inputVal = document.getElementById("search").value;
  apiGetData(inputVal);
});

function apiGetData(val) {
  let xhttp = new XMLHttpRequest();
  let result;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     result = JSON.parse(xhttp.response);
    //    console.log(result);
       for(a in result){
       if(val == a){
         for(let i = 0; i < result[a].length; i++){
            let iframeElement = document.createElement("iframe");
            iframeElement.src = result[a][i];
            iframe_list.appendChild(iframeElement);

         }
       }
           
    }
}
  }
  xhttp.open("GET", "http://localhost:3000/videos", true);
  xhttp.send();

}
