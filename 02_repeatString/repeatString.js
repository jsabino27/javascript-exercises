const repeatString = function(string, num) {
    let word = "";
    while(num > 0){
        string += word;
        num--;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
