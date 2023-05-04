let state_city = [
  {
    state: "ap",
    city: ["kurnool", "chitoor", "ananthapur"],
  },
  {
    state: "tn",
    city: ["chennai", "vellore", "coimbatore"],
  },
  {
    state: "krn",
    city: ["bangalore", "chikballapur", "chikmangalore"],
  },
];

let state_select = document.getElementById("validationDefault04");
let city_select = document.getElementById("validationDefault03");

function statevalid() {
  if (state_select.value !== -1) {
    for (ele of state_city) {
      if (state_select.value === ele.state) {
        let city = ele.city;
        let opt = document.createElement("option");
        opt.value = -1;
        opt.innerHTML = "choose..";
        city_select.options[0] = opt;
        for (let i = 1; i < city.length; i++) {
          let opt = document.createElement("option");
          opt.value = city[i];
          opt.textContent = city[i];
          city_select.options[i] = opt;
        }
      }
    }
  }
}

let fname , nname, email, password, state , city , zip, textarea;
function Submit(e) {
  e.preventDefault();
   fname = document.getElementById("validationDefault01").value;
 nname = document.getElementById("validationDefault02").value;
   email = document.getElementById("exampleFormControlInput1").value;
   password = document.getElementById("inputPassword6").value;
   state = document.getElementById("validationDefault04").value;
  city = document.getElementById("validationDefault03").value;
   zip = document.getElementById("validationDefault05").value;
  textarea = document.getElementById("validationTextarea").value;

  document.getElementById(
    "content"
  ).textContent = `Name:${fname} + Nickname:${nname} + Email:${email} + password:${password} + state:${state} + city:${city} + pincode:${zip} + Address:${textarea}`;
  Submit()
}
