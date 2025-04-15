function greet(greeting, place) {
  console.log(`${greeting}, I'm ${this.name} ${place}`);
}

//-------- Call polyfill---------

Function.prototype.customCall = function (callObj, ...params) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a Function");
  }
  callObj.tempFunction = this;
  const result = callObj.tempFunction(...params);
  delete callObj.tempFunction;
  return result;
};

const user = { name: "vivek" };
greet.customCall(user, "Hi", "delhi"); // Hi, I'm Vivek

//-------- apply polyfill---------

Function.prototype.customApply = function (context, args) {
  console.log(context, this, args);
  if (typeof this !== "function") {
    throw new Error(this + " is not a Function");
  }
  context.fn = this;
  context.fn(...args);
};

greet.customApply(user, ["Hi", "Gurugram"]); // Hi, I'm Vivek

//-------- Bind polyfill---------

Function.prototype.customBind = function (context, args) {
  console.log(context, this, args);
  if (typeof this !== "function") {
    throw new Error(this + " is not a Function");
  }
  const originalFunction = this;
  return function (...newArgs) {
    return originalFunction.apply(context, [...args, ...newArgs]);
  };
};

const BindResult = greet.customBind(user, ["Hi", "Bind"]); // Hi, I'm Vivek
console.log(BindResult);
BindResult();
