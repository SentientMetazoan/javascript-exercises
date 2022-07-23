const repeatString = function(str,n) {
  if(n<0) return 'ERROR'
  let res = '';
  for(let i=0; i<n; i++) {
    res += str;
  }
  return res
};

// Do not edit below this line
module.exports = repeatString;
