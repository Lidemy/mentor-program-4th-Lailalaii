## 請解釋後端與前端的差異。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

前後端從字面上直接解釋就是螢幕前和螢幕後的意思，也就是說，所有你在螢幕上看到的東西都屬於前端，其它看不到的都是後端，包含所謂的伺服器和資料庫等等。若用去餐廳吃飯的比喻來說的話，前端就是餐廳的擺設，菜單的設計等等，後端就是整個廚房，待會兒我們也會繼續使用這個比喻來說明前後端的工作。
假設你今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，最後你會看到搜尋結果，這一個看似簡單的步驟正是前後端完美合作的結果。

|                                     | 比喻                           |                        |
| ----------------------------------- | ------------------------------ | ---------------------- |
| 在Google 首頁搜尋框打上：JavaScript | 客人去餐廳看著菜單點菜         | 前端網頁               |
| 按下 Enter                          | 把寫好的菜單拿給服務生         | 前端收到指令           |
|                                     | 服務生把客人點的菜交給後場人員 | 前端對後端提出 request |
|                                     | 廚師開始煮菜                   | 後端對前端送出 respond |
| 看到搜尋結果                        | 把煮好的菜請服務生送去給客人   | 前端                   |



## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. `ls --help`：其實就是 iOS 的 man (Manuel)
   課程影片是用 `man ls`，上網查發現 window 系統的指令好像是 help ，可是一開始我打 `help ls`也沒有東西，後來才知道要查的指令是放前面
2. `git config --local user.name <name>`： username 和 email 都有分 global 和 local ，對於不同的專案可以特別設定不同的 local user name。
3. `cat ~/.gitconfig`：用來顯示現在的 user name 和 email 

