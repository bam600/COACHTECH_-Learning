// ６．スコープの基本

// グローバル変数は関数内からアクセスできる
const globalMessage = "グローバル変数";

function showMessage() {
  // OK
  console.log(globalMessage);
}

// グローバル変数が表示
// showMessage();
