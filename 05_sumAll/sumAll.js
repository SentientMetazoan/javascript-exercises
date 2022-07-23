const sumAll = function(... args) {
    let low = -1;
    let high = -1;    

    for(let value of args){
        if( !(typeof value === 'number') || value < 0) return 'ERROR';
        
        if(low === -1 || value < low) low = value;
        if(value > high) high = value;
    }

    let res = 0;

    for(let i=low; i<=high; i++){
        res += i;
    }

    return res;
};

// Do not edit below this line
module.exports = sumAll;
