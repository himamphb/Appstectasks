function submit() {
  let inpvalue = document.getElementById("input").value;
  if (inpvalue.includes(" ") || inpvalue === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter atleast only one word",
    });
  } else {
    let ullistnode = document.querySelector(".dropdown-menu");

    let anchorelement = document.querySelectorAll(".dropdown-item");

    let anchorelement2 = document.querySelector(".dropdown-item");

    let aelement = document.createElement("li");
    let clonedlist = anchorelement2.cloneNode(true);

    clonedlist.textContent = inpvalue;

    for (let i = 0; i < anchorelement.length; i++) {
      if (anchorelement[i].textContent === inpvalue) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter different word",
        });
        return;
      } else {
        aelement.appendChild(clonedlist);
        ullistnode.appendChild(aelement);
        Swal.fire("Good job!", "You added the product!", "success");
      }
    }
  }
}
