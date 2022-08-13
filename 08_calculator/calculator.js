const add = function(num1, num2) {
  return num1+num2;
	
};

const subtract = function(num1, num2) {
  return num1-num2;
	
};

const sum = function(sumArray) {
  let total = 0;
  for(let i = 0; i < sumArray.length; i++){
    total+= sumArray[i];
  }
  return total
	
};

const multiply = function(multArray) {
  let multTotal = multArray.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
  return multTotal;
};


const power = function(num1,num2) {
	return num1**num2;
};

const factorial = function(num1) {
	if (num1 ==0 || num1==1){
    return 1;
  }else{
    return num1 * factorial(num1-1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
