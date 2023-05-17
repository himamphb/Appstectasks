let globalValue = 1;
let initialValue = 0;
let time;
let secValue = initialValue;
function setTimerSeconds(){
   time = setInterval(function(){

    let displayDocument = document.getElementById("child3");
    
    if(secValue < 10){
        secValue++;
        displayDocument.textContent = secValue;

    }else if(secValue == 10 && globalValue == 1){
        secValue = initialValue
        displayDocument.textContent = secValue;
        secValue++;
        globalValue++;

    }else if(secValue >= 10 && secValue < 20){
        secValue++;
        displayDocument.textContent = secValue;
        
    }else if(secValue == 20 && globalValue == 2){
        secValue = initialValue;
        displayDocument.textContent = secValue;
        secValue++;
        globalValue++;
    }else if(secValue >= 20 && secValue < 30){
        secValue++;
        displayDocument.textContent = secValue;
    }else if(secValue == 30){
        secValue = initialValue;
        displayDocument.textContent = secValue;
        clearInterval(time);
    }
    },1000)
}
