let inc = document.querySelector("h5");
let ele = 0;
inc.innerHTML = ele;
let att = document.getElementById("dec");
function Increment() {
  ele++;
  inc.innerHTML = ele;

  if (ele !== 0) {
    att.removeAttribute("disabled");
  }
}

function Decrement() {
  ele--;
  inc.innerHTML = ele;
  if (ele == 0) {
    att.setAttribute("disabled",true);
  }
}
function Reset() {
    console.log(att);
  att.setAttribute("disabled",true);
  ele = 0;
  inc.innerHTML = ele;
}
