let arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback, thisArg) {
  let result = [];
  console.log(callback, thisArg);
  for (let i = 0; i < this.length; i++) {
    // result.push(callback.call(thisArg, this[i], i, this));
    result.push(callback(this[i], i, this));
  }
  return result;
};
// let mapResult = arr.myMap(
//   function (ele, i) {
//     return ele + this.add;
//   },
//   { add: 1 }
// );
// In JavaScript array methods like .map(), .forEach(), .filter(), etc.,
// the second parameter is an optional thisArg — a custom value you want to use as this inside the callback.
let mapResult = arr.myMap((ele, i) => ele * i);

console.log("My map polyfill result ==>", mapResult);
Array.prototype.myFilter = function (callback) {
  let result = [];
  console.log(callback, this);
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      result.push(this[i]);
    }
  }
  return result;
};
let filterResult = arr.myFilter((ele, i) => i % 2 == 0);
console.log("My filter polyfill result ==>", filterResult);
