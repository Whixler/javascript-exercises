const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num1) {
  let sum = 0;
  for (let i = 0; i < num1.length; i++) {
    sum+= num1[i];
  }
  return sum;
};

const multiply = function(num1) {
  let sum = num1[0];
  for (let i = 1; i < num1.length; i++) {
    sum = sum * num1[i];
  }
  return sum;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num1) {
  let sum = 1;
  if(num1 <= 1){
  } else {
    let num = num1;
    for(let i = num1; i > 1; i--) {
      sum = sum * i;
    }
  }
  return sum;
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
