const getTheTitles = function(books) {
    let res = []
    for(let b of books){
        res.push(b.title)
    }
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
