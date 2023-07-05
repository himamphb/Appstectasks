const submitBtn = document.querySelector("button");
const divContainer = document.querySelector(".card");
const mainDiv = document.querySelector("main");
const recipeBtn = document.querySelector("#recipeButton");
const popupBox = document.querySelector(".popup-box");
const popupBoxHeader = document.querySelector(".popup-box-header");
const popupBoxInstuctions = document.getElementById("popup-box-header-para");
const anchorEle = document.getElementById("anchorElement");
let jsonData, divClonedContainer, elemetLink;

submitBtn.addEventListener("click", async () => {
  mainDiv.innerHTML = "";
  const inputValue = document.getElementById("search").value;
  if(inputValue.length === 0){
    alert("enter the input");
  }
else{
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  let data = await fetch(url);
  jsonData = await data.json();
  console.log(jsonData);

  jsonData.meals.forEach((element) => {
    divClonedContainer = divContainer.cloneNode(true);
    divClonedContainer.classList.remove("d-none");
    divClonedContainer.querySelector("img").src = element.strMealThumb;
    divClonedContainer.querySelector(".card-title").textContent =
      element.strMeal;
    divClonedContainer.id = element.idMeal;
    // mainDiv.classList.add("bg-color");
    mainDiv.appendChild(divClonedContainer);

  });
}
});

async function showRecipe(e) {
  let id = e.parentElement.parentElement.id;
  
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let dataJson = await data.json();

  popupBoxHeader.textContent = dataJson.meals[0].strMeal;
  popupBoxInstuctions.textContent = dataJson.meals[0].strInstructions;
  elemetLink = dataJson.meals[0].strYoutube;
  popupBox.classList.remove("show");
  mainDiv.classList.add("displayDiv");
}

function watchRecipeVideo() {
 anchorEle.href = elemetLink;
}

function goBackButton(){
  mainDiv.classList.remove("displayDiv");
  popupBox.classList.add("show");
}

  
