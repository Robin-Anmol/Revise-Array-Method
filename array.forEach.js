// array.forEac() method 

// forEach() method use to transal the each elements of array  it required callback function(value .index,array);its agruments are value index array;



const array =[3,4,5,6,66,7];

// by using function expression
const val = function(value,index,array){
    // console.log(value);
}
array.forEach(val);

// by using arrow function ;

array.forEach((value,index,array)=>{
    console.log(`array[${index}] = ${value}`);
})



///////////////////////////////////example 2 ////////////////////////////

const str ='abcdefaaabcsdfe';
const array1 =Array.from(str);


const object ={};
array1.forEach(letter=>{
    if(object[letter]){
        object[letter]++;
    }else {
        object[letter]=1;
    }
})
console.log(object); // return { a: 4, b: 2, c: 2, d: 2, e: 2, f: 2, s: 1 }





