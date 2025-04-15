let arr = [1, 2, 3, 4, 5];

//------Custom Map----------

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

//------ Custom filter ------

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

//-------Custom reducer ---------
Array.prototype.customReducer = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator == undefined) accumulator = this[i];
    accumulator = callback(accumulator, this[i], i);
  }
  return accumulator;
};
const sumReducer = arr.customReducer((acc, num) => acc * num);
console.log("My Reducer polyfill result ==>", sumReducer);

//--------- Custom Find -----------

Array.prototype.customFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      return this[i];
    }
  }
  return undefined;
};
const findResult = arr.customFind((num) => num > 3);
console.log("My find polyfill result ==>", findResult);

//------------ Custom Foreach ---------
Array.prototype.customForEach = function (callback, thisArg) {
  let result = [];
  console.log(callback, thisArg);
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.customForEach((ele, i) =>
  console.log("My Foreach polyfill result ==>", ele)
);
