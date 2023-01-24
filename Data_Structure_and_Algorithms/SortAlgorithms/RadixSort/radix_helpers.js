// returns the digit in num at the given place value - getDigit(12345, 0); // 5
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// returns the number of digits in num - digitCount(25); // 2
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Given an array of numbers, returns the number of digits in the largest numbers in the list - mostDigits([1234, 56, 7]); //1234 - 4

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

mostDigits([23,567,89,12234324,90])










