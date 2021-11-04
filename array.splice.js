//SPLICE JS
// it modified the original array
// through this we can add the new element
// splice(index from which we want to remove , how many number to remove, reset agrument are the number we want to add  );
const array = [3, 4, 5, 67, 8, 9];
let arr1 = array.splice(2, 3); // 5,6,76,8 are the element which are add to array
// console.log(arr1); // [5,67,8]
// console.log(array); // after modiefied [ 3,4,9];

// let arr1 = array.splice(2, 0, 5, 6, 76, 8); // 5,6,76,8 are the element which are add to array
// arr1 = array.splice();
// console.log(arr1);

///////////////////

const newArray = [45, 3, 2, , 1, 6, 7];
const new2 = newArray.slice();
new2.splice(2, 2, 5);
console.log(new2);
