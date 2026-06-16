// 5-2-1: async/awaitの使い方

// await演算子

// Promiseを返す関数
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "太郎", age: 25 });
    }, 1000);
  });
}

// then を使った書き方
fetchData().then((data) => {
  console.log(data);
});

// async/await を使った書き方
async function getData() {
  const data = await fetchData();
  // Promiseが解決されるまで待つ
  console.log(data);
}
getData();
