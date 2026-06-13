// 4-3-4: 実践 チャプターハンズオン: ToDoリストを作成する

// 1. DOM要素の取得
// todo-inputの要素を探す
const todoInput = document.querySelector("#todo-input");
// add-buttonの要素を探す
const addButton = document.querySelector("#add-button");
// todo-listの要素を探す
const todoList = document.querySelector("#todo-list");

// 2.イベントリスナーの登録
// 追加ボタンをクリックしたら処理を行う
addButton.addEventListener("click", function () {
  // a.テキストの取得
  // idがtodoInputの値を取得して定数todoTextに格納
  const todoText = todoInput.value;

  // 入力が空の場合は何もしない
  // todoTextが空だったら処理終了
  if (todoText === "") return;

  // b.li要素の作成
  // todoTextに値がはいっていたら(falseの場合)liタグを作成
  const newTodoItem = document.createElement("li");

  // c.テキストの設定
  // liタグにテキストを設定
  newTodoItem.textContent = todoText;

  // d.li要素の追加
  todoList.appendChild(newTodoItem);

  // e.inputを空にする
  // 初期状態にもどす
  todoInput.value = "";
});
