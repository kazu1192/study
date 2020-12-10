// 引数が null と undefined ではないことを示す関数
const existy = function(x) { return x != null };

// 引数が true とみなされるかどうかを判定する関数
const truthy = function(x) { return (x !== false) && existy(x) };

export { truthy, existy };
