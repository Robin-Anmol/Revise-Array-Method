/// reduce() method

// reduce method iterate through whole array and gives the  vaalue  after the callback function

// reduce method take to argument (first is callback function ) ,(second is initial value )

// in reduce method the callback  function have 4 arguments;

///example 1
const array = [1e55, 2, 3, 4, 5, 6, 7, 8];

const total = array.reduce(callback); // here if we not provide accumlator then first value of array set to the accumlator ;
function callback(accumlator, value, index, array) {
  return accumlator + value;
}
console.log(total);

let sum = 0;
array.forEach((item) => {
  sum += item;
});
console.clear();
console.log(sum);
