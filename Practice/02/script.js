// Array
const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((fruit) => console.log(fruit));

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

//Copy or Merge Arrays:
const copy = [...arr1];
const merged = [...arr1, ...arr2];
