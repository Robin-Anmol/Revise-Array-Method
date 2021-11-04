///// ARRAY.MAP() METHOD RETURN AN ARRAY  AFTER DOING AN OPERATION ON EACH ELEMENSTS OF ARRAY;

// example 1;

const array = [1, 2, 3, 4, 5];

// map() method;
// array.map(callback_function required);

const valueMultiplyByIndex = function (value, index, array) {
  return value * index;
};
const Arr = array.map(callback); // it return an array  need to store;

function callback(value, index, array) {
  return value * 2;
}

const Arr2 = array.map(valueMultiplyByIndex);

console.log(`Array in which each value is multiply by 2  `, Arr);
console.log(`Array in which each value is multiply by  it's index `, Arr2);

// example 2;

console.clear();
const array2 = [
  {
    company: "lenovo",
    price: 40000,
    pieces: 34,
  },
  {
    company: "hp",
    price: 54000,
    pieces: 55,
  },
  {
    company: "Dell",
    price: 50000,
    pieces: 20,
  },
  {
    company: "Apple",
    price: 93000,
    pieces: 30,
  },
];
let sum = 0;
const company = function (value, index, array2) {
  sum += value.price * value.pieces;
  return sum;
};
const Array = array2.map(company);
console.log(sum);

const ArrayOfObject = array2.map((value) => {
  return {
    company: value.company,
    netprice: value.price * value.pieces,
  };
});
console.log(ArrayOfObject);
