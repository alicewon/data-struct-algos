// Reverse an array of integers.

// SOLUTION
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
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
    // Write your code here
    let middlePoint = a.length/2;
    for (let i=0; i<middlePoint; i++) {
        let k = (a.length-1-i);
        let leftNumberHolder = a[i];
        let rightNumberHolder = a[k];
        a[i] = rightNumberHolder;
        a[k] = leftNumberHolder;
    }
        return a;
}
