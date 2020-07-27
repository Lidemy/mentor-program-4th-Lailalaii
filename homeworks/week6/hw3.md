## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. `<option>`  下拉列表選項

2. `<tfoot></tfoot>`  定義表單尾部（thead 為表頭）

3. `<em></em>`  強調文本

   

## 請問什麼是盒模型（box modal）

在 CSS 裡面，html 的每個元素都可被視作為一個盒子，可以針對這個盒子用 CSS 去做調整。

![image-20200726203515237](https://i.imgur.com/iXQWI2D.png?1)

因為 padding 跟 border 都是往外面長，都會影響 box 的整體高度寬度，跟我們想的不一樣。
我們期待的是 padding 可以往內長，所以有了另外一個屬性 box-sizing

```
.box-model {
  box-sizing: content-box | border-box
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 10px solid blue;
  margin: 10px
}
```



| `box-sizing: content-box` (預設)                             | `box-sizing: border-box`                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 全部往外長                                                   | 以預設寬高當標準，border 大小不變，<br />padding 和 border 就會往內長。 |
| ![image-20200726203926036](https://i.imgur.com/HJlaX9N.pngimage-20200726203926036.png) | ![image-20200726204610992](https://i.imgur.com/deM8hYl.png)  |




## 請問 display: inline, block 跟 inline-block 的差別是什麼？

display 決定：

1. 元素與相鄰元素怎麼排
2. 元素內部元素怎麼排

|      | block                                            | inline                                                       | inline-block                                                 |
| ---- | ------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|      | 會佔據整行，盡可能撐滿整個元素，由上到下自動換行 | 併排，都在同一列，相鄰的排一起。                             | 對外像 inline 可以併排<br />對內像 block 可以調整各種屬性(寬高、邊距) |
| 預設 | div, h1~h6, p, …                                 | 行內元素：<br />span, a (超連結用)                           | bottom, input, select…                                       |
| 注意 |                                                  | 沒有內容就沒有體積。<br />不能調寬高、上下邊距也不能調。<br />可以調左右邊距 margin。 |                                                              |

Minw 助教影片補充:

1. 圖片跟著元素比較好開發，可放在 background image，background size 調成 cover，才不會壓縮到圖片的比例。

2. 圓角如果沒有顯示出來的原因是因為圖片本身超過限制，需要補上 overflow: hidden 才會看出原本設定的圓角效果

3. 新的單位 rem ，代表全網站的基礎字體大小為基礎，看需要的大小是基礎的幾倍。 em 則是以母元素的字體大小為基礎，但標籤一多會很複雜，因為每個母元素大小都不一樣。

![Image for post](https://miro.medium.com/max/2482/1*uVrG5CwY6uXmCOs3mNbv6w.png)

參考資料：[display 屬性中常用的類別](https://medium.com/ui-ux%E7%B7%B4%E5%8A%9F%E5%9D%8A/display-%E5%B1%AC%E6%80%A7%E4%B8%AD%E5%B8%B8%E7%94%A8%E7%9A%84%E9%A1%9E%E5%88%A5-77eb86714d8a)

Case 1 - inline 調 margin
inline 只能調左右 margin ，因為以預設 span 的屬性來說，是遷就於其他人，我們不需要去變動寬高度跟上下margin ，只剩下左右 margin 可以調，若超過就會自動換行。

![Image for post](https://miro.medium.com/max/660/1*kGa1mvQ-_pi52sTmt_v-JA.gif)

Case 2 - inline 調 padding

雖然不會影響其他的元素，但是會有不一樣的反應。
當換行之後，設置的 padding 可能會讓上下兩行互相干擾，因為行高是固定的。
在這種 inline 的條件下，一般也很少會設置 padding ，除非有特別的用意。

![Image for post](https://miro.medium.com/max/660/1*OfHjI-B_jFG5gVBpLextaw.gif)



## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

position: 用在排版元素的位置，讓元素出現在應該出現的位置就會需要各種定位的方法來輔助。

| Static                                                      | Relative                                                    | Fixed                                                       | Absolute                                                    |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| 不跳脫排版流的預設定位                                      | 不跳脫排版流，以原本位置做為原點來相對移動                  | 跳脫排版流，以視窗作為原點來移動                            | 跳脫排版流，以特定元素作為原點來移動                        |
| ![image-20200720103303583](https://i.imgur.com/7ZAkEBI.png) | ![image-20200720103323445](https://i.imgur.com/qnYUkRM.png) | ![image-20200720103359991](https://i.imgur.com/T6KlHVc.png) | ![image-20200720103419451](https://i.imgur.com/XaSOU3K.png) |

> Absolute 絕對定位必須要有個特定元素的**參考點**。
> 參考點就是以設置 absolute 的位置往上找**不是 static 的元素**，做為參考點，否則就會用預設的 body 做為參考點。



## 參考資料

1. [Lidemy 程式導師實驗計畫第四期影片](https://bootcamp.lidemy.com/)
2. [前端基礎：CSS 盒模型（box model）](https://medium.com/@hugh_Program_learning_diary_Js/前端基礎-css-盒模型-box-model-1b977df8d3d0?source=---------18------------------) by 第三屆 hugh