// const str ='this is me ';
// const arr =[2,3,4,5,7];
// console.log(arr);
// arr[2]=88;
// console.log(arr);

// str[2]='j';
// console.log(str);
// console.log(str.indexOf('i'));
// conculsion the string are not iterable 



//// /////////////////////////////////////////////////
// array.form is use to covert string or other thing into array
/// str ="12345"; => [1,2,3,4,5];
// example 1;

const str ='12345';
// const res = Array.from(str,x=>Number(x)); // it will give array of number 
const res = Array.from(str,); // it will give array of str;
console.log(res);

// example 2;
///////////////////////////////////////////////////////////////////////////////
 // question 1. you have given a array of number  which consist the dublicate make array consist of unique numbers and sort in desc

 const array =[2,1,3,4,5,4,3,2,1];
 const set = new Set(array);
 
const result =Array.from(set); // convert the set into array;
result.sort((a,b)=>{
    return b-a;
});
// console.log(result);



/// conculsion the array.form( )method use to convert other (iterable) thing  into array;

console.clear();
 const str1 ='anmol'; 
 const res2 =Array.from(str1);
 console.log(res2);
 

 