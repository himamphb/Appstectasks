
let inputEle = document.querySelector('input');
let result;

inputEle.addEventListener('input',(e)=>{
    console.log(e.target.value);
    debounceCbFun(e.target.value)
})

let debounceCbFun = debounce((text)=>{
  

    
})

async function getApiData() {
  const url =
    "http://localhost:3000/cities";
  try {
    const response = await fetch(url);
    result = await response.json();
    let resval =  result.filter((val) => val.name == )
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
getApiData();



function debounce(callFunction) {
  let timeOut;
  return (...values) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callFunction(...values);
    }, 1000);
  };
}
