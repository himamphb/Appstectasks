let globalValue = 1;
function setTimerSeconds(){
    setInterval(function(){
     let secondsText = document.getElementById("child3").textContent;
     let secondsNum = Number(secondsText);
     
     if(secondsNum < 10){

        secondsNum++;
        document.getElementById("child3").textContent=String(secondsNum);
     } else if(secondsNum === 10 && globalValue == 1){
        document.getElementById("child3").textContent = "0";
        secondsNum++;
        globalValue++;
     }else if(secondsNum >= 10 && secondsNum < 20){
        secondsNum++;
     document.getElementById("child3").textContent=String(secondsNum);
    } else if(secondsNum === 20 && globalValue == 2){
        document.getElementById("child3").textContent = "0";
        secondsNum++;
    }else if(secondsNum >= 20 && secondsNum < 30){
        secondsNum++;
        
        document.getElementById("child3").textContent=String(secondsNum);
    }else{
        document.getElementById("child3").textContent = "0";
        clearInterval()
    }

    },1000)
}