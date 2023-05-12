let cubicRoot = {
  sqrt: function (num) {
    if (num < 0 || isNaN(num)) {
      return NaN;
    }
    let square_root = num / 2;
    let temp = 0;
    while (square_root != temp) {
      temp = square_root;

      square_root = (num / square_root + square_root) / 2;
    }
    return square_root;
  },
  cbrt: function (num){
       return console.log(Math.pow(this.sqrt(num),3)); 
  }
};

cubicRoot.cbrt(3)
