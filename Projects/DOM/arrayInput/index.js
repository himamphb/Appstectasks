function submitNumber(){
    let inputNum = document.getElementById("input1").value;
    let res = inputNum.split("").map(Number);

    // console.log(res);
    document.getElementById("arrayEle").textContent = res;
    
    if(res.length === 5){
       
      let inputNum2 =  document.getElementById("input2").value;
      let res2 = inputNum2.split("").map(Number);
       res.splice(3,0,res2);
      console.log(res);
      document.getElementById("arrayEle").textContent = res;
   
    }
    
        
    
    
}