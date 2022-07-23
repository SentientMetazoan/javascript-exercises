const add = function(... args) {
	let res = 0;
  for(let a of args){
    res += a;
  }
  return res;
};

const subtract = function(... args) {
  let res = args[0]
  for(let i=1; i< args.length; i++){
    res -= args[i]
  }
	return res;
};

const sum = function(array) {
	let res = 0;
  for(let i of array){
    res += i;
  }
  return res;
};

const multiply = function(array) {
  let res = array[0];
  for(let i=1; i< array.length; i++){
    res *= array[i]
  }
	return res;
};

const power = function(val,pow) {
  return Math.pow(val,pow)
	
};

const factorial = function(x) {
  if(x === 0) return 1;
	let res = x;
  x--;
  while(x > 0){
    res *= x;
    x--;
  }
  return res;
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
