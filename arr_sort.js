// ARR.SORT METHOD  .SORT();
// it first convert to string  then sort according to utf 16/8;

const array = ["this", "anmol", "aakanshi", "ashish", "pragati"]; // this will sort according to utf 8/16
array.sort();
console.log(array);
// for ssort number using sort method we need to make comparator function
const arr1 = [4, 35, 47, 2, 3, 4, 97, 9, 0];

arr1.sort(cmp);
// console.log(arr1);
function cmp(a, b) {
  // 1. a-b<0 a will come first ;
  //  2.a-b=0 nothing will change ;
  // 3.  a-b>0 b will come first;  // for acsending order;
  return a - b;
}
////////////////////////
// array of object/
const arr2 = [
  { name: "hp", price: 1000 },
  { name: "lenove", price: 500 },
  { name: "apple", price: "10000" },
];
arr2.sort((a, b) => a.price - b.price);
// console.log(arr2);

// for decereasing order

const arr3 = [56, 47, 89, 79, 200, 567];
arr3.sort((a, b) => b - a); // desending order
console.log(arr3);
