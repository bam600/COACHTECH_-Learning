// 5-2-1: async/awaitの使い方

// Promiseチェーン版
getUser(1)
  .then((user) => {
    console.log("ユーザー:", user.name);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("投稿数:", posts.length);
    return getComments(posts[0].id);
  })
  .then((comments) => {
    console.log("コメント数:", comments.length);
  })
  .catch((error) => {
    console.error("エラー:", error);
  });

// async/await版（より直感的！）
async function fetchAllData() {
  try {
    const user = await getUser(1);
    console.log("ユーザー:", user.name);

    const posts = await getPosts(user.id);
    console.log("投稿数:", posts.length);

    const comments = await getComments(posts[0].id);
    console.log("コメント数:", comments.length);
  } catch (error) {
    console.error("エラー:", error);
  }
}

fetchAllData();
