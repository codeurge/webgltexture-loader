"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WebGLTextureLoader2 = require("./WebGLTextureLoader");

var _WebGLTextureLoader3 = _interopRequireDefault(_WebGLTextureLoader2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var neverEnding = new Promise(function () {});

/**
 * A cache implementation of WebGLTextureLoader with a input hash function
 */

var WebGLTextureLoaderAsyncHashCache = function (_WebGLTextureLoader) {
  _inherits(WebGLTextureLoaderAsyncHashCache, _WebGLTextureLoader);

  function WebGLTextureLoaderAsyncHashCache() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WebGLTextureLoaderAsyncHashCache);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WebGLTextureLoaderAsyncHashCache.__proto__ || Object.getPrototypeOf(WebGLTextureLoaderAsyncHashCache)).call.apply(_ref, [this].concat(args))), _this), _this.disposes = new Map(), _this.inputs = new Map(), _this.promises = new Map(), _this.results = new Map(), _this._disposed = false, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // An async load function that does not cache (WebGLTextureLoaderAsyncHashCache do the caching with inputHash). it also should return a dispose function to cancel a pending load


  _createClass(WebGLTextureLoaderAsyncHashCache, [{
    key: "dispose",
    value: function dispose() {
      var _this2 = this;

      var gl = this.gl,
          promises = this.promises,
          results = this.results,
          inputs = this.inputs,
          disposes = this.disposes;

      disposes.forEach(function (d) {
        return d();
      });
      results.forEach(function (result) {
        _this2.disposeTexture(result.texture);
      });
      promises.clear();
      results.clear();
      inputs.clear();
      disposes.clear();
      this._disposed = true;
    }
  }, {
    key: "disposeTexture",
    value: function disposeTexture(texture) {
      this.gl.deleteTexture(texture);
    }
  }, {
    key: "load",
    value: function load(input) {
      var _this3 = this;

      var hash = this.inputHash(input);
      var maybePromise = this.promises.get(hash);
      if (maybePromise) return maybePromise;
      var d = this.loadNoCache(input);
      this.disposes.set(hash, d.dispose);
      var promise = d.promise.then(function (result) {
        if (!_this3.promises.has(hash)) {
          return neverEnding;
        }
        _this3.disposes.delete(hash);
        _this3.results.set(hash, result);
        return result;
      });
      this.promises.set(hash, promise);
      return promise;
    }
  }, {
    key: "get",
    value: function get(input) {
      return this.results.get(this.inputHash(input));
    }
  }, {
    key: "cancelLoad",
    value: function cancelLoad(input) {
      var hash = this.inputHash(input);
      this.promises.delete(hash);
      var dispose = this.disposes.get(hash);
      if (dispose) {
        dispose();
        this.disposes.delete(hash);
      }
    }
  }]);

  return WebGLTextureLoaderAsyncHashCache;
}(_WebGLTextureLoader3.default);

exports.default = WebGLTextureLoaderAsyncHashCache;
//# sourceMappingURL=WebGLTextureLoaderAsyncHashCache.js.map