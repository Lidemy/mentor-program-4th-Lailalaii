## 請以自己的話解釋 API 是什麼

API 是一個傳遞訊息的媒介 (?) 、是兩方溝通的橋梁。例如：紙條故事裏頭的紙條、拉麵機故事裡面的拉麵機。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

- `202` Created：請求新增資料成功
- `408` Request Timeout：請求逾時
- `409` Conflict：請求存在衝突，例如：多個同步更新

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

| 說明             | Method | path             | 參數                                                       | 範例                  |
| ---------------- | ------ | ---------------- | ---------------------------------------------------------- | --------------------- |
| 獲取所有餐廳資料 | GET    | /restaurants     | _limit:限制回傳資料數量                                    | /restaurants?_limit=5 |
| 獲取單一餐廳資料 | GET    | /restaurants/:id | 無                                                         | /restaurants/10       |
| 新增餐廳         | POST   | /restaurants     | name: 餐廳名稱<br />address: 餐廳地址<br />phone: 餐廳電話 | 無                    |
| 刪除餐廳         | DELETE | /restaurants/:id | 無                                                         | 無                    |
| 更改餐廳資訊     | PATCH  | /restaurants/:id | name: 餐廳名稱<br />address: 餐廳地址<br />phone: 餐廳電話 | 無                    |