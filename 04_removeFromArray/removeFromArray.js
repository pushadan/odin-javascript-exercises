const removeFromArray = function() {
    let list = arguments[0];

    argumentsLength = (arguments.length)-1;
    for (let i = 1; i <= argumentsLength; i++){
        index = list.indexOf(arguments[i]);
        if (index === -1){
            continue;
        }
        list.splice(index, 1);
    }

    return list
};

// Do not edit below this line
module.exports = removeFromArray;
