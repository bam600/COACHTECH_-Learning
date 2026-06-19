//5-2-2: fetch APIの基本
// レスポンスボディの取得
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  // レスポンスが成功したか確認
  if (!response.ok) {
    console.error("データの取得に失敗しました");
    return;
  }

  // レスポンスボディをJSONとして取得
  const post = await response.json();
  console.log(post);
  // { userId: 1, id: 1, title: "...", body: "..." }
}

fetchData();
