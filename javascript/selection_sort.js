function selectionSort(arr) {
  const result = [];

  while (arr.length > 0) {
    min = Math.min(...arr);
    i = arr.indexOf(min);
    result.push(min);
    arr.splice(i, 1);
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-4, 2, 5, 9");
  console.log("=>", selectionSort([5, 2, 9, -4]))

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();

  for (let i = 0; i < 1000; i++) {
    selectionSort([4, 2]);
    selectionSort(longInput);
  }

  const avgTime = (Date.now() - startTime) / 2000;
  console.log(avgTime);

}

module.exports = selectionSort;

// Please add your pseudocode to this file

// 1. create an empty array named result.
// 2. use a while loop to find the smallest number in the array with Math.min() with each iteration. the loop starts at the length of the array, decrements by 1 with each iteration and stops when it is not greater than 0.
// 3. each number is pushed to the result array and returned after the while loop closes.
// And a written explanation of your solution
