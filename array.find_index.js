// array.findIndex() method return the index of element if it is present 

          
 const array =[ 56,4,4,6,78,9];
 const res =array.findIndex(el=>{
     
 return el===9;
 })
// console.log( array.indexOf(4));
//  console.log(res);
 
console.clear();
// example  2;
const array2 =['anmol','aakanshi','ankit','pragati','raashi','s'];
const res2 =array2.findIndex(elem=>{
    // return elem ==='pragati';
    return elem.includes('s');// index =1 because in aakanshi  the 's' come ; 
});
// console.log(res2) ;

// example 3
 
const  friends =[
    {
        Name:'aakanshi',
        Branch:'cse'
    },
    {
        Name:'Ashish',
        Branch:'IT'
    },
    {
        Name:'pragati',
        Branch:"IT"
    },
    {
        Name:"Ishika",
        Branch:'IT'
    }
]


const result =friends.findIndex(person=>{
    // console.log(person.Name);
    return person.Branch==='IT';
});
console.log(result);