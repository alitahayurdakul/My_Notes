# Linear Search

It means that it is searched by increasing the index by one until it is found.  
**Time Complexity** => best = O(1) worst = O(n) average = O(n) 

**[ 5, 6, 10, 12, 15 ] find index of 12**

- First look at the 0.index then increase index by one, then check again.
- If any index matches the wanted value, return this index.

**Example**
```
function linearSearch(arr, val){
   for(var i = 0; i < arr.length; i++){
       if(arr[i] === val) return i;
   }
   return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)
```
