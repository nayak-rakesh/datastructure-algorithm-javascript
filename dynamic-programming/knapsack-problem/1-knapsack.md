### Knapsack Problem
We have a sack which can contain total weight of "W".We have few items which have weight "w" and value "v".So we have to select items in such a way that their total weight shouldn't exceed the weight that the sack can contain i.e "W" and we should get the maximum value combined of all items.
1. We can break the item and add to the sack. (fraction knapsack) ( use greedy algorithm )
2. We can't break the items so items should be added as whole.Same item can't be added to the sack once it added. (0/1 knapsack) 
3. We can add one item multiple times. ( unbounded knapsack )

* The inputs given are 
```
w = [3, 2, 5, 4]
v = [2, 4, 7, 6]
W = 10
```
* We can choose form the items given above(we can decide if an item can be added or not)
* We have to find an optimal solution(max, min, longest, shortest, etc) 
So from above deduction we can say that it can be solved by dynamic programming.
#### Analysis
* When adding an item to the sack we have consider following things
1. Item's weight shouldn't be greater the weight supported by sack.(i.e `wi <= W`)
2. While adding an item we have to subtract the weight from the total weight of the sack(`W`)
3.  We have to add the weight of the item to the accumulated weight
##### Choice Diagram
```
                        Item
              (W >= wi)  |  (W < wi)
            |-------------------------|
            |                    don't include
    |----------------|
 include        don't include 
```
* Let's say the function named `knapsack` would return the maximum value(profit) which would take input weight array(`wt[]`), value array(`val[]`), total capacity of the sack(`W`) and length of the first two arrays(`n`).
* When writing recursive function we first have to think about base condition.We can evaluate base condition by thinking about the smallest valid input(input should be valid)
* In the above case we can pass zero for the capacity of the sack(`W`) and also for the length of the array(`n`).
* If we have a sack which have capacity of zero or we have arrays without any item in it, for either of the cases we will get maximum value(profit) of zero So we can write 
```js
if(W === 0 || n === 0) {
    return 0;
}
```
* Now we have to write code for the choice diagram. So if we include one item, we will get the value of that item and the weight of the item.So we have to add the value and reduce the capacity(`W - wt[i]`) as 
