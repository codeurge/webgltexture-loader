"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webgltextureLoader = require("webgltexture-loader");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasTextureLoader = function (_WebGLTextureLoaderSy) {
  _inherits(CanvasTextureLoader, _WebGLTextureLoaderSy);

  function CanvasTextureLoader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CanvasTextureLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CanvasTextureLoader.__proto__ || Object.getPrototypeOf(CanvasTextureLoader)).call.apply(_ref, [this].concat(args))), _this), _this.disposes = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CanvasTextureLoader, [{
    key: "canLoad",
    value: function canLoad(input) {
      return input instanceof HTMLCanvasElement;
    }
  }, {
    key: "inputHash",
    value: function inputHash(input) {
      return input;
    }
  }, {
    key: "getNoCache",
    value: function getNoCache(input) {
      var gl = this.gl;
      var width = input.width,
          height = input.height;

      var texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, input);
      return { texture: texture, width: width, height: height };
    }
  }, {
    key: "update",
    value: function update(input) {
      var gl = this.gl;

      var _get = this.get(input),
          texture = _get.texture;

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, input);
    }
  }]);

  return CanvasTextureLoader;
}(_webgltextureLoader.WebGLTextureLoaderSyncHashCache);

_webgltextureLoader.globalRegistry.add(CanvasTextureLoader);

exports.default = CanvasTextureLoader;
//# sourceMappingURL=CanvasTextureLoader.js.map