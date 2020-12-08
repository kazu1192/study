function splat(func) {
  return function(array) {
    return func.apply(null, array);
  };
}

const addArrayElements = splat(function(x, y) { return x + y });

console.log(addArrayElements([1 ,2]));
