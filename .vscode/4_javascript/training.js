//5-2-2: fetch APIの基本

async function fetchData() {
  // JSONPlaceholderの投稿(posts)を1件取得する
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  console.log(response);
  // Response { type: "cors", url: "...", status: 200, ok: true, ... }
}

fetchData();
