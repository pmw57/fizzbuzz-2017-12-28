/*jslint browser */
module.exports = function fizzbuzz(n) {
    "use strict";
    if (!n) {
        return;
    }
    var arr = [];
    var i = 0;
    var str = "";
    while (i < n) {
        i += 1;
        str = "";
        if (i % 3 === 0) {
            str += "Fizz";
        }
        if (i % 5 === 0) {
            str += "Buzz";
        }
        if (i % 7 === 0) {
            str += "Bat";
        }
        if (str === "") {
            str = i;
        }
        arr.push(str);
    }
    return arr;
};
