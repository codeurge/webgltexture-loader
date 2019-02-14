"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webgltextureLoader = require("webgltexture-loader");

var _drawNDArrayTexture = require("./drawNDArrayTexture");

var _drawNDArrayTexture2 = _interopRequireDefault(_drawNDArrayTexture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NDArrayTextureLoader = function (_WebGLTextureLoaderSy) {
  _inherits(NDArrayTextureLoader, _WebGLTextureLoaderSy);

  function NDArrayTextureLoader(gl) {
    _classCallCheck(this, NDArrayTextureLoader);

    var _this = _possibleConstructorReturn(this, (NDArrayTextureLoader.__proto__ || Object.getPrototypeOf(NDArrayTextureLoader)).call(this, gl));

    _this.floatSupported = gl.getExtension("OES_texture_float") && gl.getExtension("OES_texture_float_linear");
    return _this;
  }

  _createClass(NDArrayTextureLoader, [{
    key: "canLoad",
    value: function canLoad(obj) {
      return obj.shape && obj.data && obj.stride;
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

      var texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);

      var _input$shape = _slicedToArray(input.shape, 2),
          width = _input$shape[0],
          height = _input$shape[1];

      (0, _drawNDArrayTexture2.default)(gl, texture, input, this.floatSupported);
      return { texture: texture, width: width, height: height };
    }
  }, {
    key: "update",
    value: function update(input) {
      // For now we assume the NDArray always change & need a redraw but we might try to only update if changes later
      var gl = this.gl;

      var _get = this.get(input),
          texture = _get.texture;

      gl.bindTexture(gl.TEXTURE_2D, texture);
      (0, _drawNDArrayTexture2.default)(gl, texture, input, this.floatSupported);
    }
  }]);

  return NDArrayTextureLoader;
}(_webgltextureLoader.WebGLTextureLoaderSyncHashCache);

_webgltextureLoader.globalRegistry.add(NDArrayTextureLoader);

exports.default = NDArrayTextureLoader;
//# sourceMappingURL=NDArrayTextureLoader.js.map