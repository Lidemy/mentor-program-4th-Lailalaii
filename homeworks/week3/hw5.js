const readline = require('readline');

const lines = []; // 宣告一個陣列，下面用 push 放進去這個空陣列裡
const rl = readline.createInterface({
  input: process.stdin,
}); // 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line);
});
// 資料輸入完畢，開始針對 lines 做處理
// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function whoWin(a, b, k) {
  if (a === b) {
    return 'DRAW';
  } if (k === 1) {
    return ((a.length > b.length) || (a.length === b.length && a > b)) ? 'A' : 'B';
  } if (k === -1) {
    return ((a.length > b.length) || (a.length === b.length && a > b)) ? 'B' : 'A';
  }
  return 1;
}
function solve(input) {
  const runs = Number(input[0]);
  for (let i = 1; i <= runs; i += 1) {
    const arr = input[i].split(' '); // typeof(arr): object, typeof(arr[0]): string
    const a = arr[0]; // 這裡一轉數字就會變成科學記號，不能轉。且字串一樣可以直接比大小
    const b = arr[1];
    const k = Number(arr[2]);
    console.log(whoWin(a, b, k));
  }
}
rl.on('close', () => solve(lines));
