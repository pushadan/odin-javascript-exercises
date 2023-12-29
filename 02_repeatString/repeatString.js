const repeatString = function(word, num) {
    
    let string = "";
    for (let i=0;i<num;i++){
        string += word;
    };
    if (num === 0){return string}
    else if (num < 0){return "ERROR"};
    return string;
};

// Do not edit below this line
module.exports = repeatString;
