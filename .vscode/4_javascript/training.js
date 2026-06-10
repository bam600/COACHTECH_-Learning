// ハンズオン　計算機をつくる

// 基本的な計算関数を作成する

//1.入れ物を作成する
// 足し算
const add = (a, b) => a + b;
// 引き算
const subtract = (a, b) => a - b;
// 掛け算
const multiply = (a, b) => a * b;
// 割り算
const divide = (a, b) => {
  if (b === 0) {
    return "エラー：0で割ることができません";
  }
  return a / b;
};

// テスト
console.log("足し算:10+5=", add(10, 5));

// 計算機関数を作成する

const calculate = (a, operator, b) => {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return "エラー:不正な演算子です";
  }
};

// テスト
console.log("10 + 5 =", calculate(10, "+", 5)); // 15
console.log("10 - 5 =", calculate(10, "-", 5)); // 5
console.log("10 * 5 =", calculate(10, "*", 5)); // 50
console.log("10 / 5 =", calculate(10, "/", 5)); // 2
console.log("10 % 5 =", calculate(10, "%", 5)); // エラーメッセージ

// 複数の計算を連続で行う

const calculations = [
  { a: 10, operator: "+", b: 5 },
  { a: 20, operator: "-", b: 8 },
  { a: 3, operator: "*", b: 4 },
];

console.log("===計算結果===");

for (const calc of calculations) {
  const result = calculate(calc.a, calc.operator, calc.b);
  console.log(`${calc.a}${calc.operator}${calc.b} = ${result}`);
}

// 後から確認できる保存機能を作成
// 保存する配列を作成：
const history = [];

// 履歴付き計算関数
const calculateWithHistory = (a, operator, b) => {
  // 結果を格納
  const result = calculate(a, operator, b);
  const record = {
    expression: `${a},${operator},${b}`,
    result: result,
    timestamp: new Date().toLocaleString("ja-JP"),
  };
  history.push(record);
  return result;
};

// 履歴を表示する関数
const showHistory = () => {
  console.log("===計算履歴===");
  if (history.length === 0) {
    console.log("履歴がありません");
    // 配列が0だった場合処理を終了
    return;
  }
  for (let i = 0; i < history.length; i++) {
    const record = history[i];
    console.log(
      `${i + 1}.${record.expression}=${record.result} (${record.timestamp})`,
    );
  }
};

// テストを実行
calculateWithHistory(100, "+", 200);
calculateWithHistory(50, "*", 3);
calculateWithHistory(100, "/", 4);

// 結果を表示を実行
showHistory();
