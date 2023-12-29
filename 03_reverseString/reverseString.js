const reverseString = function(string) {
    let splitStringArray = string.split("");
    splitStringArray = splitStringArray.reverse();

    let reversed = "";
    for (const letter of splitStringArray){
        reversed += letter;
    };

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
