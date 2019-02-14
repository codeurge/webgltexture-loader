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

var ImageSourceTextureLoader = function (_WebGLTextureLoaderAs) {
  _inherits(ImageSourceTextureLoader, _WebGLTextureLoaderAs);

  function ImageSourceTextureLoader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageSourceTextureLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageSourceTextureLoader.__proto__ || Object.getPrototypeOf(ImageSourceTextureLoader)).call.apply(_ref, [this].concat(args))), _this), _this.rngl = _this.gl.getExtension("RN"), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageSourceTextureLoader, [{
    key: "canLoad",
    value: function canLoad(input) {
      return typeof input === "number" || input && (typeof input === "undefined" ? "undefined" : _typeof(input)) === "object" && typeof input.uri === "string";
    }
  }, {
    key: "disposeTexture",
    value: function disposeTexture(texture) {
      this.rngl.unloadTexture(texture);
    }
  }, {
    key: "inputHash",
    value: function inputHash(input) {
      if (typeof input === "number") return input;
      return input.uri;
    }
  }, {
    key: "loadNoCache",
    value: function loadNoCache(image) {
      var promise = this.rngl.loadTexture({ yflip: true, image: image });
      var dispose = function dispose() {
        // FIXME not sure what we can do for now
      };
      return { promise: promise, dispose: dispose };
    }
  }]);

  return ImageSourceTextureLoader;
}(_webgltextureLoader.WebGLTextureLoaderAsyncHashCache);

_webgltextureLoader.globalRegistry.add(ImageSourceTextureLoader);

exports.default = ImageSourceTextureLoader;
//# sourceMappingURL=ImageSourceTextureLoader.js.map