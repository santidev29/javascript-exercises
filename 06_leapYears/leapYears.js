const leapYears = function(year) {

    if ((year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0))) {
        console.log(year);
        console.log("Leap Year");
        return true
    } else {
        console.log(year);
        console.log("Not Leap Year");
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
