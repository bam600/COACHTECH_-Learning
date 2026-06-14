//5-1-2: 同期処理と非同期処理の違い

// 上から順番に処理する同期処理
console.log("1.最初の処理");
console.log("2.次の処理");
console.log("3.最後の処理");

// 同期処理の問題
// 仮に重い処理があった場合のイメージ
console.log("1.処理開始");
// heavyProcess();
console.log("2.処理終了");

// 非同期処理
console.log("1.最初の処理");

// setTimeoutは非同期処理
setTimeout(() => {
  console.log("2.1秒後の処理");
}, 1000);

console.log("3.最後の処理");

// 基本構文
// setTimeout(() => {
// 実行したい処理
// }, 待機時間(ミリ秒));

// 例：2秒後にメッセージを表示
setTimeout(() => {
  console.log("2秒経過しました");
}, 2000);

// 複数のsetTimeoutを使った例

setTimeout(() => {
  console.log("3");
}, 1000);

setTimeout(() => {
  console.log("2");
}, 2000);

setTimeout(() => {
  console.log("1");
}, 3000);

setTimeout(() => {
  console.log("スタート");
}, 4000);

console.log("カウントダウン中");
