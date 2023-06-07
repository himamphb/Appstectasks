const images = document.querySelectorAll("img");
let counter = 0;
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

images.forEach((slides, index) => {
  slides.style.left = `${index * 100}%`;
});

btn1.addEventListener("click", () => {
  counter--;
  slideImage();
});

btn2.addEventListener("click", () => {
  counter++;
  slideImage();
});

function slideImage() {
  images.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%`;
  });
}
