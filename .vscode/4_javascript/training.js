// 5-1-3: Promiseの基本 Promiseの作成/then, catch, finally

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      // 成功時
      resolve("成功しました！");
    } else {
      // 失敗時
      reject("エラーが発生しました");
    }
  }, 1000);
});

promise
  .then((result) => {
    // 成功時の処理
    console.log(result);
  })
  .catch((error) => {
    // 失敗時の処理
    console.error(error);
  })
  .finally(() => {
    // 成功失敗にかかわらず実行される処理
    console.log("処理完了");
  });
