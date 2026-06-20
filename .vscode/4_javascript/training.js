// 6-1-2: TypeScriptとは何か

// javascrinptの例
function add(a, b) {
  return a + b;
}
 // 3（期待通り）
console.log(add(1, 2));
// "12"（文字列の連結になってしまう）
console.log(add("1", "2"));
// "12"（意図しない結果）
console.log(add(1, "2"));
