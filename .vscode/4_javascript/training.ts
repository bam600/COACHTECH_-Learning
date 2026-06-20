// 6-1-2: TypeScriptとは何か

// TypeScriptの例
function add1(a: number, b: number): number {
  return a + b;
}
// 3（期待通り）
console.log(add1(1, 2));
// コンパイルエラー
console.log(add1("1", "2"));
// コンパイルエラー
console.log(add1(1, "2"));
