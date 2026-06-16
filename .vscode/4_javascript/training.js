// 5-1-4: Chapter 1 ハンズオン: setTimeoutを使った非同期処理

// 課題1:実行順序を予測する

console.log("A");

console.log(() => {
  console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
  console.log("D");
}, 1000);

console.log("E");

// 私の予想
// 1:A 2:C 3:E 4:B 5:D

// 課題2: カウントダウンタイマーを作成する

// 1.countdown(seconds) 関数を作成
function countdown(seconds) {
  console.log(`カウントダウン開始: ${seconds}秒`);
}
// 2.1秒ごとに秒数を表示
for (let i = seconds; i >= 0; i--) {
  setTimeout(
    () => {
      if (i > 0) {
        console.log(i);
      } else {
        console.log("完了！");
      }
    },
    (secons - i) * 1000,
  );
}
countdouwn(5);

// 3.0になったら「完了！」を表示
