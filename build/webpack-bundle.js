! function(n) {
    // Module Loader
    function t(e) {
        if (r[e]) return r[e].exports;
        var o = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var r = {};
    t.m = n, t.c = r, t.d = function(n, r, e) {
        t.o(n, r) || Object.defineProperty(n, r, {
            configurable: !1,
            enumerable: !0,
            get: e
        })
    }, t.n = function(n) {
        var r = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return t.d(r, "a", r), r
    }, t.o = function(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, t.p = "", t(t.s = 0)
}([function(n, exports, require) {
    // main.js
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });

    var math = require(1);
    require(2);

    console.info("mathLib.PI: " + math.PI);

    var result = math.multiply(5, 4);
    console.info("result: " + result)
}, function(n, exports, require) {
    // math.js
    "use strict";

    function add(x, y) {
        return x + y;
    }

    function multiply(x, y) {
        var result = 0;
        for (var i = 0; i < y; i++)
            ;
        {
            result = add(result, x);
        }
        return result;
    }

    var PI = 3.14159
    require.d(exports, "PI", function() {
        return PI
    });
    
    exports.multiply = multiply;
}, function(n, exports, require) {
    // map.js
    "use strict"
}]);