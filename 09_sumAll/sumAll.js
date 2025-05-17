const sumAll = function(numStart, numEnd) {
    let total = 0;   
    if(numStart > numEnd){
        var b = numStart;
        numStart = numEnd;
        numEnd = b;
    } 
console.log({numStart})
console.log({numEnd})

    if(numStart > 0 && numEnd > 0) {
           for(let i = numStart; i <= numEnd; i++) {
                total = i + total;
                // console.log({i}) 
           }
            // console.log({total})
        }          
        return total;
};

// Do not edit below this line
module.exports = sumAll;
