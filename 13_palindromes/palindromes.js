const palindromes = function (palin) {
    let clean = palin.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    console.log({clean});
    const chars = clean.split("");

    while (chars.length > 1){
        let char1;
        let char2;
        let output = true;

        if (output) {
            output = char1 === char2;
            char1 = chars.pop();
            console.log(char1);
            char2 = chars.shift();
            console.log(char2);
        }
        return output;
    }
    

};

// Do not edit below this line
module.exports = palindromes;
