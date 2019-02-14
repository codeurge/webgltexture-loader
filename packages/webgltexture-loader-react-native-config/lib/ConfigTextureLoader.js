"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webgltextureLoader = require("webgltexture-loader");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfigTextureLoader = function (_WebGLTextureLoaderAs) {
  _inherits(ConfigTextureLoader, _WebGLTextureLoaderAs);

  function ConfigTextureLoader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ConfigTextureLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ConfigTextureLoader.__proto__ || Object.getPrototypeOf(ConfigTextureLoader)).call.apply(_ref, [this].concat(args))), _this), _this.rngl = _this.gl.getExtension("RN"), _temp), _possibleConstructorReturn(_this, _ret);
  } // this loader accept any config object, so we need a low priority to make this a "last loader" fallback. we might later improve the granularity (making this paradigm first citizen in react-native-webgl?)

  _createClass(ConfigTextureLoader, [{
    key: "canLoad",
    value: function canLoad(input) {
      return (typeof input === "undefined" ? "undefined" : _typeof(input)) === "object"; // technically any config object is possible, so we'll make sure to use a low priority
    }
  }, {
    key: "disposeTexture",
    value: function disposeTexture(texture) {
      this.rngl.unloadTexture(texture);
    }
  }, {
    key: "inputHash",
    value: function inputHash(config) {
      // JSON.stringify is a quick way to hash the config object
      return JSON.stringify(config);
    }
  }, {
    key: "loadNoCache",
    value: function loadNoCache(config) {
      var promise = this.rngl.loadTexture(config);
      var dispose = function dispose() {
        // FIXME not sure what we can do for now
      };
      return { promise: promise, dispose: dispose };
    }
  }]);

  return ConfigTextureLoader;
}(_webgltextureLoader.WebGLTextureLoaderAsyncHashCache);

ConfigTextureLoader.priority = -100;


_webgltextureLoader.globalRegistry.add(ConfigTextureLoader);

exports.default = ConfigTextureLoader;
//# sourceMappingURL=ConfigTextureLoader.js.map