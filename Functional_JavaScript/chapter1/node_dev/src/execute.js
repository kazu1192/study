import { nativeNth, isIndexed, nth, second } from './nth.js';

const letters = ['a', 'b', 'c'];

console.log(letters[1]);

console.log(nativeNth(letters, 1));

console.log(nth(letters, 1));

console.log(nth("abc", 1));

// nth({}, 1);

console.log(second(['a', 'b']));

console.log(second("fogus"));

second({});
