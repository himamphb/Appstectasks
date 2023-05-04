
let arr = [];

function submitCity(){
    let cityarray = document.getElementById("cityname").value;
    let orederedlist = document.getElementById("citylist");
    arr.push(cityarray);
    
    let lielement = document.createElement("li");
    lielement.textContent = cityarray;
    orederedlist.appendChild(lielement);
    document.getElementById("cityname").value = "";

}
function submitSearch(){
    let citysearchname = document.getElementById("citysearch").value;
   
    
        if(arr.includes(citysearchname)){
            document.getElementById("heading").textContent = citysearchname;
            document.getElementById("citysearch").value = "";
        }
        else{
            document.getElementById("heading").textContent = "No city found with the given input....";
        }

}