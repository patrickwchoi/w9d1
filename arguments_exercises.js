// function sum(...args){
//   return args.reduce((acc,el) => acc+el)
// }

function sumargs() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumargs(1,2,3));

Function.prototype.myBind = function (context, ...bindArgs){
  let func = this;
  return function(...callArgs){
    return func.apply(context, bindArgs.concat(callArgs))
  }
}

Function.prototype.myBind2 = function (context) {
  let func = this;
  let bindArgs = Array.from(arguments);

  return function (...callArgs) {
    return func.apply(context, bindArgs.concat(callArgs))
  }
}


Function.prototype.curry = function(numArgs) {
  let nums = [];
  let func = this;

  return _curry = function (num) {
    nums.push(num);
    if (nums.length === numArgs) {
      return func(...nums);
    } else {
      return _curry;
    }
  }
}

function curriedSum(numArgs) {
  let nums = [];

  return _curriedSum = function (num) {
    nums.push(num);
    if (nums.length === numArgs) {
      return nums.reduce( (acc, el) => acc + el);
    } else {
      return _curriedSum;
    }
  }
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log(f1);


// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56
