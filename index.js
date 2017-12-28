/*jslint browser */
var fizzbuzz = require("./fizzbuzz.js");
var result = document.querySelector(".result");
result.innerHTML = fizzbuzz(100).join("<p>");