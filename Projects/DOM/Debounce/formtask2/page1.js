let inputBtn = document.querySelector("input[type=button]");
// let inputEle = document.querySelector("input[type=text]");
let formInputValue;
const form = document.querySelector("form");

inputBtn.addEventListener("click", (e) => {
e.preventDefault()
    let formData = new FormData(form);
    formInputValue = formData.get('city');
    
})
