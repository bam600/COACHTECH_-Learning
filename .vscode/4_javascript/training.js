// 論理演算子

const user = null;

// userがnullなので、user.isAdminの評価は実行されず、エラーにならない
if (user && user.isAdmin) {
  console.log("管理者です");
}
