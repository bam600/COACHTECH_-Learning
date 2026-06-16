// 5. Promise.all と Promise.race

function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "山田太郎",
      });
    }, 1000);
  });
}

const promise1 = fetchUser(1);
const promise2 = fetchUser(2);
const promise3 = fetchUser(3);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("全ユーザー:", results);
    // [{id:1,...},{id:2,...},{id:3,...}]
  })
  .catch((error) => {
    // いずれかが失敗した場合
    console.error("エラー:", error);
  });

const slow = new Promise((resolve) => {
  setTimeout(() => resolve("遅い処理"), 3000);
});
const fast = new Promise((resolve) => {
  setTimeout(() => resolve("速い処理"), 1000);
});

Promise.race([slow, fast]).then((result) => {
  console.log("勝者:", result);
});
