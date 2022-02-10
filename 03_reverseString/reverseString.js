const reverseString = function() {

    let string = "Hello"

    let mystring = string.toLowerCase();
    let mystring2 = mystring.split("")
    let reverse = mystring2.reverse();
    let string2 = reverse.join('');

    return string2;

};

// Do not edit below this line
module.exports = reverseString;
