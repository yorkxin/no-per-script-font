# No Per-Script Font! (不要給我亂改字體！)

自從 Chrome 18 以來，中文字的字體會根據語言來決定──具體來說，是根據該 element 的 `lang` 屬性。例如，`zh-tw` （台灣正體）、 `zh-cn` （大陸簡體）會用不同的字體，因為書寫形式不同。

但對某些人而言，還是比較想要字體由作業系統來決定，這樣也可以避免像 Facebook （`lang="zh"` 被視為簡體中文）或維基百科（`lang` 屬性會動態改變）那樣會出現不舒服的字體。這個 Extension 就是來幫你處理這件事。

## 需求

* 你要升級到 Chrome 19，因為這個 extension 要使用 `chrome.experimental.fontSettings` 這個還在實驗中的 API，目前只有 19+ 才有。
  * 更精確地說，這個 Extension **只能在 Chrome 19 使用**，因為新版的 Chrome 20 已經改 API 了，也就是說，這個 Extension 不能直接在 20 及以後的版本運作。（有需要請參考 `cr20` 這條 branch 。）
* 你要在 `chrome://flags` 打開「實驗性擴充功能 API」。

## 使用方式

1. 在 Downloads 頁面下載 `no-per-script-font.crx` 。
2. Chrome 應該會提示你要不要安裝這個 Exntesion。
  * 沒有的話，把那檔案找出來，並按兩下來安裝。
3. 安裝完成後，這個 Extension 會強制把繁體中文 (`Hant`) 和簡體中文 (`Hans`) 的所有 Generic Font Family 的字體名稱設定為空白，這樣子會關閉依書寫文字設定字體的功能。
4. 已經打開的分頁不會更新，新打開的分頁會套用新的字體設定。

要解除安裝或是關掉修改效果的話，只要去 Extensions 頁面按一下「解除安裝」或「停用」就行了，由這個 Extension 所做的修改都會還原。

## 軟體授權 (MIT License)

Copyright (c) 2012 Yu-Cheng Chuang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

