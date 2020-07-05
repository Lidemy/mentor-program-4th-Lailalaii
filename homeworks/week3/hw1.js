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
function solve(input) {
  // 印出n層
  const num = Number(input[0]);
  // repeat 這個函式代表 str 重複 n 次
  function repeat(str, n) {
    let ans = '';
    for (let i = 0; i < n; i += 1) {
      ans += str;
    }
    return ans;
  }
  for (let i = 1; i <= num; i += 1) {
    console.log(repeat('*', i));
  }
}
rl.on('close', () => solve(lines));
