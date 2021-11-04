//Array.flat() method use to make nested array into single array ;
// array.flat( )method concat the nested array  into the single array;
//  example 
const array =[1,[2,[3]]];
const res =array.flat(); /// by default flat method has  level of depth  1 which is argument  /

// array.flat(levelof depth the nested array present );
// for infinity level of depth pass infinity as a argument ;

console.log(res);

// example 2

const array2 =[2,3,4,[5,6,7,[3,8,[9,6,7,[8,[78,67]],.9],0]]]
const result =array2.flat(Infinity);
result.sort();
console.log(result);

