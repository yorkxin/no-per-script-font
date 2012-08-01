(function(chrome) {
  "use strict";

  var FontSettings = {

    // TODO: make it an option in options.html
    getFontFamiliesToApply: function() {
      return ["standard", "serif", "sansserif", "fixed"];
    },

    // TODO: make it an option in options.html
    getScriptsToApply: function() {
      return ["Hant", "Hans"];
    },

    getFont: function(family, script, callback) {
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
    },

    setFont: function(family, script, fontName, callback) {
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
    }
  };

  // Save families into a variable to avoid too many
  // invocations of getFontFamiliesToApply() function.
  var families = FontSettings.getFontFamiliesToApply();

  FontSettings.getScriptsToApply().forEach(function(script) {
    families.forEach(function(family) {
      FontSettings.getFont(family, script, function(details) {
        // set fontId to "" is to tell Chrome to use system-wide fallback
        if (details.fontId !== "") {
          FontSettings.setFont(details.genericFamily, details.script, "");
        }
      });
    });
  });
})(chrome);
