let inputBtn = document.querySelector("input[type=button]");
let inputEle = document.querySelector("input[type=text]");

inputBtn.addEventListener("click", () => {
    localStorage.setItem("inputVal",inputEle.value);
    window.location.assign("page2.html")

})