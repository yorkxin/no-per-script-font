# No Per-Script Font!

As of Chrome 18, Chinese font are determined by language -- specifically, according to the `lang` attribute of the element. For example, `zh-cn`, `zh-tw` will use different fonts because they're different script.

But for some people, like me, would prefer to have the OS determine font fallback, to avoid wrong font or broken font on sites like Facebook (`lang="zh"` means Simplified Chinese) or Wikipedia Chinese (`lang` tag changes dynamically). This extension helps you deal with this issue.

## Requirements

* You need Chrome 19, because this extension depends on `chrome.experimental.fontSettings` experimental API, which is currently only available on Chrome 19 and later.
  * Specifically, this extension **only works for Chrome 19** because Chrome 20 already has a new and different API. This extension does not work with Chrome >= 20. (Please refer to `cr20` branch if you need a solution.)
* You have to turn on "Experimental Extension APIs" in `chrome://flags`.

## Usage

1. Download `no-per-script-font.crx` from the downloads page.
2. Chrome should prompt you to install the extension.
  * If not, find it in your file browser, and double-click on it.
3. This extension will force the font names of all the generic font families in Traditional Chinese (`Hant`) and Simplified Chinese (`Hans`) to use a blank font name (`""`), which will turn off per-script font setting.

To uninstall or turn off the effect, simply click "Uninstall" or "Disable" in the Extensions page, and everything altered by this extension will be restored.

## License (The MIT License)

Copyright (c) 2012 Yu-Cheng Chuang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

