let cubicRoot = {
  sqrt: function (num) {
    return console.log(num ** (1/2));
  },
  cbrt: function (num){
       return console.log(num ** (1/3));
  }
};

cubicRoot.cbrt(125);
cubicRoot.sqrt(16)