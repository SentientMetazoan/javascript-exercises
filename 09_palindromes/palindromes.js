const palindromes = function (str) {
    let arr = str.split('')
    let tail = arr.length-1;
    let head =0;
    while(head < tail){
        if( !(arr[head].toUpperCase() != arr[head].toLowerCase()) ) {
            head++;
            continue; //continues if not a letter
        }
        while(tail>head){
            if( !(arr[tail].toUpperCase() != arr[tail].toLowerCase()) ) 
                tail--;
            else if( arr[head].toLowerCase() === arr[tail].toLowerCase() ) {
                tail--;
                break;
            }
            else return false;
        }
        head++;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
