import _ from 'underscore';

// parseAge関数は記述されたとおりに動作しているが、
// エラーや警告、そして情報の出力内容を変えたい場合、
// それぞれを出力する行を適宜変更しなければならない。
// ここでのよりすぐれたアプローチは、エラーや警告、
// そして情報を関数に「抽象化」することである。

function fail(thing) {
  throw new Error(thing);
}

function warn(thing) {
  console.log(["警告 : ", thing].join(''));
}

function note(thing) {
  console.log(["情報 : ", thing].join(''));
}

function parseAge(age) {
  if (!_.isString(age)) fail("引数は文字列である必要があります");

  note("ageを数値に変換しようとしています");

  const a = parseInt(age, 10);

  if (_.isNaN(a)) {
    warn(["ageを数値に変換できませんでした : ", age].join(''));
    return 0;
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

