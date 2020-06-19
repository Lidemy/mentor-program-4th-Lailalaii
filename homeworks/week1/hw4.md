## 跟你朋友介紹 Git

> 因為你的人實在是太好，時不時就會有朋友跑來找你來幫忙。
>
> 這次來的是一個叫做菜哥的朋友，會叫做菜哥是因為家裡賣菜，跟你認識的其他人同名的話純屬巧合。
>
> 菜哥：「就是啊，我最近有一個煩惱。因為我的笑話太多了，所以我目前都用文字檔記錄在電腦裡，可是變得越來越多之後很難紀錄，而且我的笑話是會演進的。會有版本一、版本二甚至到版本十，這樣我就要建立好多個不同的檔案，弄得我頭很痛，聽說你們工程師都會用一種程式叫做 Git 來做版本控制，可以教我一下嗎？」
>
> 『好吧，我試試看』
>
> 菜哥：「謝啦，話說你來參加這個計畫學程式真的選對了欸，之後就不會有貧血的困擾了」
>
> 『為什麼』
>
> 「因為你會寫程式」
>
> 『...』
>
> 「喔...原來是血乘四的部分啊（拍手）」
>
> 就是這樣，在一陣尬聊之中你答應了菜哥的要求，要教他怎麼使用 Git 來管理他的笑話。
>
> 因此，你必須教他 Git 的基本概念以及基礎的使用，例如說 add 跟 commit，若是還有時間的話可以連 push 或是 pull 都講，菜哥能不能順利成為電視笑話冠軍，就靠你了！

### Why?

剛剛你有提到因為你的笑話會不斷的演進，所以會一直有新版本的產生，為了不要直接覆蓋，所以用複製檔案來建立新的版本，可是這樣檔案就越來越多，到最後都不知道哪個裡面有什麼，非常的困擾。
攻城屍們也跟你有一模一樣的困擾，尤其他們的 code (也就是你的笑話) 資料量更多更複雜，有時候趕時間甚至需要一群人同時一起寫一個笑話，常常不知道誰改了什麼、或是到底要用哪個檔案開始改，改到後來可能你修前面的笑話、我改後面的笑話，結合起來味道卻變了，一點都不好笑，所以需要一個更聰明的辦法來做統一管理，並且讓大家清楚看到每個人做了什麼，於是乎 Git 就誕生了！

### What?

那麼 Git 跟你之前直接在電腦複製、建立新版本的方法有什麼不同呢？ Git 基本上就是其中一種**做版本控制的程式**，統一管理不同版本發生的事情，而且功能更加強大。在 Git 的世界裡，對於不同版本的笑話儲存是非常嚴謹的，這裡分別介紹幾個強大的功能：

1. 不斷進化的笑話

    - 不再出現"超級無敵最終版"這種讓人尷尬的版本名稱了
      幫版本命名的你我都知道，永遠不知道什麼時候是最終版，誰知道明天會不會有"真的超級無敵最終版"呢？而在 Git 裡，他會幫你用像亂數的標題當作不同版本資料夾的名稱，好處是避免了版本命名。
    - 不用每個檔案都加入版本控制
      菜哥你在寫笑話的時候，一定有一些檔案是不管哪個版本都不會改變、也不想輕易被更動的吧，例如"笑話發想指南"， Git 有提供特別的服務幫你特別保管這樣的檔案，叫做 `.gitignore`，我們之後會有更詳細的介紹。
    - 再也回不去了！？
      菜哥你一定也發生過寫了一個新版笑話，很興奮地發表之後，卻發現新版的梗觀眾反應意外不熱烈，於是想回去之前的版本，卻常常找不到到底要回到哪裡，也忘記不同版本的差別是什麼，花很多時間在檔案堆裡尋找。使用 Git 之後就可以一目了然各個版本之間的差異，也可以隨時回去某個指定版本繼續開發，節省之前浪費的時間。 

