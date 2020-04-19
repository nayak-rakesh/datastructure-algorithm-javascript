// given data (inputs)
let wt = [3, 2, 5, 4];
let val = [2, 4, 7, 6];
let W = 10;

// with recursion only ( no memoization )
function knapsack(wt, val, W, n) {
    if(n === 0 || W === 0) {
        return 0;
    }

    if(W >= wt[n-1]) {
        return Math.max(val[n-1] + knapsack(wt, val, W-wt[n-1], n-1), knapsack(wt, val, W, n-1));
    } else{
        return knapsack(wt, val, W, n-1);
    }
}

console.log(knapsack(wt, val, W, wt.length)); // 13

// with memoization
let t = [];
for(let n = 0; n <= wt.length; n++) { // initialize the array to -1 in the global scope 
    let temp = [];
    for(let w = 0; w <= W; w++) {
        temp.push(-1);
    }
    t.push(temp);
}

function knapsack(wt, val, W, n) {
    if(t[n][W] !== -1) { // checking if the value is already calculated and present
        return t[n][W];
    }

    if(n === 0 || W === 0) {
        return 0;
    }

    if(W >= wt[n-1]) {
        // storing max profit for the passed W and n
        t[n][W] = Math.max(val[n-1] + knapsack(wt, val, W-wt[n-1], n-1), knapsack(wt, val, W, n-1));
        return t[n][W];
    } else{
        // storing max profit for the passed W and n
        t[n][W] = knapsack(wt, val, W, n-1);
        return t[n][W]; // same as return t[n][W] = knapsack(wt, val, W, n-1);
    }
}

console.log(knapsack(wt, val, W, wt.length)); // 13