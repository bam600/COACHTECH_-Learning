// 5-1-3: Promiseの基本 Promiseの作成

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
