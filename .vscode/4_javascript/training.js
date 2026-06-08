// 4-1-3: 関数の定義と呼び出し

// 1. 関数の基本的な定義
function greet() {
  console.log("こんにちは！");
}

// 関数の呼び出し
greet(); // こんにちは！と表示される
greet(); // こんにちは！と表示される

// 2. 引数（パラメータ）
function greet(name) {
  console.log(`こんにちは、${name}さん！`);
}

greet("太郎"); // こんにちは、太郎さん！と表示される
greet("花子"); // こんにちは、花子さん！と表示される

// 複数の引数を受け取る関数
function add(a, b) {
  console.log(a + b);
}

add(5, 3); // 8と表示される
add(10, 20); // 30と表示される

// 3. 戻り値（return）
function add(a, b) {
  return a + b; // 計算結果を返す
}

const result = add(5, 3);
console.log(result); // 8と表示される

// 戻り値を直接使う
console.log(add(10, 20)); // 30と表示される

// 計算結果を別の計算に使う
const total = add(100, 200) + add(50, 50);
console.log(total); // 400と表示される

function checkAge(age) {
  if (age < 0) {
    return "無効な年齢です";
  }
  if (age >= 20) {
    return "成人です";
  }
  return "未成年です";
}

console.log(checkAge(25)); // 成人ですと表示される
console.log(checkAge(15)); // 未成年ですと表示される
console.log(checkAge(-5)); // 無効な年齢ですと表示される
