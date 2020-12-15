# 2章 第一級関数と作用的プログラミング

## 2.1 第一級要素としての関数

「第一級」という言葉は、第一級である「何か」がただの値であることを意味している。第一級関数とは他のどの「値」もできるようなことができる存在であり、そこに制限はほとんどないか、全くない。例えば、JavaScriptにおいて数値は第一級の存在である。そして関数も同じ性質を持っている。

- 数値は変数に格納できる。関数も同様である。

```javascript
var fortytwo = function() { return 42 };
```

- 数値は配列に要素として格納できる。関数も同様である。

```javascript
var fortytwos = [42, function() { return 42 }];
```

- 数値はオブジェクトのフィールドに格納できる。関数も同様である。

```javascript
var fortytwos = { number: 42, fun: function() { return 42 } };
```

- 数値は任意の時点で生成することができる。関数も同様である。

```javascript
42 + (function() { return 42 })();
//=> 84
```

- 数値は関数に引数として渡すことができる。関数も同様である。

```javascript
function weirdAdd(n, f) { return n + f() }
weirdAdd(41, function() { return 42 });
//=> 84
```

