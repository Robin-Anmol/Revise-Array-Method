// array.filter() method return an array for which the callback function give truthy value // it does not modified the original array
// it  give new array \

const array = [1, 2, 3, 4, 5, 6, 7, 0, 8];
const EvenArray = function (value, index, array) {
  return value % 2 == 0;
};

const newArr = array.filter(EvenArray);
console.log(newArr); // return the array of even numbers;

const oddArr = function (value, index, array) {
  return !(value % 2 == 0);
};
const newArr2 = array.filter(oddArr);
console.log(newArr2); // Array of odd numbers;

//////////////////////////////
const array2 = [
  {
    name: "anmol",
    age: 18,
  },

  {
    name: "jim",
    age: 15,
  },
  {
    name: "timmy",
    age: 17,
  },
  {
    name: "liz",
    age: 20,
  },
];

const adult = function (value, index, array) {
  return value.age >= 18;
};

const result = array2.filter(adult);
console.log(result);

const val = result.forEach((item) => {
  console.log(item.name);
});
console.log(val);
console.clear();
//// example 3;
const arrayDoublicate = [1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8];

const uniqueElements = arrayDoublicate.filter((callback, index, array) => {
  return arrayDoublicate.indexOf(callback) == index; // indexOf always give the indexx of first occurence
});

console.log(uniqueElements);
