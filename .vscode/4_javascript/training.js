// 3. 実践的な例: データ取得

// 関数fetchUserを登録。実行の際userIdを引数として渡す。
function fetchUser(userId) {
  // promiseオブジェクトを作成して返している（resolve:成功したときに呼ぶ関数、reject:失敗したときに呼ぶ関数
  return new Promise((resolve, reject) => {
    // 結果を出力△
    // 「ユーザー○○のデータを取得中...」とコンソールに表示する
    console.log(`ユーザー ${userId}のデータを取得中...`);

    // setTimeoutで1500ミリ秒後に実行
    setTimeout(() => {
      // 成功をシュミレート
      // userIDが０より大きい場合
      if (userId > 0) {
        // resolveに配列を格納×
        // id,name,emailのデータをresolveに渡している。
        resolve({
          id: userId,
          name: "山田太郎",
          email: "yamada@example.com",
        });
        // 0以下だったら
      } else {
        // rejectにエラーメッセージを渡す
        reject("無効なユーザーIDです");
      }
    }, 1500);
  });
}

// 使用例
fetchUser(1)
  // thenで実行成功時の処理を行う
  .then((user) => {
    console.log("ユーザー情報:", user);
  })
  // catchでエラー処理を行う
  .catch((error) => {
    console.error("エラー:", error);
  });

// 出力：
// ユーザー１データの取得中
// 1.5秒後
// ユーザー情報: { id: 1, name: "山田太郎", email: "yamada@example.com" }

// 関数fetchUserを登録引数にuserIdを渡す
function fetchUser(userId) {
  return new Promise((resolve) => {
    // 1000ミリ秒後に実行
    setTimeout(() => {
      // 処理成功時にid,userId,nameをresolveに渡す△
      // 処理成功時にユーザー情報のオブジェクトをresolveに渡す
      resolve({ id: userId, name: "山田太郎" });
    }, 1000);
  });
}

// 関数fetchPostsを登録引数にuserIdを渡す
function fetchPosts(userId) {
  // Promise関数を作成引数に1000ミリ秒後に実行したresolveにデータを渡す△
  // 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "最初の投稿" },
        { id: 2, title: "2番目の投稿" },
      ]);
    }, 1000);
  });
}

// fetchComments関数を作成してpostIdを引数に渡す
function fetchComments(postId) {
  // 処理が成功した場合1000ミリ秒後にresolveにデータを渡す
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "素晴らしい！" },
        { id: 2, text: "参考になりました" },
      ]);
    }, 1000);
  });
}

// Promiseチェーンで連結
fetchUser(1)
  // 処理成功時の処理△
  // fetchUserの結果を受け取る
  .then((user) => {
    // コンソール表示(ユーザー名を表示)
    console.log("ユーザー:", user.name);
    // fetchPostsにuser.idを渡す△
    // user.idを渡して投稿情報を取得
    return fetchPosts(user.id);
  })
  // 処理成功時の処理
  // fetchPostsの結果を受け取る
  .then((posts) => {
    // 投稿数の表示
    console.log("投稿数:", posts.length);
    // 最初の投稿のidを渡してコメントを取得
    return fetchComments(posts[0].id);
  })
  // 処理成功時の処理
  // fetchCommentsの結果を受け取る
  .then((comments) => {
    // コンソール表示
    // コメント数の表示
    console.log("コメント数:", comments.length);
  })
  // エラー処理
  // Promiseチェーンのどこかでエラーが発生したら実行
  .catch((error) => {
    // コンソール表示
    console.error("エラー:", error);
  });
