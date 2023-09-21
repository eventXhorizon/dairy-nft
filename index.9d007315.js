(function () {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiref931"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiref931"] = parcelRequire;
}
parcelRequire.register("4McKx", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $37a588eae8cb4ba1$export$6503ec6e8aabbaf; }, function (v) { return $37a588eae8cb4ba1$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $37a588eae8cb4ba1$export$f7ad0328861e2f03; }, function (v) { return $37a588eae8cb4ba1$export$f7ad0328861e2f03 = v; });
var $37a588eae8cb4ba1$export$6503ec6e8aabbaf;
var $37a588eae8cb4ba1$export$f7ad0328861e2f03;
"use strict";
var $37a588eae8cb4ba1$var$mapping = {};
function $37a588eae8cb4ba1$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$37a588eae8cb4ba1$var$mapping[keys[i]] = pairs[keys[i]];
}
function $37a588eae8cb4ba1$var$resolve(id) {
    var resolved = $37a588eae8cb4ba1$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$37a588eae8cb4ba1$export$6503ec6e8aabbaf = $37a588eae8cb4ba1$var$register;
$37a588eae8cb4ba1$export$f7ad0328861e2f03 = $37a588eae8cb4ba1$var$resolve;

});

var $743855e3667109d3$exports = {};

(parcelRequire("4McKx")).register(JSON.parse('{"15BGq":"index.5b0f137f.js","fKef2":"ledger-icon.345bc0a2.png","l6Lrf":"my-near-wallet-icon.63ddf514.png","67eNB":"index.4dd60413.css"}'));

})();
//# sourceMappingURL=index.9d007315.js.map
