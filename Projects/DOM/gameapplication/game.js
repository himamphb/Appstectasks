let input1, input2, input3, input4, input5, arrInp, convertedArray, res;

function containsDuplicates(array) {
  if (array.length !== new Set(array).size) {
    return Swal.fire("enter non-repeative numbers");
  }
  return false;
}

function checkNumValid(e) {
  let inputStrValue = e.value;
   convertedArray = inputStrValue.split("").map(Number);
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

function randomGenerateNum1() {
  input2 = Number(document.getElementById("input2").value);

   res = 9999 - input2;

  convertedArray = res.toString().split("").map(Number);
  containsDuplicates(convertedArray);

  document.getElementById("input3").value = res;
}

function randomGenerateNum2() {
  input4 = Number(document.getElementById("input4").value);

   res = 9999 - input4;

   convertedArray = res.toString().split("").map(Number);
  containsDuplicates(convertedArray);

  document.getElementById("input5").value = res;
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

function secretCodeGenerate() {
  input1 = document.getElementById("input1").value;

  arrInp = input1.split("").map(Number);
  arrInp.unshift(2);

  let popedEle = arrInp.pop();
  arrInp.splice(4, 0, popedEle - 2);

   res = Number(arrInp.join(""));

  let leftdiv = document.getElementById("secretcode");
  leftdiv.textContent = `generated-code:${res}`;
  console.log(res);
  leftdiv.style.visibility = "hidden";
}