2. 可以蠟燭多頭燒

   - 修改前笑話 bug 同時加入新梗

     我猜之前你可能發生過同時要解決兩個東西的事情，前一個笑話的 bug 還沒修好、腦袋又有一個新笑話要馬上寫下來，攻城屍們也跟你一樣，所以才有了 branch 分支的誕生。大概念就是我們有一個主要的笑話版本 (master) ，不管要開發新梗還是修 bug 我們都可以用產生分支的方式處理，最後再把各自的分支合併 (merge) 到主線即可。
     另外菜哥你應該也想到了，當你的笑話事業越做越成功，一人團隊最後可能會變成公司規模的笑話團隊。人一多，笑話的版本控制就更困難了，可是有了 branch 之後，再多人你都不用怕，明日笑話顧問之星就是你！


### Git 基本使用

*我知道你現在一定迫不及待想要學會這個技能了，還記得你之前陪 h0w 哥來找我學 command line 嗎？現在我們一樣要打開 git bash 環境，好好跟靛瑙談一場 git 戀愛 <3* 

- ##### 一壘 - 在 local 端 (電腦端) 準備好要版本控制的笑話檔案和資料夾 (directory)

  1. `mkdir <directory name>` - 建立一個資料夾
  2. `cd <directory name>` - 進入這個資料夾
  3. `touch <所需檔案，例如:code.js/ note.txt/ test/ .gitignore>` - 在這裡建立好你所需的檔案
  4. `vim .gitignore` - 把要忽略的檔案名稱寫進 .gitignore 這個檔案裡，例如：你的笑話發想指南

