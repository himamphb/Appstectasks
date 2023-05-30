
let inputEle = document.querySelector('input');
let dataEle = document.getElementById("cityList");

inputEle.addEventListener('input',(e)=>{
  
    debounceCbFun(e.target.value)
})

let debounceCbFun = debounce(async (val) =>{
  dataEle.innerHTML = " ";
  const response = await fetch("http://localhost:3000/cities");
  result = await response.json();
  console.log(result);
  let inputEle = result.filter((data)=>{
    return data.name.toLowerCase().includes(val);
  },1000);
  
  for(let i = 0; i < inputEle.length; i++){
    let option = document.createElement('option');
    option.value = inputEle[i].name;
    dataEle.append(option);
  }

})

function debounce(callFunction) {
  let timeOut;
  return (...values) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callFunction(...values);
    }, 1000);
  };
}
