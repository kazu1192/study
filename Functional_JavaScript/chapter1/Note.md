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

例として、すべてのJavaScript関数が持つapplyメソッドが挙げられる。このメソッドに関数と配列を渡して呼び出すと、その配列を関数の引数として関数を実行することができる。applyを使って、splat関数を作成してみる。このsplat関数に関数を渡して実行すると、新たな関数を生成して戻り値として返す。

```javascript
function splat(fun) {
    return function(array) {
        return fun.apply(null, array);
    }
};

var addArrayElements = splat(function(x, y) { return x + y });

addArrayElements([1, 2]);
//=> 3
```