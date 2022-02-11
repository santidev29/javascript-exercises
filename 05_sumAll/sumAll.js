const sumAll = function(x, y) {

        const inicial = x;
        const final = y;
        let acum = 0

        if (x < y) {

            for (let i = x ; i <= y; i++) {
            acum += i;
            }

        } else {

            for (let i = y ; i <= x; i++) {
            acum += i;
            }
            
            return acum;

        }

};


// Do not edit below this line
module.exports = sumAll;
