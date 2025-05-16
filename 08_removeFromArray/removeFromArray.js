const removeFromArray = function(arr, ...value) {
    let myArray = arr;
    let myValue = value;

    for(let i = 0; i < value.length; i++) {
        console.log({i});
        while (true) {    
            let index = myArray.indexOf(myValue[i]);
            if(index == -1) {break;}
            myArray.splice(index, 1);
        console.log({index});
        console.log({myArray});
        }
    }
    return myArray;
};


// Do not edit below this line
module.exports = removeFromArray;
