// implement binary search only on sorted arrays
function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== element && start <= end) {
    if (element > arr[middle]) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === element ? middle : -1;
}

// implementing naiveSearch
function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        console.log("Found one");
        count++;
      }
    }
  }
  return count;
}

// console.log(naiveSearch("emmanuel", "emma"))
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20));
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];

[arr1[0], arr2[0]] = [arr2[0], arr1[0]];
// console.log(arr1, arr2);

// SORTING ALGORITHMS

// bubble sort
function bubbleSort(arr) {
  let noSwapps;
  for (let i = arr.length; i > 0; i--) {
    noSwapps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwapps = false;
      }
    }
    if (noSwapps) {
      break;
    }
  }

  //   return arr;
}

// bubbleSort([5, 1, 2, 3, 4]);

// selection sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i; //storing the index of the smallest number in the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    console.log("################");
    console.log(arr);
    console.log("SWAPPING TO: ");
    [arr[i], arr[min]] = [arr[min], arr[i]];
    console.log("################");
    console.log(arr);
  }
}

selectionSort([12, 13, 8, 1, 3, 8]);
