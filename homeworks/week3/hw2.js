const readline = require('readline');

const lines = []; // 宣告一個陣列，下面用 push 放進去這個空陣列裡
const rl = readline.createInterface({
  input: process.stdin,
}); // 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line);
});
// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
// 資料輸入完畢，開始針對 lines 做處理
function solve(input) { // 取input
  const tmp = input[0].split(' '); // 切開之後要把結果用另一個變數存，沒辦法直接改原本的東西
  const N = Number(tmp[0]);
  const M = Number(tmp[1]);
  function digits(n) { // n是幾位數?
    for (let digit = 6; digit >= 0; digit -= 1) {
      if (n >= (10 ** digit)) {
        return digit + 1;
      }
    }
    return 0;
  }
  function cutNum(n) { // 把每個位數切出來，放入空array回傳
    const cutArray = [];
    let frontDigit;
    let currentDigit;
    for (let i = 0; i < digits(n); i += 1) {
      frontDigit = 10 ** (i + 1);
      currentDigit = 10 ** i;
      cutArray[i] = ((n % frontDigit) - (n % currentDigit)) / currentDigit;
      // console.log('cutArray[',i,']=',cutArray[i])
    }
    return cutArray;
  }
  function findNar(n, arr) { // find Narcissistic number
    let sum = 0;
    for (let i = 0; i < digits(n); i += 1) {
      sum += arr[i] ** digits(n); // 指數是 **, arr[i] 本身已經是數字，不用再轉換
    }
    return (sum === n);
  }
  function print(a, b) {
    for (let i = a; i <= b; i += 1) {
      const arr = cutNum(i);
      if (findNar(i, arr)) {
        console.log(i);
      }
    }
  }
  print(N, M); // print number from N to M
}

rl.on('close', () => solve(lines));
