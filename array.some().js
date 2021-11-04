///
///  array.some() method  return true if at least one elemnt of array return true  for callback function 

// exxample 1


const array =[{name:"anmol",age:18},{name:'tim',age:25},{name:'robin',age:20}];
const res =array.some(person=>{
    return person.age>=18; // all the elements return true for callbaack funcction so some method give true 

});
// console.log(res);

// example 2
const array2=['fruits','oranges','bananas','lichis'];
const res1= array2.some(el=>{
    return !el.includes('s');
})
// console.log(res1);

// example 3
const array4 =[4 ,5 ,6 ,7 ,8 ,9];

const res2 =array4.some(el=>{
  
 return el>8 ;    

})
console.log(res2);