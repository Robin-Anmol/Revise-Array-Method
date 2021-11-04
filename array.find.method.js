// 

// FIND METHOD CHECK WHETHER THE PROPERTY PRESENT IN ARRAY OR NOT IF IT IS PRESENT THEN IT RETURN THAT PROPERTY ;

// LET'S GO

console.clear();
const array =[2,3,4,5,6,19];
const res =array.find(el=>{
    return el===4;
})
// console.log(res);




// example 2

const array2 =[
    {
        name:'anmol',
        age:18
    },
    {
        name:'aakanshi',
        branch:'cse'
    },
    {
        name:'ankit',
        age:19
    },
    {
        name:'robin',
        age:18
    }
]

const res2 = array2.find(person).branch;

function person(person){
    return person.name==='aakanshi';
}
console.log(res2);


// example 3
console.clear();

const array3 =['apple','fruits','bananas','lichs'];
const res3 =array3.find(el=>{
    return !el.includes('s');
})
console.log(res3);

