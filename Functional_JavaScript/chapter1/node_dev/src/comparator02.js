import _ from 'underscore';
import { truthy } from './truthy.js';

// predicate function
function lessOrEqual(x, y) {
  return x <= y;
}

console.log([2, 3, -1, -6, 0, -108, 42, 10].sort(lessOrEqual));

// comparator function
function comparator(pred) {
  return function(x, y) {
    if (truthy(pred(x, y)))
      return -1;
    else if (truthy(pred(x, y)))
      return 1;
    else
      return 0;
  };
}

console.log([2, 3, -1, -6, 0, -108, 42, 10].sort(comparator(lessOrEqual)));
