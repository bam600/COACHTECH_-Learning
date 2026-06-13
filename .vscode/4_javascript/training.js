// 4-3-2: 要素の取得と変更（querySelector, innerHTML）

// ID要素を取得
const mainTitle = document.querySelector("#main-title");

// クラスで最初の要素を取得
const firstItem = document.querySelector(".list-item");

// クラスで全ての要素を取得
const allItems = document.querySelectorAll(".list-item");

// allItemsはNodeListなので、forEachでループ処理できる
allItems.forEach((item) => {
  console.log(item.textContent);
});
