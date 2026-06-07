// 『name』という箱に『田中太郎』を入れてみましょう。
let name = "田中太郎";

// 『name』の箱の中身を表示してみましょう。
// 出力：田中太郎
console.log(name);

// // const 定数の確認
// // 出力：3.14159
// const PI = 3.14159;
// console.log(PI);
// PI = 3.14; // 定数は再代入できないため、エラーになります。

// let 変数の確認
let count = 0;
console.log(count); // 出力：0

// 再代OK
count = 1;
console.log(count); // 出力：1

// 現在の値に1を足す
count = count + 1;
console.log(count); // 出力：2

// 文字列(String)
const greeting = "こんにちは";
console.log(greeting); // 出力：こんにちは
const name2 = "田中太郎";
console.log(name2); // 出力：田中太郎

// テンプレートリテラル(バッククォート)
const message = `${greeting}、${name2}さん！`;
console.log(message); // 出力：こんにちは、田中太郎さん！

// 数値(Number)
const age = 25; //整数
console.log(age); // 出力：25
const price = 1980.5; //小数
console.log(price); // 出力：1980.5
const negative = -10;
console.log(negative); // 出力：-10

// 計算
const total = price * 2; // 1980.5 * 2
console.log(total); // 出力：3961
