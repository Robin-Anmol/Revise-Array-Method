// array.includes()method ;
// TEST METHOD

// THIS METHOD IS USE T0 CHECK WHETHER A ELEMENT IS PRESENT OR NOT IN ARRAY
//   EXAMPLE : arr =[56,3,2,1] =>arr.includes(56)=>return true ,return false in case (8);
// let
const array = [56, 3, 9, 27, 8];
// const ch = array.includes(3);
const ch = array.includes(7);
if (ch) {
  console.log(`hey no is present `);
} else {
  console.log(`no is not present sad...`);
}

/// example 2:
const array3 = ["apple", "orange", "berry", "pinne"];
console.log(array3.includes("apple")); // apple is present so true
console.log(array3.includes("banana")); // banana is not present so false ;
