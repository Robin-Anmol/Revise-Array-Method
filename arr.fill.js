// arr.fill();
//  it change the whole array with the provided number in fill arument
// exam : arr=[5,6,7,8] => arr.fill(4)=>[4,4,4,4]; it will change all elements of array to the given value
const array = [56, 3, 2, 5, 6];

// array.fill(0); //fill( the numbber want to fill , index from ,index to its is not included );
array.fill(0, 1, 3);

console.log(array);

// function
const fillArr = function (n) {
  return Array(n)
    .fill(0)
    .map((_, index) => index + 1);
};
console.log(fillArr(10));

// it modiefied the original array; and return the new array also

const a = [55, 3, 2, 2];
const d = a.fill(8);
console.log(d);
console.log(a);
