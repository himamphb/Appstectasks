
function addContact(fullName) {
  if (!fullName || !fullName.trim()) return;

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-entry");

  contactDiv.addEventListener('dblclick', function () {
    contactDiv.remove();
  });
 

  const nameInitialDiv = document.createElement("div");
  nameInitialDiv.classList.add("name-initial");

  nameInitialDiv.textContent = fullName.charAt(0);
   nameInitialDiv.style.backgroundColor = randomColor();

  const fullNameDiv = document.createElement("div");
  fullNameDiv.classList.add("full-name");
  fullNameDiv.textContent = fullName;

  contactDiv.append(nameInitialDiv);
  contactDiv.append(fullNameDiv);
  document.querySelector("#contacts-list").append(contactDiv);
}

function submitData(){
    let nameInput = document.getElementById('name-input').value;
    addContact(nameInput);
    document.getElementById('name-input').value = "";
}

function randomColor() {
    const colors = [
        '#75026e',
        '#059c16',
        '#000770',
        '#7a3e02',
        '#036b64',
        '#505e2d',
        '#e30909',
        '#b05e0c'
    ];
    
    return colors [Math. floor(Math.random() * colors.length)];
}