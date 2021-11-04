/// array.reverse()  ..change the original method
// it reverse the given array// modiefied the aarrary
// string

const array1 = [56, 55, 43, 2, 3, 2];

// const res = array1.slice().reverse(); // first make shallow coopy using slice or concat
// const res = array1.concat().reverse();
const res = [...array1].reverse();
console.log(res);
console.log(array1);
// to  reverse the string

const str = "this is me";
const str1 = str.split("").reverse().join("");
console.log(str1);

//example 2
const str3 = "anmol gangwar";
const str4 = str3.slice().split("").reverse().join("");
console.log(str4);
console.log(str3);
