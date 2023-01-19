# Merge Sort
- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
- Array.prototype.sort() => **Firefox** uses merge sort, **Google Chrome** uses hybrid of merge and insertion sort called Timsort.

### How Does It Work?
Firstly, this array split up two until all elements are single array. Then all arrays are merged with one next to them by sorting them in pairs until there is a array.
![This is an merge sort image](../assets/Images/mergeSort.PNG)

**Time Complexity** => best = O(n log n) worst = O(n log n) average = O(n log n)  
**Space Complexity** => O(n)

**log n** => when this array split up until all elements are single array.  
**n** => again merged to sort.  
![This is an BigO of merge sort image](../assets/Images/merge_Sort_BigO.PNG)


