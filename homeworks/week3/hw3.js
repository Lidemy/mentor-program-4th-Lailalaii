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
  function isPrime(n) { // 判斷質數 function isPrime
    if (n === 1) return false;
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function handleNumber(n) { // 處理每個數字輸出 function handleNumber
    if (isPrime(n)) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
  // 跑每個數字 for
  for (let i = 1; i < input.length; i += 1) { // 從第2個數字開始看
    handleNumber(Number(input[i]));
  }
}
rl.on('close', () => solve(lines));
