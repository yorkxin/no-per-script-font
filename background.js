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
      if (callback !== undefined) {
        callback(responseDetails.fontName);
      }
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
        callback();
      }
    });
  };

  this.getGlobalFontName = function(family, callback) {
    this.getFontName(family, null, callback);
  };

  this.getFontNamesForScriptAndGlobal = function(family, script, callback) {
    this.getGlobalFontName(family, function(globalFontName) {
      // XXX: should use function binding, but don't know how to use it yet.
      FontSettings.getFontName(family, script, function(scriptFontName) {
        var scriptDetails = {
          name: script,
          fontName: scriptFontName
        };

        var globalDetails = {
          fontName: globalFontName
        };

        callback(family, scriptDetails, globalDetails);
      });
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

    FontSettings.getFontNamesForScriptAndGlobal(family, script, function(family, scriptDetails, globalDetails) {
      if (globalDetails.fontName !== scriptDetails.fontName) {
        FontSettings.setFontName(family, scriptDetails.name, globalDetails.fontName);
      }
    });
  };
};
