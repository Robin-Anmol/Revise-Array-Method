// indexOf()and lastIndexOf()

// index of  give the index of first occurence of element in arary and last index of give the last index of that element
// indexOf give from the start and last indexof give fromlast

// example:
const arr = ["anmol", "robin", "aakanshi", "ankit", "ashish"];
console.log(arr.indexOf("robin"));
const arr2 = arr.concat();
arr2.push("robin");
console.log(arr2);
console.log(arr2.lastIndexOf("ashish"));

if (arr.indexOf("pragati") > -1) {
  console.log(arr.indexOf("pragati"));
} else {
  console.log("sad ..");
}

// next
console.log(arr2);
arr2.push("pragati");

if (arr2.indexOf("pragati") > -1) {
  console.log(`pragati is present at index ${arr2.indexOf("pragati")}`);
} else {
  console.log("sad ..");
}

//conclusion indexof give the first index of that occcurence and last index of give the last index of that occurence
