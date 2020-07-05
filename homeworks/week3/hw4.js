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
  const tmp = input[0];
  for (let i = 0; i < (tmp.length / 2); i += 1) {
    const last = tmp.length - 1 - i;
    if (tmp[i] !== tmp[last]) {
      // console.log('lines[i]:',tmp[i])
      // console.log('lines[last]:',tmp[last])
      return console.log('False');
    }
  } return console.log('True');
}

rl.on('close', () => solve(lines));
