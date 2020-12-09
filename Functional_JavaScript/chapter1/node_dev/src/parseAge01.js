import _ from 'underscore';

function parseAge(age) {
  if (!_.isString(age)) throw new Error("引数は文字列である必要があります");
  let a;

  console.log("ageを数値に変換しようとしています");

  a = parseInt(age, 10);

  if (_.isNaN(a)) {
    console.log(["ageを数値に変換できませんでした : ", age].join(''));
    a = 0;
  }

  return a;
}

console.log(parseAge("42"));
// ageを数値に変換しようとしています
//=> 42

console.log(parseAge("frob"));
// ageを数値に変換しようとしています
// ageを数値に変換できませんでした : frob
//=> 0

console.log(parseAge(42));
// Error: 引数は文字列である必要があります

