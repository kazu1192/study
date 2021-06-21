"use strict";
function add(a, b) {
    return a + b;
}
let greet = function (name) {
    return 'hello ' + name;
};
let greet2 = (name) => {
    return 'hello ' + name;
};
let greet3 = (name) => 'hello ' + name;
function log(message, context = {}) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, context.userId);
}
log('Page loaded');
log('User signed in', { appId: 'appId', userId: 'userId' });
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum([1, 2, 3]));
function sumVariadicSafe(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumVariadicSafe(1, 2, 3));
//# sourceMappingURL=index.js.map