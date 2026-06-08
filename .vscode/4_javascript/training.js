function greet(name = "ゲスト") {
  console.log(`こんにちは、${name}さん`);
}
// nameの値がないと判断したらゲストさんが表示される
greet();
greet("太郎");

// アロー関数でも同様　mutiply ＝掛け算の意味
const mutiply = (a, b = 1) => a * b;

// bのみ初期値を設定しているためnanが表示される
console.log(mutiply());
// 15
console.log(mutiply(5, 3));
// 5
console.log(mutiply(5));
