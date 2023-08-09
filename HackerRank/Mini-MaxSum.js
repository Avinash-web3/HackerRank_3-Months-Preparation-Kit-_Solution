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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let Min_sum = 0 ;
    let Max_sum = 0 ;
    for(let num = 0 ; num < (arr.sort().length-1) ; num++ ){
        Min_sum += arr[num];
    }
    for(let num = 1 ; num < arr.sort().length ; num++ ){
        Max_sum += arr[num];
    }
    console.log(Min_sum +' ' + Max_sum);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
