const removeFromArray = function(array, ... args) {
    for(let j of args){
        for(let i of array){
            if(i === j){
                array.splice(array.indexOf(i),1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
