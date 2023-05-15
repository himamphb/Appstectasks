let selectedDiv;
function addContact(fullName) {
  if (!fullName || !fullName.trim()) return;

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-entry");

  contactDiv.addEventListener("dblclick", function () {
    contactDiv.remove();
  });

  const nameInitialDiv = document.createElement("div");
  nameInitialDiv.classList.add("name-initial");

  const numberInputDiv = document.createElement("div");
  numberInputDiv.classList.add("number");
  numberInputDiv.textContent = document.getElementById("number-input").value;

  nameInitialDiv.textContent = fullName.charAt(0).toUpperCase();
  nameInitialDiv.style.backgroundColor = randomColor();

  const fullNameDiv = document.createElement("div");
  fullNameDiv.classList.add("full-name");
  fullNameDiv.textContent = fullName;

  const button = document.createElement("button");
  button.style.borderRadius = "8px";
  button.setAttribute("type", "button");

  const editIcon = document.createElement("img");
  editIcon.src = "./pen-to-square-regular.svg";
  editIcon.style.width = "25px";
  button.setAttribute("onclick", "editContact(this)");
  button.append(editIcon);

  contactDiv.append(nameInitialDiv);
  contactDiv.append(fullNameDiv);
  contactDiv.append(numberInputDiv);
  contactDiv.append(button);

  document.querySelector("#contacts-list").append(contactDiv);
}

function submitData() {
  let nameInput = document.getElementById("name-input").value;
  let numberInput = document.getElementById("number-input").value;
  if (nameInput === "" && numberInput.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Enter the input details!",
    });
  } else {
    addContact(nameInput);

    document.getElementById("name-input").value = "";
    document.getElementById("number-input").value = "";
    Swal.fire("Good job!", "You have add the number!", "success");
  }
}

function randomColor() {
  const colors = [
    "#75026e",
    "#059c16",
    "#000770",
    "#7a3e02",
    "#036b64",
    "#505e2d",
    "#e30909",
    "#b05e0c",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

function editContact(e) {
  selectedDiv = e.parentElement;
  document.querySelector(".formDetails").style.display = "block";
  document.querySelector("#nameinput").value =
    e.parentElement.childNodes[1].textContent;
  document.querySelector("#numberinput").value =
    e.parentElement.childNodes[2].textContent;
}
function saveChanges() {
  let val1 = document.querySelector("#nameinput").value;
  let val2 = document.querySelector("#numberinput").value;
  selectedDiv.childNodes[0].textContent = val1.charAt(0).toUpperCase();
  selectedDiv.childNodes[1].textContent = val1;
  selectedDiv.childNodes[2].textContent = val2;
  document.querySelector(".formDetails").style.display = "none";
  Swal.fire("Good job!", "You have successfuly changed the number!", "success");
}
