# No Per-Script Font!

As of Chrome 18 and Safari 6, fonts are determined by writing scripts -- specifically, according to the `lang` attributes of elements. For example, `zh-cn` and `zh-tw` will be rendered with different fonts because they're different scripts.

In addition, the selected font will be applied on Latin characters, and usually, Latin characters in Chinese fonts are really ugly.

The Chrome Extension turns off per-script font in Traditional Chinese and Simplified Chinese, and have your operating system determine which font to use.

The Safari Extension turns off per-script font in ALL languages, and have OS X determine which font to use.

## Screenshots

Mac OS X:

[![](http://cl.ly/image/0w1S1i2x2W3x/no-per-script-font-osx-en.png)](http://cl.ly/image/0w1S1i2x2W3x)

Windows:

[![](http://cl.ly/image/0d0c1w3v342O/no-per-script-font-win-en.png)](http://cl.ly/image/0d0c1w3v342O)

## Requirements

### Google Chrome

* Chrome 19+
* For Chrome 19, 20 and 21, you have to turn on "Experimental Extension APIs" in `chrome://flags`, because this extension depends on [`chrome.experimental.fontSettings`](http://code.google.com/chrome/extensions/experimental.fontSettings.html) experimental API.
  * For Chrome 22+, there is no need to turn this option on.

### Apple Safari

* Safari 6.0+

## Usage

### Google Chrome 22

Install [No Per-Script Font!](https://chrome.google.com/webstore/detail/lndmkajeoopejggihiomoaepinlhblmm) on Chrome Web Store directly.

To uninstall or turn off the effect, simply click "Uninstall" or "Disable" in the Extensions page, and everything altered by this extension will be restored.

### Google Chrome 21 or below

1. Download `no-per-script-font-xxx.crx` from the downloads page.
- Open "Extensions" page in Chrome: click **Window > Extensions** menu, or enter URL `chrome://chrome/extensions/` in the address bar.
- Locate `no-per-script-font-xxx.crx` in your file manager, and drag-n-drop this file into the "Extensions" page that you opened in the last step.
- This extension will force the font names of all the generic font families in Traditional Chinese (`Hant`) and Simplified Chinese (`Hans`) to use a blank font name (`""`), which will turn off per-script font setting.

To uninstall or turn off the effect, simply click "Uninstall" or "Disable" in the Extensions page, and everything altered by this extension will be restored.

### Apple Safari


- Download [no-per-script-font.safariextz](https://github.com/chitsaou/no-per-script-font/releases/tag/safari-1.1). Double-click to open it, and Safari will prompt you to install the extension.

This extension will assign `Helvetica` and `Times` to general font families `sans-serif` and `serif` respectively, makes OS X determine which font to fallback. See [Safari 6 Default Font Fallback Fix](https://gist.github.com/2925009) (in Chinese) for more details.

Such implementation is tricky, and will be refactored into the same way that the Chrome version does, when Safari provides native Extension API on some day.

## License (The MIT License)

Copyright (c) 2012 Yu-Cheng Chuang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

