# 1章 関数型JavaScriptへのいざない

JavaScript言語は関数型プログラミングの手法をサポートしている。

```javascript
[1, 2, 3].forEach(aleat);
// アラート"1"がポップアップ
// アラート"2"がポップアップ
// アラート"3"がポップアップ
```

Array#forEachメソッドは、引数として渡した関数に配列のそれぞれの要素を順番に渡して実行する。

JavaScriptは、内部処理のために関数を引数として取るような様々な関数やメソッドを用意している。

例として、すべてのJavaScript関数が持つapplyメソッドが挙げられる。このメソッドに関数と配列を渡して呼び出すと、その配列を関数の引数として関数を実行することができる。

ここでapplyを使って、splat関数を作成してみる。このsplat関数に関数を渡して実行すると、新たな関数を生成して戻り値として返す。

```javascript
function splat(fun) {
    return function(array) {
        return fun.apply(null, array);
    };
}

var addArrayElements = splat(function(x, y) { return x + y });

addArrayElements([1, 2]);
//=> 3
```

JavaScriptの関数は、渡す引数のデータ型を問わず、その数も限定されない。そして、任意の時点で実行することができる。

ここでsplatの逆の機能を持つunsplatという関数を作る。unsplatは関数を引数に取り、別の関数を返す。返された関数は、渡された引数をもとの関数に渡して実行する。

```javascript
function unsplat(fun) {
	return function() {
		return fun.call(null, _.toArray(arguments));
	};
}

var joinElements = unsplat(function(array) { return array.join(' ') });

joinElements(1, 2);
//=> 1 2

joinElements('-', '$', '/', '!', ':');
//=> "- $ / ! :"
```

JavaScriptでは、すべての関数内でargumentsというローカル変数にアクセスすることができる。argumentsは配列に似た構造体で、関数呼び出し時に引数として与えられた値を保持する。

関数型プログラミングとは、値を抽象の単位に変換する関数を使用して行うプログラミングであり、それらを使ってソフトウェアシステムを構築することである。

関数型プログラミングを実現するための触媒として使用するライブラリはUnderscoreである。Underscoreは殆どの場合において、この簡略化された関数型プログラミングの基本定義に沿っている。