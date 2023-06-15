const submitBtn = document.querySelector("button");
const divContainer = document.querySelector(".card");
let jsonData , divClonedContainer;
const mainDiv = document.querySelector(".main-container");
const recipeBtn = document.querySelector('.recipeButton');
const popupBox = document.querySelector('.popup-box');

submitBtn.addEventListener("click", async () => {
  mainDiv.innerHTML = "";
  const inputValue = document.getElementById("search").value;
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  let data = await fetch(url);
   jsonData = await data.json();
  console.log(jsonData);

  jsonData.meals.forEach((element) => {
    divClonedContainer = divContainer.cloneNode(true);
    divClonedContainer.classList.remove("d-none");
    divClonedContainer.querySelector("img").src = element.strMealThumb;
    
    divClonedContainer.querySelector(".card-title").textContent = element.strMeal;
    mainDiv.appendChild(divClonedContainer);   
  });
});
