// https://www.hackerrank.com/challenges/array-left-rotation/problem?h_r=profile
// A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. Given an integer, , rotate the array that many steps left and return the result.

// SOLUTION:
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

// unshift adds one or more elements to the beginning of an array and returns new length of array
// pop takes last element off and returns it

function rotateLeft(d, arr) {
    // Write your code here
    for (let i = d; i<arr.length; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
