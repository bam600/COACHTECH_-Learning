// 課題4: Promiseチェーンを使った連続処理
// getUser関数を作成。引数にuserId
function getUser(userId) {
  // 成功したら、0.5秒後にidとnameを渡す(ユーザ情報を取得)
  return new Promise((resolve) => {
    setTimeout(() => {
      resove({ id: userId, name: "山田太郎" });
    }, 500);
  });
}

// 投稿取得
// getPosts関数を作成引数にuserId
function getPosts(userId) {
  // 成功したら0.5秒後にidとnameとtitleの処理を実行
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: userId, title: "最初の投稿" },
        { id: 2, userId: userId, title: "2番目の投稿" },
      ]);
    }, 500);
  });
}

// コメント取得
function getComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, postId: postId, text: "素晴らしい記事です！" },
        { id: 2, postId: postId, text: "参考になりました" },
      ]);
    }, 500);
  });
}
// Promiseチェーンで連結
console.log("処理開始");

// getUser関数に引数1を渡す
getUser(1)
  .then((user) => {
    console.log("ユーザー取得:", user.name);
    // user.idの1をgetPosts関数に戻す
    return getPosts(user.id);
  })
  // user.id 1の投稿内容を取得し何件あるか調べる
  .then((posts) => {
    console.log("投稿取得:", posts.length, "件");
    // なんと表現したらいいかわからない
    return getComments(posts[0].id);
  })
  // ？？？？
  .then((comments) => {
    console.log("コメント取得:", comments.length, "件");
    comments.forEach((comment) => {
      console.log(`  - ${comment.text}`);
    });
  })
  // エラーの場合
  .catch((error) => {
    // コンソールにエラーメッセージを表示する
    console.error("エラー:", error);
  })

  // 処理が終了した場合△
  // 処理が失敗しても終了しても最後に実行する。
  .finally(() => {
    // コンソールに処理完了を表示
    console.log("処理完了");
  });
