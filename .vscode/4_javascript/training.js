//breakとcontinue

const numbers = [1, 5, 10, 15, 20];

for (const num of numbers) {
  if (num === 10) {
    console.log("10をみつけました");
    // ループを終了
    break;
  }
  // 10に到達するまで実行される
  console.log(num);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    // 偶数の場合は、この後のconsole.logをスキップして次のループへ
    continue;
  }
  console.log(i);
}
