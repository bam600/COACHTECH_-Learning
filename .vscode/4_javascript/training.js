// 5-1-4: Chapter 1 ハンズオン: setTimeoutを使った非同期処理

// 課題2: カウントダウンタイマーを作成する

// 1.countdown(seconds) 関数を作成
// 引数はseconds
function countdown(seconds) {
  // カウントダウンの秒数をコンソールで表示(秒数は引数seconds)
  console.log(`カウントダウン開始: ${seconds}秒`);

  // 2.1秒ごとに秒数を表示
  // 引数seconds(秒数)が0いかになるまで1秒ずつ減らす
  for (let i = seconds; i >= 0; i--) {
    setTimeout(
      () => {
        // もしiが0より大きかったら
        if (i > 0) {
          // コンソールにiを表示
          console.log(i);
          // それ以外だったら
        } else {
          // コンソールに完了を表示
          console.log("完了！");
        }
      },
      処理ごとに引数secondから -
        iしたものに1000ミリ秒を掛けてその秒数になったら実行処理を行う(
          seconds - i,
        ) *
          1000,
    );
  }
}
secondsに5を渡す;
countdown(5);

// 3.0になったら「完了！」を表示
