//write a function that takes an array of numbers and returns an array of objects. Each object should have a key called `number` with the original number, a key called `isEven` with a boolean value indicating whether the number is even, and a key called `double` with double the value of the number.

// Output:
// [
//   { number: 1, isEven: false, double: 2 },
//   { number: 2, isEven: true, double: 4 },
//   // ... (rest of the numbers)
// ];


//practice code
// function createNumberObjects(numbers) {
//   var nums = [];
//   nums = numbers;

//   function checkeven() {
//     if (i % 2 === 0) {
//       return false;
//     }
//     return true;
//   }

//   for (i = 0; i < nums.length; i++) {
//     nums[i] = {
//       number: numbers,
//       isEven: checkeven(),
//       double: i * 2,
//     };
//   }
//   return numbers;
// }



//refactored code using map method
function createNumberObjects(numbers) {
    return numbers.map(number => {
      return {
        number: number,
        isEven: number % 2 === 0,
        double: number * 2
      };
    });
  }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(createNumberObjects(numbers));

