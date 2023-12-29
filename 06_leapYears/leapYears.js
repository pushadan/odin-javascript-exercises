const leapYears = function(year) {
    //leap year rules:
    //  - divisible by 4
    //  - not divisible by 100, divisible by 400 
    //  - not divisible by 100
    if (year % 100 === 0 && year % 400 !== 0){
        return false;
    }
    else if (year % 4 !== 0){
        return false;
    }

    return true;
};  

// Do not edit below this line
module.exports = leapYears;
