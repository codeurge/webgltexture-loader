"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _globalRegistry = require("./globalRegistry");

var _globalRegistry2 = _interopRequireDefault(_globalRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoaderResolver = function () {
  function LoaderResolver(gl) {
    var registry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _globalRegistry2.default;

    _classCallCheck(this, LoaderResolver);

    this.loaders = registry.get().map(function (L) {
      return new L(gl);
    });
  }

  _createClass(LoaderResolver, [{
    key: "dispose",
    value: function dispose() {
      this.loaders.forEach(function (l) {
        return l.dispose();
      });
    }
  }, {
    key: "resolve",
    value: function resolve(input) {
      return this.loaders.find(function (loader) {
        return loader.canLoad(input);
      });
    }
  }]);

  return LoaderResolver;
}();

exports.default = LoaderResolver;
//# sourceMappingURL=LoaderResolver.js.map