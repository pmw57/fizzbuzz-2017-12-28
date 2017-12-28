(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
/*jslint browser */
var fizzbuzz = require("./fizzbuzz.js");
var result = document.querySelector(".result");
result.innerHTML = fizzbuzz(100).join("<p>");
},{"./fizzbuzz.js":1}]},{},[2]);
