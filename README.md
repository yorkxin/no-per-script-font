# No Per-Script Font! (不要給我亂改字體！)

自從 Chrome 18 、 Safari 6 以來，中文字的字體會根據語言來決定──具體來說，是根據該 element 的 `lang` 屬性。例如，`zh-tw` （台灣正體）、 `zh-cn` （大陸簡體）會用不同的字體，因為書寫形式不同。

但對某些人而言，還是比較想要字體由作業系統來決定，這樣也可以避免像 Facebook （`lang="zh"` 被視為簡體中文）或維基百科（`lang` 屬性會動態改變）那樣會出現不舒服的字體。這個 Extension 就是來幫你處理這件事。

## 需求

### Google Chrome

* Chrome 19+
* Chrome 19 、 20 、 21 還要在 `chrome://flags` 打開「實驗性擴充功能 API」，因為這個 extension 要使用 [`chrome.experimental.fontSettings`](http://code.google.com/chrome/extensions/experimental.fontSettings.html) 這個還在實驗中的 API。
  * Chrome 22+ 不需要打開這個選項

### Apple Safari

* Safari 6.0+

## 使用方式

### Google Chrome 22+

請直接去 Chrome Web Store 安裝 [不要給我亂改字體！](https://chrome.google.com/webstore/detail/lndmkajeoopejggihiomoaepinlhblmm)

要解除安裝或是關掉修改效果的話，只要去 Extensions 頁面按一下「解除安裝」或「停用」就行了，由這個 Extension 所做的修改都會還原。

### Google Chrome 21 以下

1. 在 Downloads 頁面下載 `no-per-script-font-xxx.crx` 。
- 打開 Chrome 的「擴充程式」管理介面：按一下功能表的「視窗」→「擴充程式」，或是輸入網址 `chrome://chrome/extensions/`。
- 找到 `no-per-script-font-xxx.crx` 檔案，並把檔案拖曳進上一步驟打開的「擴充程式」管理介面，這樣子才能安裝。
- 安裝完成後，這個 Extension 會強制把繁體中文 (`Hant`) 和簡體中文 (`Hans`) 的所有 Generic Font Family 的字體名稱設定為空白，這樣子會關閉依書寫文字設定字體的功能。
- 已經打開的分頁不會更新，新打開的分頁會套用新的字體設定。

要解除安裝或是關掉修改效果的話，只要去 Extensions 頁面按一下「解除安裝」或「停用」就行了，由這個 Extension 所做的修改都會還原。

### Apple Safari

- 在 Downloads 頁面下載 `no-per-script-font-safari-xxx.safariextz` ，會提示安裝。

這個 Extension 會把 `sans-serif` 字體設為 `Helvetica` 、 把 `serif` 設為 `Times` ，藉此把字體的決定權交還給 OS X 。參考：[Safari 6 字體修正方式](https://gist.github.com/2925009)。

這種方法不太好，但的確可以讓字體不由 Safari 決定。要是 Safari 開放了設定 Font Face 的 extension API ，就會準備改寫為跟現在 Chrome 一樣的方式。

## 軟體授權 (MIT License)

Copyright (c) 2012 Yu-Cheng Chuang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

