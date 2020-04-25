/*
Write a function which takes an array and a number(n) as it's parameter and returns the max sum of 
n consecutive elements of the array.
let array = [7,3,1,4,9,8] n = 2 // returns 17
*/
let array = [7, 3, 1, 4, 9, 8];
let n = 2;

function returnMaxSum(array, n) {
    if(array.length < n) { // same as array.length === 0
        return null;
    }
    let max = 0;
    let temp = 0;
    for(let i = 0; i < n; i++) {
        max += array[i];
    }
    temp = max;
    for(i = n; i < array.length; i++) {
        temp = temp - array[i - n] + array[i] // subtract start element and add next element with respect to n
        max = Math.max(temp, max)
    }

    return max;
}

console.log(returnMaxSum(array, n)); 

/* In the above solution, in the first iteration we are calculating sum for the first n elements and 
assign it to max. In the next iteration we are calculating sum of next consecutive elements by subtracting 
last element and adding next element.
1 - [(7, 3, 1), 4, 9, 8] temp = (7+3+1) - 7 + 4
2 - [7, (3, 1, 4), 9, 8] temp = (3+1+4) - 3 + 9
*/