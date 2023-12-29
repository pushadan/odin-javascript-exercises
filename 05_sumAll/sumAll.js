const sumAll = function(startNum,endNum) {
    let numbers = [startNum];
    let sum = startNum;
    let index = 1;

    if (typeof startNum != "number" || 
        typeof endNum != "number" || 
        Math.sign(startNum) === -1 || 
        Math.sign(endNum) === -1)
        {return "ERROR";}
    else if (startNum < endNum){
        for (let j = startNum+1; j <= endNum; j++){
            numbers.push(j)
            sum += numbers[index];
            index++;
        }
    }
    else{
        for (let j = startNum-1; j >= endNum; j--){
            numbers.push(j)
            sum += numbers[index];
            index++;
        }
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
