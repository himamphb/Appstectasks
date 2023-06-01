
const cityName = document.getElementById('city');
const submitEle = document.querySelector('input[type=button]');
let ulListEle = document.getElementById('listElemets');

submitEle.addEventListener('click',()=>{
    debounceCbFun(cityName.value);
  //  localStorage.setItem("inputValue",cityName.value);
    // console.log(localStorage.getItem(inputValue));
})

let debounceCbFun = debounce(async (val) =>{
    ulListEle.innerHTML = " ";
    const response = await fetch("http://localhost:3000/cities");
    result = await response.json();
    let ulListEleNames = result.filter((data)=>{
      return data.name.toLowerCase().includes(val);
    });
    
    for(let i = 0; i < ulListEleNames.length; i++){
      let listELe = document.createElement('li');
      listELe.textContent = ulListEleNames[i].name;
      ulListEle.append(listELe);
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
  