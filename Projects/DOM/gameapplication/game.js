let input1, input2, input3, input4, input5;
function containsDuplicates(array) {
  if (array.length !== new Set(array).size) {
    return Swal.fire("enter non-repeative numbers");
  }
  return false;
}

function checkNumValid(e) {
  let inputStrValue = e.value;
  let convertedArray = inputStrValue.split("").map(Number);
  if (
    convertedArray.length < 4 ||
    convertedArray.length > 4 ||
    inputStrValue === ""
  ) {
    Swal.fire("enter input that should contain only 4 numbers");
  } else {
    containsDuplicates(convertedArray);
  }
}

function randomGenerate1() {
  let random = Math.floor(1000 + Math.random() * 9000);
  let convertedArray = random.toString().split("").map(Number);
  containsDuplicates(convertedArray);
  document.getElementById("input3").value = random;
}

function randomGenerateCode() {
  let randomValue = Math.ceil(20000 + Math.random() * 10000);
  let leftdiv = document.getElementById("secretcode");
  leftdiv.textContent = `generated-code:${randomValue}`;
  leftdiv.style.visibility = "hidden";

  input1 = Number(document.getElementById("input1").value);
  input2 = Number(document.getElementById("input2").value);
  input4 = Number(document.getElementById("input4").value);
  input3 = Number(document.getElementById("input3").value);
  let result = randomValue - input1 - input2 - input3 - input4;
  document.getElementById("input5").value = result;
}

function getTotalValue() {
  input1 = Number(document.getElementById("input1").value);
  input2 = Number(document.getElementById("input2").value);
  input4 = Number(document.getElementById("input4").value);
  input3 = Number(document.getElementById("input3").value);
  input5 = Number(document.getElementById("input5").value);
  let totalValue = input1 + input2 + input3 + input4 + input5;
  document.getElementById("total").textContent = `Total-Value = ${totalValue}`;
  document.getElementById("secretcode").style.visibility = "visible";
}
