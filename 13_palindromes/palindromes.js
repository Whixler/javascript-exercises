const palindromes = function (palin) {
    let clean = palin.replace(/[\W_]/g, '').toLowerCase();
    const chars = clean.split("").reverse().join("");
    console.log(clean);
    console.log(chars);
    return chars === clean;

};

// Do not edit below this line
module.exports = palindromes;
