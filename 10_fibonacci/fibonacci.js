const fibonacci = function(n) {
    if(typeof n == 'string')
        n = Number.parseInt(n);
    if(n < 0)
        return 'OOPS';
    if(n === 0) return 0;
    if(n === 1 || n === 2) return 1;

    let old = 1;
    let older = 1;
    for(let i = 3; i <= n; i++){
        let new_num = old + older;
        older = old;
        old = new_num;
    }
    return old;
};

// Do not edit below this line
module.exports = fibonacci;
