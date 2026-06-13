// 4-3-3: イベントリスナーの追加（addEventListener）

const myButton = document.querySelector("#my-button");

function handleClick() {
  alert("ボタンがクリックされました！");
}

// ボタンがクリックされたらhandleClick関数を実行
myButton.addEventListener("click", handleClick);
console.log(myButton);
