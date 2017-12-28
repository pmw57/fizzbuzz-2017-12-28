/*jslint browser */ /*global test expect */
(function iife() {
    "use strict";

    const fizzbuzz = require("./fizzbuzz");

    test(`does nothing with no argument`, function () {
        expect(fizzbuzz()).toBeUndefined();
    });
    test(`an argument of 1 gives [1] `, function () {
        expect(fizzbuzz(1)).toEqual([1]);
    });
    test(`an argument of 2 gives [1, 2]`, function () {
        expect(fizzbuzz(2)).toEqual([1, 2]);
    });
    test(`an argument of 3 gives [1, 2, "Fizz"]`, function () {
        expect(fizzbuzz(3)).toEqual([1, 2, "Fizz"]);
    });
    test(`an argument of 5 gives [1, 2, "Fizz", 4, "Buzz"]`, function () {
        expect(fizzbuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
    });
    test(`an argument of 6 gives [1, 2, "Fizz", 4, "Buzz", "Fizz"]`, function () {
        expect(fizzbuzz(6)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz"]);
    });
    test(`an argument of 10 gives [..., "Fizz", 7, 8, "Fizz", "Buzz"]`, function () {
        expect(fizzbuzz(10)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", "Bat", 8, "Fizz", "Buzz"]);
    });
    test(`an argument of 15 gives [..., 11, "Fizz", 13, 14, "FizzBuzz"]`, function () {
        expect(fizzbuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", "Bat", 8, "Fizz", "Buzz", 11, "Fizz", 13, "Bat", "FizzBuzz"]);
    });
    test(`an argument of 21 gives [..., "Bat", "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "FizzBat"]`, function () {
        expect(fizzbuzz(21)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", "Bat", 8, "Fizz", "Buzz", 11, "Fizz", 13, "Bat", "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "FizzBat"]);
    });
}());