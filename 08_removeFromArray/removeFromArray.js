const removeFromArray = function(arr, ...value) {
    let myArray = arr;
    let myValue = value;

    while (true) {    
        let index = myArray.indexOf(myValue[0]);
        if(index >= 0) { 
            myArray.splice(index, 1);
        } else { break; }
        
    console.log({index})
    console.log({myArray});
    }
    return myArray;
};


// Do not edit below this line
module.exports = removeFromArray;
