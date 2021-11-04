// Array.isArray() method use to check whether given thing is array or not ;

const array =['anmol','aakanshi','ankit','others'];
 const obj ={
     name: 'anmol',
     age:18,
     branch:'IT'
 };
 const str =`Hey everyone !!` ;
 // if i  want  to check whether the return thing is array or something  else ;
 // IN THAT CASE I NEED TO USE THE Array.isArray() method;


 console.log(Array.isArray(array)); // return true because the array is an Array
 console.log(Array.isArray(obj)); // return fasle because it is object;

 console.log(Array.isArray(str)); // return false because it is  and string ;