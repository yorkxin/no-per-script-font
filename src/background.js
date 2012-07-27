var FontSettings = new (function() {

  // TODO: make it an option in options.html
  this.getFontFamiliesToApply = function() {
    return ["standard", "serif", "sansserif", "fixed"];
  };

  // TODO: make it an option in options.html
  this.getScriptsToApply = function() {
    return ["Hant", "Hans"];
  };

  this.getFontName = function(family, script, callback) {
    var details = {
      "genericFamily": family
    };

    if (script !== null) {
      details["script"] = script;
    }

    chrome.fontSettings.getFont(details, function(responseDetails) {
      details["fontId"] = responseDetails.fontId;
      callback(details);
    });
  };

  this.setFontName = function(family, script, fontName, callback) {
    var details = {
      "genericFamily": family,
      "fontId": fontName
    };

    if (script !== null) {
      details["script"] = script;
    }

    chrome.fontSettings.setFont(details, function() {
      if (callback !== undefined) {
        callback(details);
      }
    });
  };
})();

var scripts = FontSettings.getScriptsToApply();
var families = FontSettings.getFontFamiliesToApply();

var _i, _j; // index registers

for (_i=0; _i < scripts.length; _i++) {
  var script = scripts[_i];

  for (_j=0; _j < families.length; _j++) {
    var family = families[_j];

    FontSettings.getFontName(family, script, function(details) {
      // set fontId to "" is to tell Chrome to use system-wide fallback
      if (details.fontId !== "") {
        FontSettings.setFontName(details.genericFamily, details.script, "");
      }
    });
  };
};