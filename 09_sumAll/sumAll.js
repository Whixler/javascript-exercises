const sumAll = function(numStart, numEnd) {
    let total = 0;   
    if(numStart > numEnd){
        var b = numStart;
        numStart = numEnd;
        numEnd = b;
    } 

    if(numStart > 0 && numEnd > 0 && Number.isInteger(numStart) && Number.isInteger(numEnd)) {
           for(let i = numStart; i <= numEnd; i++) {
                total = i + total;
           }
        }   else {
            total = "ERROR"
        }       
        return total;
};

// Do not edit below this line
module.exports = sumAll;
