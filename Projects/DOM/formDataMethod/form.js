function submitForm() {
  const form = document.querySelector("form");
  const userData = new FormData(form);
  const fname = userData.get("fname");
  const lname = userData.get("lname");
  const userEmail = userData.get("email");
  const phone = userData.get("phone");
  const state = userData.get("state");
  
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
  } catch (e) {

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
  } catch (e) {
    console.log(e.message);
  }

  try {
    if (userEmail.length == 0) {
      throw new TypeError("Email should not empty");
    }
    if (userEmail.indexOf(" ") >= 0) {
      throw new TypeError("Email should not contain space");
    }
    if (userEmail.indexOf("@") == -1) {
      throw new TypeError("Email should contain @");
    }
    if (userEmail.indexOf(".") == -1) {
      throw new TypeError("Email should contain .");
    }
  } catch (e) {
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
        "phone number should not contain more than 10 degits"
      );
    }
  } catch (e) {
    console.log(e.message);
  }

  try {
    if (state == null) {
      throw new TypeError("Please select the state");
    }
  } catch (e) {
    console.log(e.message);
  }

    document.getElementById("userFname").textContent = `First Name : ${fname}`;
    document.getElementById("userLname").textContent = `Last Name : ${lname}`;
    document.getElementById("userEmailId").textContent = `Email : ${userEmail}`;
    document.getElementById("userPhone").textContent = `Mobile Number : ${phone}`;
    document.getElementById("userState").textContent = `State : ${state}`;
  
}
