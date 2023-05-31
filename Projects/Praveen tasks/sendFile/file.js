let inputFile = document.querySelector("input[type=file]");
let fileVal;

function submitFile() {
  console.log(inputFile);
  console.log(inputFile.files[0]);

  fileVal = inputFile.files[0];
}

function downloadFile() {

  if (fileVal) {
    const reader = new FileReader();
    reader.onload = function (e) {
      let dataVal = e.target.result;
      console.log(dataVal);
      let blobData = new Blob([dataVal],{type:"application/pdf"});
      console.log(blobData);
      let downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blobData);
      downloadLink.download = fileVal.name;
      downloadLink.click();

    };
    reader.readAsArrayBuffer(fileVal);
  }

}
