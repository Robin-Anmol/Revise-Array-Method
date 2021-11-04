// arr.every() methodin array method 

 // every method take aa callback function and return true if all the element of array satify the call back function //
 /// example :


 const array =[3,2,1,5,7];
 const result =array.every((el)=>{
     return el>0;
 })
//  console.log(result);  // true because callback function is true for all elemments of array

 //example 2;
 const  array2 =['apples','bananas','fruits','1'];

 const res =array2.every(el=>{
    //  console.log(el);
     return el.includes('s');
 })
//  console.log(res);

// example 3 

const  array3 =[{
    name:'anmol'
},{name:'aakanshi'},{name:'ankit'},{name:'ashish'}];

const res1 =array3.every(obj=>{
    return obj.name.includes('a');
});
// console.log(res1);

// example 4

const array4=[[2,3,4,5],[5,6,7,8],[65,4,3,4],8];

const res4 =array4.every(elem=>{

    return Array.isArray(elem); // return true if all elem of array4 is arrays 
})
console.log(res4);