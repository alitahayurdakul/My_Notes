# Binary Search

- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on sorted arrays!
- Divide and Conquer  
  **Time Complexity** => best = O(1) worst = O(log n) average = O(log n)

**How Does It Work?**

- Select mid point.
- Then look desired value is greater than mid point or less than mid point.
- If less than mid point, choose new mid point **((0.index + old mid point-1) / 2)** on left side of old mid point.
- Continue this operation until finding this value.  

**Search 15**

![This is an binary search image 1](../assets/Images/binary_Search_1.PNG)
![This is an binary search image 2](../assets/Images/binary_Search_2.PNG)
![This is an binary search image 3](../assets/Images/binary_Search_3.PNG)

**EXAMPLE:** Suppose we're searching for 13  
![This is an binary search image](../assets/Images/binary_Search.PNG)
