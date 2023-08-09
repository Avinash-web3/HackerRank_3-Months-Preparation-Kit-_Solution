'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let Positive_count = 0;
    let Negative_count = 0;
    let Zero_count = 0;
    for (let num = 0 ; num < arr.length ; num++){
        if (arr[num] > 0){
            Positive_count += 1;
        }
        else if (arr[num] < 0){
            Negative_count += 1;
        }
        else{
            Zero_count += 1;
        }
    }
    console.log((Positive_count / arr.length).toFixed(6));
    console.log((Negative_count / arr.length).toFixed(6));
    console.log((Zero_count / arr.length).toFixed(6));

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
