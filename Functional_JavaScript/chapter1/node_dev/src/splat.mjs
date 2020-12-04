function splat(func) {
  return function(array) {
    return func.apply(null, array);
  };
}

var addArrayElements = splat(function(x, y) { return x + y });

export { addArrayElements };
