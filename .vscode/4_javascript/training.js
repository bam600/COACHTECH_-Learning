// ６．スコープの基本

function example() {
  const message = "関数内の変数";
  // OK
  console.log(message);
}

example();
// エラー！関数外からはアクセスできない
console.log(message);

// グローバル変数は関数内からアクセスできる
const globalMessage = "グローバル変数";

function showMessage() {
  // OK
  console.log(globalMessage);
}

// グローバル変数が表示
showMessage();
