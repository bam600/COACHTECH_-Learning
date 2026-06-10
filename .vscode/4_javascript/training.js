// 4-2-1: 配列の基本操作（push, pop, map, filter）

const numbers = [1, 2, 3];
numbers.push(4);

// 4が追加される
console.log(numbers);

// 末尾の４を返して削除
const lastNumber = numbers.pop();
// 4が削除される
console.log(lastNumber);

const numbers1 = [1, 2, 3, 4, 5];

// 各要素を2倍にした新しい配列を作成
const doubled = numbers1.map((num) => num * 2);
console.log(doubled);

// 偶数だけを集めた新しい配列を作成
const evens = numbers1.filter(num => num % 2 === 0);
console.log(evens);