- ##### 二壘 - 把整個資料夾的東西加入版本控制

  下圖說明的是一開始我們在 local 建好的資料夾叫做 directory ，要讓它進到 repository 才能夠做版本控制。
  第一階段：可以想成把你電腦要歸檔的檔案們先 add 到空白沒名字的資料夾，也就是暫存，準備版本控制
  第二階段：確認這一階段要版本控制的東西，commit 後幫這個版本命名

  ![ ](https://i0.wp.com/lailalaii.files.wordpress.com/2020/06/picture.png?ssl=1)

  1. `git init` - 將某資料夾做 git 版本控制 ，就是告訴電腦這個資料夾我等等要做版本控制
  2. `git add . ` - 把所有檔案放入暫存
  3. `git commit -am <commit name>` - 所有放入儲存庫 (repository) 並幫 commit 命名，commit name 可以是任何能幫助你回想這個版本是什麼的東西，例如：`git commit -am "blood-times-four"`加了血成四的新梗 ( ps: *Repository 的縮寫是 repo*，後面會直接叫 repo)

- ##### 三壘 - 和 remote 端 (網路上的 Github) 同步

  現在我們在綠色階段，要進入橘色階段，也就是和遠端同步，就是把我們的 localrepo 推 (push) 到 remote repo的感覺。

  ![iT 邦幫忙::一起幫忙解決難題，拯救IT 人的一天](C:\Users\柔均\Desktop\q5Iwfk0.png)

  1. 在 Github 端建好一個空 repo （記得要是空的！名稱不一定要和 local 端一樣）
     小簡介：Github 其實就是一個可以免費放 git 程式碼的平台之一，競爭對手還有 GitLab & Bitbucket

  2. `git remote add origin "https://github.com/<github-user-name>/<new-repo-name>.git"` （加入遠端的 repository 代號叫做 origin ）

  3. `git push -u origin master`（ push 把檔案推上去， -u 代表 set upstream，也就是把東西推到 master 的 branch，可以省略，另外 master 也可以改成任何一個你想推上去的 branch）

  4. 同理當之後我們想要從 remote 端下載任何一個檔案的話就是 `git pull origin "branch name"` 

     

### Working flow - 笑話團隊之多人協作

*好得，現在你基本上已經知道怎麼一步步用 git 來管理你的笑話們了（也就是從最左邊 working directory 到最右邊 remote repo 的部分），再來我們要學習的是變成笑話團隊之後，我們如何多人一起在同一個檔案底下開發新的梗，還有修改之前不好笑的笑話 bug。*

下面這張圖是一個完整的共同開發流程，假設一開始有一個最主要的專案放在 remote 端的 Github 上面，不管你要加新的功能或是 debug ，相同的概念都是我們要先切出一個 branch (分支)，改完之後再 merge 回 master 上，保持我們專案的穩定性。

![ ](https://i1.wp.com/lailalaii.files.wordpress.com/2020/06/picture-5.png?ssl=1)

1. 把 remote 端的 repo pull/ fork 下來 （不是自己的就要先 fork）
   `git pull origin master`
2. 在 local 端開新的 branch ，好了之後 commit 成新的版本
   - `git remote add origin "https://github.com/<github-user-name>/<new-repo-name>.git"` 
     （加入遠端的 repository 代號叫做 origin ）
   - `git branch <branch-name>`
   - 用之前學到的 command line 開始修改檔案
   - `git commit -am, "new-commit-name"`
3. 修改完之後 push 到 remote 端
   `git push origin "branch-name"`
4. 在 Github 上面創一個 pull request 之後讓大家一起 code review ，沒問題之後把 branch merge 回 master
   這裡如果有 conflict (衝突) 的話，就要手動處理
5. 刪除 remote 端的 branch
6. 把 remote 端的 master pull 到 local 端
   `git pull origin master`
7. 刪除 local 端的 branch
   `git branch -d <branch-name>`



### Git 相關指令整理

| syntax                                             | function                                                     |
| -------------------------------------------------- | ------------------------------------------------------------ |
| git init                                           | 讓該資料夾等等能做版本控制                                   |
| git status                                         | 查看目前 commit 的狀態                                       |
| git add <file><br />git add . ( . 代表全部)        | 把檔案放入暫存區<br />一鍵把所有檔案放入暫存區               |
| git rm --cached <file>                             | 把檔案移回 untrack (紅色狀態)                                |
| git log<br />git log --oneline                     | 看像亂數的版本號、看歷史紀錄<br />簡化的 review              |
| git checkout <版本號><br />git checkout master     | 坐時光機回到某個時間點<br />回到現在                         |
| touch .gitignore<br />vim .gitignore               | 建立一個檔案，把要忽略的檔名放進 .gitignore 裡面<br />！這個檔案本身也要加入版本控制！ |
| git commit -am <commit>                            | ( `git add` + `git commit -m` )                              |
| git diff                                           | 看 commit 前做了什麼改變                                     |
| git branch <name>                                  | 建立新的 branch                                              |
| git branch -v                                      | 看自己在哪個 branch                                          |
| git checkout <name>                                | 1. 切換到不同 branch<br />2. 直接把其他 branch 抓下來 (我的版本不行?) |
| git branch -d <name>                               | 刪除 branch ( d = 刪除)                                      |
| git branch -m <name>                               | 改 branch 名稱                                               |
| git merge <branch-a>                               | 把 branch-a 合併到該位置<br />如果是 branch-a 合併到 master ，記得先移到 master 再動作 |
| git push origin <branch name>                      | 把某個 branch push 到 remote                                 |
| git pull origin <branch name>                      |                                                              |
| git reset HEAD^ --hard<br />git reset HEAD^ --soft | 直接刪除最後一個 commit，都不要了<br />打開上一個 commit 修改 |

### 我自問也自答

---

Q：Local 和 Github 要連線的 repository 名稱要一樣嗎？
A：Not neccesory. 只要 copy Github 上的連結， Command 會自動把現在的 repository 上傳到該位置 

Q：What if I revise in local branch-a1 but I want to push on branch-a2 on remote ?
A：Impossible! You can't do that. You can only decide the branch name you want to push from local. Git will match the right branch automatically.

Q：What if I revise in local branch-a1 but there's no branch-a1 in remote part?
A：It's fine. It will create a branch-a1 in remote side automatically.

Q：在 local 端修改檔案 push 之前為什麼不用先 add ？
A：因為 `git commit -am  ` 其實就是結合`add & commit`，特別要注意的是，如果你的修改是新建一個檔案的話，必須手動 `commit add` 才能 `commit -am`，理由是 `commit -am`只會 add 已經有的檔案。