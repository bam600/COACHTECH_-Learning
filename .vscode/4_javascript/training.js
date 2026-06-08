// アロー関数

// 従来の関数
function add(a, b) {
  return a + b;
}

// アロー関数
const add1 = (a, b) => {
  return a + b;
};

// 処理が1行の場合は、さらに短くかける
const add2 = (a, b) => a + b;

// 引数が１つの場合には『』も省略できる
const double = (x) => x * 2;

console.log(add(3, 5)); // 8
console.log(add1(3, 5)); // 8
console.log(add2(3, 5)); // 8
console.log(double(4)); // 8
