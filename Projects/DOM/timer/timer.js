let globalValue = 1;
let initialValue = 0;
let time;
let secValue = initialValue;
function setTimerSeconds() {
  time = setInterval(function () {

    let displayDocument = document.getElementById("child3");

    if (secValue < 10 && globalValue == 1) {
      secValue++;
      displayDocument.textContent = secValue;

    } else if (secValue == 10 && globalValue == 1) {
      globalValue++;
      secValue = initialValue;
      
      displayDocument.textContent = secValue;
    } 
    else if (secValue < 20 && globalValue == 2) {
      secValue++;
       displayDocument.textContent = secValue;
      

    }else if (secValue == 20 && globalValue == 2) {
      globalValue++;
      secValue = initialValue;
      displayDocument.textContent = initialValue;
    } 
    else if (secValue < 30 && globalValue == 3) {
      secValue++;
      displayDocument.textContent = secValue;

    } else if (secValue == 30) {
      secValue = initialValue;
      displayDocument.textContent = "0:0";
      clearInterval(time);
    }

  }, 1000);
}
