let userNameRes = document.getElementById("name");
let userNum = document.getElementById("number");
let errorName = document.getElementById("error-name-text");
let errorNumber = document.getElementById("error-number-text");

function submitInputData() {
  let userName = document.getElementById("name").value;
  let number = document.getElementById("number").value;

  try {
    if (userName.length == 0 && number.length == 0) {
      throw new TypeError("name and number should not empty");
    }

    if (userName.length == 0 || userName.length > 10) {
      userNameRes.style.borderColor = "#ff0000";
      throw new TypeError("name should be greater 0 and less than 10");
    }

    if (number.length == 0 || number.length > 10) {
      userNum.style.borderColor = "#ff0000";
      throw new TypeError("number should  be greater 0 and less than 10");
    }
  } catch (e) {
    if (e.message == "name and number should not empty") {
      errorName.textContent = e.message;
      errorName.style.color = "#ff0000";
      errorNumber.textContent = e.message;
      errorNumber.style.color = "#ff0000";
      userNameRes.style.borderColor = "#ff0000";
      userNum.style.borderColor = "#ff0000";
    }
    if (e.message == "name should be greater 0 and less than 10") {
      errorName.textContent = e.message;
      errorName.style.color = "#ff0000";
    }

    if (e.message == "number should  be greater 0 and less than 10") {
      errorNumber.textContent = e.message;
      errorNumber.style.color = "#ff0000";
    }
  }
  try {
    if(number.length > 10){
      throw new TypeError("number should  be greater  than 10");
    }
  } catch (error) {
    errorNumber.textContent = e.message;
  }
}

function removeError(val) {
  if (val.id == "name") {
    errorName.textContent = "";
    val.style.borderColor = "#000000";

  } else {
    errorNumber.textContent = "";
    val.style.borderColor = "#000000";
  }
}
