const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

let fileElement = document.getElementById("file");

let jsObj = new JSZip();
let compresses = false;

btn1.addEventListener("click", () => {
  Array.from(fileElement.files).forEach((f, i) => {
    if (i !== undefined) {
      jsObj.file(f.name, f);
      alert("your uploaded files are ziped");
      compresses = true;
    }
  });
});

btn2.addEventListener("click", () => {
  if (compresses) {
    jsObj.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "zipfile.zip");
    });
  }
});

// btn1.addEventListener("click", () => {
//   Array.from(fileElement.files).forEach((f, i) => {
//     jsObj.file(f.name, f);
//     alert('your uploaded files are ziped');
//   });
// });

// btn2.addEventListener("click", () => {
//   jsObj.generateAsync({ type: "blob" }).then((content) => {
//     saveAs(content, "zipfile.zip");
//   });
// });
