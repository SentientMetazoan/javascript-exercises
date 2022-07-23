const findTheOldest = function(people) {
    let res = null;
    for(let p of people){
        if(res === null)
            res = p;
        else if(('yearOfDeath' in res? res.yearOfDeath : new Date().getFullYear()) - res.yearOfBirth < ('yearOfDeath' in p? p.yearOfDeath : new Date().getFullYear()) - p.yearOfBirth){
            res = p;
        }
    }
    return res;
};

// Do not edit below this line
module.exports = findTheOldest;
