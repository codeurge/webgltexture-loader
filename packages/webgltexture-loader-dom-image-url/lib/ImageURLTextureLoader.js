"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webgltextureLoader = require("webgltexture-loader");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function loadImage(src, success, failure) {
  var img = new window.Image();
  if (src.slice(0, 5) !== "data:") {
    img.crossOrigin = true;
  }
  img.onload = function () {
    if (img) {
      success(img);
    }
    img = null;
  };
  img.onabort = img.onerror = failure;
  img.src = src;
  return function () {
    if (img) {
      img.onload = null;
      img.onerror = null;
      img.onabort = null;
      img.src = "";
      img = null;
    }
  };
}

var ImageURLTextureLoader = function (_WebGLTextureLoaderAs) {
  _inherits(ImageURLTextureLoader, _WebGLTextureLoaderAs);

  function ImageURLTextureLoader() {
    _classCallCheck(this, ImageURLTextureLoader);

    return _possibleConstructorReturn(this, (ImageURLTextureLoader.__proto__ || Object.getPrototypeOf(ImageURLTextureLoader)).apply(this, arguments));
  }

  _createClass(ImageURLTextureLoader, [{
    key: "canLoad",
    value: function canLoad(input) {
      return typeof input === "string";
    }
  }, {
    key: "inputHash",
    value: function inputHash(input) {
      return input;
    }
  }, {
    key: "loadNoCache",
    value: function loadNoCache(src) {
      var gl = this.gl;

      var _dispose = void 0;
      var promise = new Promise(function (success, failure) {
        return _dispose = loadImage(src, success, failure);
      }).then(function (img) {
        var width = img.width,
            height = img.height;

        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        return { texture: texture, width: width, height: height };
      });
      return { promise: promise, dispose: function dispose() {
          return _dispose();
        } };
    }
  }]);

  return ImageURLTextureLoader;
}(_webgltextureLoader.WebGLTextureLoaderAsyncHashCache);

_webgltextureLoader.globalRegistry.add(ImageURLTextureLoader);

exports.default = ImageURLTextureLoader;
//# sourceMappingURL=ImageURLTextureLoader.js.map