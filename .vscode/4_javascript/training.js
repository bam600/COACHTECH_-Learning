//5-2-3: JSONデータの取得と表示

async function displayUsers() {
  // 定数 userListにidがuser-listを探して取得
  const userList = document.querySelector("#user-list");

  // 1. データを取得する
  // 定数responseにfetch("https://jsonplaceholder.typicode.com/users")でデータをくださいと依頼して
  // awaitで取得が完了するまでまつ
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // 定数 usersに取得したデータを格納するまでまち、完了したら格納する
  const users = await response.json();

  // 2. 取得したユーザーデータの配列をループ処理
  // 格納したデータ文ループ処理を行う
  users.forEach((user) => {
    // 3. 各ユーザーごとにli要素を生成
    const listItem = document.createElement("li");
    // li要素にuser.nameを追加していく
    listItem.textContent = user.name;

    // 4. ul要素にli要素を追加
    userList.appendChild(listItem);
  });
}

displayUsers();
