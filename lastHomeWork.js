// function isSquare(n) {
//   return Number.isInteger(Math.sqrt(n));
// }

// console.log(isSquare(-1));
// console.log(isSquare(0));
// console.log(isSquare(3));
// console.log(isSquare(4));
// console.log(isSquare(25));
// console.log(isSquare(26));

// ----------------------------------------------------------------

// function getSum(a, b) {
//   let sum = 0;

//   const start = Math.min(a, b);
//   const end = Math.max(a, b);

//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(getSum(1, 0));
// console.log(getSum(1, 2));
// console.log(getSum(0, 1));
// console.log(getSum(1, 1));
// console.log(getSum(-1, 0));
// console.log(getSum(-1, 2));

// ----------------------------------------------------------------

// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(positiveSum([1, -4, 7, 12]));
// console.log(positiveSum([-1, -2, -3]));
// console.log(positiveSum([]));

// ----------------------------------------------------------------

// function sumTwoSmallestNumbers(numbers) {
//   numbers.sort((a, b) => a - b);

//   return numbers[0] + numbers[1];
// }

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
// console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));

// ----------------------------------------------------------------

// function longest(s1, s2) {
//   const combined = (s1 + s2).split('');

//   const distinctLetters = [...new Set(combined)];

//   const sortedLetters = distinctLetters.sort();

//   const result = sortedLetters.join('');

//   return result;
// }

// const a = "xyaabbbccccdefww";
// const b = "xxxxyyyyabklmopq";
// console.log(longest(a, b));

// const c = "abcdefghijklmnopqrstuvwxyz";
// console.log(longest(c, c));

// ----------------------------------------------------------------

// function quarterOf(month) {
//   if (month >= 1 && month <= 3) {
//     return 1;
//   } else if (month >= 4 && month <= 6) {
//     return 2;
//   } else if (month >= 7 && month <= 9) {
//     return 3;
//   } else if (month >= 10 && month <= 12) {
//     return 4;
//   }
// }

// console.log(quarterOf(2));
// console.log(quarterOf(6));
// console.log(quarterOf(11));

// ----------------------------------------------------------------

// function digitize(n) {
//   return String(n)
//     .split('')
//     .map(Number)
//     .reverse();
// }

// console.log(digitize(35231));
// console.log(digitize(0));

// ----------------------------------------------------------------

// function cockroachSpeed(s) {
//   return Math.floor(s * 100000 / 3600);
// }

// console.log(cockroachSpeed(1.08));

// ----------------------------------------------------------------

// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }

// console.log(rowSumOddNumbers(1));
// console.log(rowSumOddNumbers(2));

// ----------------------------------------------------------------

function personalizedGreeting(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

console.log(personalizedGreeting("John", "John"));
console.log(personalizedGreeting("Mary", "John"));
