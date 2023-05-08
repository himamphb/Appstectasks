

    function generateUniqueRandom(maxNr) {
        let haveIt = [];
        let random = (Math.random() * maxNr).toFixed();
        random = Number(random);
    
        if(!haveIt.includes(random)) {
            haveIt.push(random);
            return random;
        } else {
            if(haveIt.length < maxNr) {
             return  generateUniqueRandom(maxNr);
            } else {
              console.log('No more numbers available.')
              return false;
            }
        }
    }



function getTotalValue(){
    let arr = document.querySelectorAll('.inputs');
    let arr2 = document.querySelectorAll('.gamerinput');
    let randomarray = [];
    let total=0;
        if(arr){
            
        for(let i=0;i<arr.length;i++){
            if(parseInt(arr[i].value))
                total += parseInt(arr[i].value);
        }
        }else if(arr2){
            for(let i = 0; i < 4;i++){
                randomarray.push(generateUniqueRandom(9));
            }


        }
        console.log(arr,randomarray)
        
    }
    


