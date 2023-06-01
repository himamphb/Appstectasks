
let pageInput2 = document.getElementById("pageInput2");

pageInput2.value = localStorage.getItem("inputVal");

let ulListEle = document.getElementById('listElemets');

pageInput2.onblur = () => {
    debounceCbFun(pageInput2.value);
}


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