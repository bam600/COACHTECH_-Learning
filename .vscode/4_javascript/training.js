//課題5: Promise.allを使った並列処理
// getUser関数を作成。引数にuserId
function getUser(userId) {
  // Promiseオブジェクトを作成
  return new Promise((resolve) => {
    // names配列に名前を格納する
    const names = ["田中", "佐藤", "鈴木", "高橋", "渡辺"];
    setTimeout(() => {
      // 成功プロパティidはuserId　nameはuserIdから1引いた配列番号を取得かつuserIdを取得
      resolve({
        id: userId,
        name: [userId - 1] || "ユーザー${userId}",
      });
      // ランダムな遅延で実行する
    }, Math.random() * 1000);
  });
}

// 5人のユーザーを並列で取得
// userPromises配列を作成
const userPromises = [
  // 1は田中、2は佐藤、3,は鈴木、4は高橋、5は渡辺
  getUser(1),
  getUser(2),
  getUser(3),
  getUser(4),
  getUser(5),
];

console.log("全ユーザーを取得中...");

// 複数のpromiseを並列で実行する引数にuserPromisesを渡す
Promise.all(userPromises)
  // 成功の処理
  .then((users) => {
    console.log("取得完了！");
    // useridの数分表示する
    users.forEach((user) => {
      // コンソールの実行
      console.log(`  ID: ${user.id}, 名前: ${user.name}`);
    });
  })
  // エラーの場合の処理
  .catch((error) => {
    // エラーメッセージをコンソールで表示
    console.error("エラー:", error);
  });
