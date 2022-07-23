const caesar = function(str,shift) {
    let res = '';
    for(let i = 0; i < str.length; i++){
        if( !(str.charAt(i).toUpperCase() != str.charAt(i).toLowerCase())){
            res += str.charAt(i);
            continue; //not a letter
        }
        let code = str.charCodeAt(i) + shift;

        if(str.charCodeAt(i) >= 97){ //uppercase letters
            if(code < 97) while(code < 97) code += 26;
            else if(code > 122) while(code > 122) code -= 26;
        }
        else {//lowercase letters
            if(code < 65) while(code < 65) code += 26;
            else if(code > 90) while(code > 90) code -= 26;
        }
        res += String.fromCharCode(code)
    }
    return res;
};

// Do not edit below this line
module.exports = caesar;
