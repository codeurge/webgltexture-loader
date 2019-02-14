"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webgltextureLoader = require("webgltexture-loader");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoTextureLoader = function (_WebGLTextureLoaderAs) {
  _inherits(VideoTextureLoader, _WebGLTextureLoaderAs);

  function VideoTextureLoader() {
    _classCallCheck(this, VideoTextureLoader);

    return _possibleConstructorReturn(this, (VideoTextureLoader.__proto__ || Object.getPrototypeOf(VideoTextureLoader)).apply(this, arguments));
  }

  _createClass(VideoTextureLoader, [{
    key: "canLoad",
    value: function canLoad(input) {
      return input instanceof HTMLVideoElement;
    }
  }, {
    key: "inputHash",
    value: function inputHash(input) {
      return input;
    }
  }, {
    key: "loadNoCache",
    value: function loadNoCache(input) {
      var gl = this.gl;
      var width = input.width,
          height = input.height;


      var timeout = void 0;
      var dispose = function dispose() {
        clearTimeout(timeout);
      };

      var promise = new Promise(function (resolve, reject) {
        var checkVideoReady = function checkVideoReady() {
          if (input.videoWidth > 0) {
            var texture = gl.createTexture();
            var _width = input.videoWidth,
                _height = input.videoHeight;

            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, input);
            resolve({
              texture: texture,
              width: _width,
              height: _height
            });
          } else {
            timeout = setTimeout(checkVideoReady, 100);
          }
        };
        checkVideoReady();
      });

      return { dispose: dispose, promise: promise };
    }
  }, {
    key: "update",
    value: function update(input) {
      var gl = this.gl;

      var res = this.get(input);
      if (!res) return;
      gl.bindTexture(gl.TEXTURE_2D, res.texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, input);
    }
  }]);

  return VideoTextureLoader;
}(_webgltextureLoader.WebGLTextureLoaderAsyncHashCache);

_webgltextureLoader.globalRegistry.add(VideoTextureLoader);

exports.default = VideoTextureLoader;
//# sourceMappingURL=VideoTextureLoader.js.map