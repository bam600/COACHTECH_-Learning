// 5-1-4: Chapter 1 ハンズオン: setTimeoutを使った非同期処理

// 課題3: Promiseを使ったデータ取得シミュレーション

// fetchData関数を作成(引数はid)
function fetchData(id) {
  // Promiseオブジェクトを作成引数は成功と失敗
  return new Promise((resolve, reject) => {
    // idをコンソールで表示
    console.log(`データ取得中... (ID: ${id})`);
    setTimeout(() => {
      // idが0以下だったら
      if (id <= 0) {
        // 失敗の引数に渡す
        reject(new Error("無効なIDです"));
        // 0以上だったら
      } else {
        // 成功の引数にデータを渡す
        resolve({
          id: id,
          title: `データ ${id}`,
          // ？？わかりません
          createdAt: new Date().toISOString(),
        });
      }
      // 1秒後に実行する
    }, 1000);
  });
}

// idが1
fetchData(1)
  // 成功パターン
  .then((data) => {
    // コンソールで取得成功：1を表示
    console.log("取得成功:", data);
  })
  // エラーパターン
  .catch((error) => {
    // エラーメッセージを表示
    console.error("エラー:", error.message);
  });

// 失敗パターン
fetchData(-1)
  // 成功パターン
  .then((data) => {
    // コンソールで取得成功：-1を表示
    console.log("取得成功:", data);
  })
  // エラーパターン
  .catch((error) => {
    // -1の場合はエラー表示
    console.error("エラー:", error.message);
  });
