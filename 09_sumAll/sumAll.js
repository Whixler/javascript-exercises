const sumAll = function(numStart, numEnd) {
    console.log(numStart);
    console.log(numEnd);
    let total = 0;
    if(numStart < 0 || numEnd < 0) {
        return "ERROR";
    } else {

    for(let i = numStart; i <= numEnd; i++) {
        total += i;
    }}
    return total;
};

// Do not edit below this line
module.exports = sumAll;
