function sum(...args){
  return args.reduce((acc,el) => acc+el)
}

Function.prototype.myBind = function (context, ...bindArgs){
  let func = this;
  return function(...callArgs){
    return func.apply(context, bindArgs.concat(callArgs))
  }
}

