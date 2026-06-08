// else if文

// 基本構文
// if(条件式){
// 条件式がtrueの場合に実行される処理]
// }else if(条件式2){
// 条件式1がfalseで条件式2がtrueの場合の処理
// }
// }else{
// 条件式がfalseの場合に実行される処理
//}

const score = 40;

if (score >= 90) {
  console.log("優");
} else if (score >= 70) {
  console.log("良");
} else if (score >= 50) {
  console.log("可");
} else {
  console.log("不可");
}
