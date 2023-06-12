let divElement = document.querySelectorAll(".blur-img");

divElement.forEach((div) => {
  let imgElement = div.querySelector("img");
  function loadFunction() {
    div.classList.add("loaded");
  }
  if (imgElement.complete) {
    loadFunction();
  } else {
    imgElement.addEventListener("load", loadFunction);
  }
});
