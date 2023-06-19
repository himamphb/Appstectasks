const formElement = document.querySelector("form");
const submitForm = document.getElementById("submit-button");
submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  const newFormData = new FormData(formElement);
  const nameInput = newFormData.get("name-input");
  const emailInput = newFormData.get("email-input");
  const passwordInput = newFormData.get("password-input");
  console.log(nameInput, emailInput, passwordInput);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  try {
    if (nameInput.length === 0) {
      throw new TypeError("Name is required");
    }
    if (nameInput.length < 3 || nameInput.length > 20) {
      throw new TypeError("name should contain 3 to 20 letters");
    }
    if (emailInput.length === 0) {
      throw new TypeError("email is required");
    }
    if (!emailPattern.test(emailInput)) {
      throw new TypeError("email is invalid");
    }
    if(!passwordPattern.test(passwordInput)){
        throw new TypeError("password atleast 1 speacial character, 1 number and minimum 6 letters");
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error.message}`,
    });
  }
});
