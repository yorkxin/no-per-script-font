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

    // FIXME: API changed in current trunk. Use getFont instead of getFontName when broken.
    chrome.experimental.fontSettings.getFontName(details, function(responseDetails) {
      details["fontName"] = responseDetails.fontName;
      callback(details);
    });
  };

  this.setFontName = function(family, script, fontName, callback) {
    var details = {
      "genericFamily": family,
      "fontName": fontName
    };

    if (script !== null) {
      details["script"] = script;
    }

    // FIXME: API changed in current trunk. Use setFont instead of setFontName when broken.
    chrome.experimental.fontSettings.setFontName(details, function() {
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
      // set fontName to "" is to tell Chrome to use system-wide fallback
      if (details.fontName !== "") {
        FontSettings.setFontName(details.genericFamily, details.script, "");
      }
    });
  };
};
