
let inputFile = document.querySelector("input[type=file]");
let inputEmail = document.getElementById('email');
let anchorEle = document.querySelector('a');

function submitFile() {
  console.log(inputFile.value);
  anchorEle.href = inputFile.value;
  anchorEle.download = inputFile.value;
  console.log(anchorEle);

}
