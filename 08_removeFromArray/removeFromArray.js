const removeFromArray = function(arr, value) {
    const myArray = arr;
    const myValue = value;
    const index = myArray.indexOf(myValue);
    const x = myArray.splice(index, 1);

    console.log(myArray);

    return myArray;
};


// Do not edit below this line
module.exports = removeFromArray;
