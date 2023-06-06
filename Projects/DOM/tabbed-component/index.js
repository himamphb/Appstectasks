const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".content");

tabs.forEach((tab,index) => {
    tab.addEventListener("click", () => {  
        tabs.forEach((tab,index) => {tab.classList.remove("active")});
        tab.classList.add("active");
    
    all_content.forEach((contents) => {
        contents.classList.remove("active");

    }); 
    all_content[index].classList.add("active");
});
}) 