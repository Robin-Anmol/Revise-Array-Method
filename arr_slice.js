// IT RETURN THE SHALLOW  COPY // means it does not change the initial array
// it does not modefied the original array
const num = [3, 4, 5, 6, 78, 8];

// let num1=num.slice(from which index we need element, upto which index :note this index is not included)

let num1 = num.slice(2, 4); // return [5,6] does not included the second index
// console.log(num1);
// console.log(num);

// 2. not giving argument
// let num2 = num.slice(); // it make shallow copy of original array
let num2 = num.slice(-3, 4); // the second index should alway be right after the first
// case 1 : slice(-4,-1)  [5,6,78];
// case 2 slice(-1,-4) give [] empty arr
// case 3 slice (-3,4) [6];

console.log(num2);
// let num2 = num.slice(-1);
