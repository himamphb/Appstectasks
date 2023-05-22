let errorFname = document.getElementById("fnameErrorMsg");
  let errorLname = document.getElementById("lnameErrorMsg");
  let errorEmail = document.getElementById("emailErrorMsg");
  let errorPhone = document.getElementById("phoneErrorMsg");
  let errorState = document.getElementById("stateErrorMsg");

function submitForm() {
  const form = document.querySelector("form");
  const userData = new FormData(form);
  const fname = userData.get("fname");
  const lname = userData.get("lname");
  const userEmail = userData.get("email");
  const phone = userData.get("phone");
  const state = userData.get("state");
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let valueFlag = true;

  

  try {
    if (fname.length == 0) {
      throw new TypeError("FirstName should not empty");
    }
    if (fname.indexOf(" ") >= 0) {
      throw new TypeError("FirstName should not contain space");
    }
    if (fname[0] !== fname[0].toUpperCase()) {
      throw new TypeError(
        "starting letter of FirstName should be capital letter"
      );
    }
    console.log(fname.match("/\d+/g"));

    if (/\d/.test(fname)) {
      
      throw new TypeError("FirstName should not contain numbers");
    }
  } catch (e) {
    valueFlag = false;
    errorFname.textContent = e.message;
    errorFname.style.color = "#ff0000";
    console.log(e.message);
  }

  try {
    if (lname.length == 0) {
      throw new TypeError("LastName should not empty");
    }
    if (lname.indexOf(" ") >= 0) {
      throw new TypeError("LastName should not contain space");
    }
    if (lname[0] !== lname[0].toUpperCase()) {
      throw new TypeError(
        "starting letter of LastName should be capital letter"
      );
    }
    if (lname.includes(arr)) {
      throw new TypeError("FirstName should not contain numbers");
    }
  } catch (e) {
    valueFlag = false;
    errorLname.textContent = e.message;
    errorLname.style.color = "#ff0000";
    console.log(e.message);
  }

  try {
    if (userEmail.length == 0) {
      throw new TypeError("Email should not empty");
    }
    if (userEmail.indexOf(" ") >= 0) {
      throw new TypeError("invalid email");
    }
    if (userEmail.indexOf("@") == -1) {
      throw new TypeError("invalid email");
    }
    if (userEmail.indexOf(".") == -1) {
      throw new TypeError("invalid email");
    }
    if (userEmail.indexOf("@") <= 1) {
      throw new TypeError(
        "invalid email"
      );
    }
    if (userEmail.indexOf(".") - userEmail.indexOf("@") <= 2) {
      throw new TypeError(
        "invalid email"
      );
    }
    if (userEmail[userEmail.indexOf(".") + 1] == userEmail[userEmail.length - 1]) {
      throw new TypeError("invalid email");
    }
    // if( /@#&()*,./{}<>^%[]~`!$=\|;:?/.test(userEmail)){}
  } catch (e) {
    valueFlag = false;
    errorEmail.textContent = e.message;
    errorEmail.style.color = "#ff0000";
    console.log(e.message);
  }

  try {
    if (phone.length == 0) {
      throw new TypeError("phone field should not empty");
    }
    if (phone.indexOf(" ") >= 0) {
      throw new TypeError("phone number should not contain space");
    }

    if (phone.length > 10) {
      throw new TypeError(
        "phone number should not contain more than 10 digits"
      );
    }
    if (phone.length < 10) {
      throw new TypeError("phone number should not be less than 10 digits");
    }
  } catch (e) {
    valueFlag = false;
    errorPhone.textContent = e.message;
    errorPhone.style.color = "#ff0000";
    console.log(e.message);
  }

  try {
    if (state == null) {
      throw new TypeError("Please select the state");
    }
  } catch (e) {
    valueFlag = false;
    errorState.textContent = e.message;
    errorState.style.color = "#ff0000";
    console.log(e.message);
  }
  if (valueFlag == true) {
    document.getElementById("userFname").textContent = fname;
    document.getElementById("userLname").textContent = lname;
    document.getElementById("userEmailId").textContent = userEmail;
    document.getElementById("userPhone").textContent = phone;
    document.getElementById("userState").textContent = state;
  }
}

function clearErrorText(val) {
  val.parentNode.lastElementChild.textContent = "";
}
