import _ from 'underscore';

function parseAge(age) {
  if (!_.isString(age)) throw new Error("");

  a = parseInt(age, 10);

  return a;
}

parseAge("42");
