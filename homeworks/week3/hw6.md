## hw1：好多星星

沒什麼好說的

## hw2：水仙花數

怎麼取各個位數的數字

huli 做法：每次都取除 10 的餘數，直接加

```
  while(m != 0) {
    let num = m % 10
    // 可改成 Math.pow(num, digits)
    sum += num**digits 
    m = Math.floor( m / 10)
  }
```



我的做法：ex 十位數 = (除 100 的餘數 - 除 10 的餘數) / 10

```
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
```

看到 huli 的做法覺得簡單很多，現在回頭看自己的方法有點脫褲子放屁，不過還是肯定那時候的自己最好的做法 XD，我還記得那時候寫一個早上寫出來充滿成就感的感覺。現在回頭看覺得這題一點都不難，看來我進步了，恩恩。

## hw3：判斷質數

從 1 開始，看能不能整除，可以就不是質數

## hw4：判斷迴文

恩。

## hw5：聯誼順序比大小

keypoint ：大數字

1. 大數字留字串

數字很大的時候維持字串形式才能保留最原始的狀態，因為字串可以無限長 (?)
不能直接轉數字或是做任何運算，因為任何一個運算的動作都會讓原本的數字變成科學記號並且失真

2. 字串比大小

因為 JS 比字串的方法是從左比到右，所以 '3' < '123' 會出現 false。 所以這題要分成

	1. 相同位數、直接比字串 
	2. 不同位數，比字串長度

## eslint

eslint 前先檢查

1. 右下角已將 win 預設的 CRLF 改成 LF
   避免 error: Expected linebreaks to be 'LF' but found 'CRLF'
2. 變數宣告
   統一只用 const (不會變的), let (會變的) 
3. 匿名 function 改成箭頭刑事
4. function 順序
   從最小放到最大，也就是互相依賴的 function 往上找都找的到
5. 註解前先一個空白
6. 加分號 `;`



待處理

1. `Parsing error: Unexpected token` 
   看不懂是什麼，可是突然自己不見了

