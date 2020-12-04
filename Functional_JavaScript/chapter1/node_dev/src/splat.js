function splat(func) {
  return function(array) {
    return func.apply(null, array);
  };
}

const addArrayElements = splat(function(x, y) { return x + y });

const v = addArrayElements([1 ,2]);

console.log(v);
