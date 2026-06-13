// 4-2-4: 実践チャプターハンズオン: ToDoリストのデータ構造を作成する
// 1. ToDoリストのデータ構造
// 配列変数todosを作成　idプロパティ、textプロパティ、真偽値プロパティを作成
let todos = [
  { id: 1, text: "JavaScriptを学ぶ", completed: true },
  { id: 2, text: "Reactを学ぶ", completed: false },
  { id: 3, text: "Next.jsを学ぶ", completed: false },
];

// 2. 未完了のToDoだけをフィルタリングする関数
function getIncompleteTodos(todoList) {
  return todoList.filter((todo) => !todo.completed);
}

console.log("未完了のToDo:", getIncompleteTodos(todos));

// 3. 指定されたIDのToDoを完了済みにする関数
//
function completeTodo(todoList, todoId) {
  return todoList.map((todo) => {
    if (todo.id === todoId) {
      return { ...todo, completed: true };
    }
    return todo;
  });
}
// completeTodoメソッドにに配列todoのid2の情報を渡して処理を行う
todos = completeTodo(todos, 2);
console.log("更新後のToDoリスト:", todos);
