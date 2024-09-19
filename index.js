/*
1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.
*/
function calculateDifference(num1, num2) {
    return Math.abs(num1 - num2);
}
//console.log(calculateDifference(1,2));

/*
2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
*/
function isOdd(num) {
    return num % 2 !== 0;
}
//console.log(isOdd(1));

/*
3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
*/
function findMin(arr) {
    let min = arr[0]; // Assume the first element is the minimum
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  
    return min;
}
//console.log(findMin([3,2,1,4,5]));

/*
4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
*/
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
//console.log(filterEvenNumbers([3,2,1,4,5]));

/*
5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
*/
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}
//console.log(sortArrayDescending([3,2,1,4,5]));

/*
6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
*/
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
//console.log(lowercaseFirstLetter("BANGLADEAH"));

/*
7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
*/
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => vowels.includes(char)).length;
}
//console.log(countVowels("Ostad"));

/*
8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
*/
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
}
//console.log(findAverage([4, 5, 7]));