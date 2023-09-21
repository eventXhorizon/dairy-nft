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
parcelRequire.register("5B02S", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $41307177ad52b8cb$export$6503ec6e8aabbaf; }, function (v) { return $41307177ad52b8cb$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $41307177ad52b8cb$export$f7ad0328861e2f03; }, function (v) { return $41307177ad52b8cb$export$f7ad0328861e2f03 = v; });
var $41307177ad52b8cb$export$6503ec6e8aabbaf;
var $41307177ad52b8cb$export$f7ad0328861e2f03;
"use strict";
var $41307177ad52b8cb$var$mapping = {};
function $41307177ad52b8cb$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$41307177ad52b8cb$var$mapping[keys[i]] = pairs[keys[i]];
}
function $41307177ad52b8cb$var$resolve(id) {
    var resolved = $41307177ad52b8cb$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$41307177ad52b8cb$export$6503ec6e8aabbaf = $41307177ad52b8cb$var$register;
$41307177ad52b8cb$export$f7ad0328861e2f03 = $41307177ad52b8cb$var$resolve;

});

var $2773311ea748c0f1$exports = {};

(parcelRequire("5B02S")).register(JSON.parse('{"j0eLm":"index.98a8f9b9.js","gps7d":"ledger-icon.345bc0a2.png","ip52B":"my-near-wallet-icon.63ddf514.png","67eNB":"index.4dd60413.css"}'));


//# sourceMappingURL=index.2ced75e3.js.map
