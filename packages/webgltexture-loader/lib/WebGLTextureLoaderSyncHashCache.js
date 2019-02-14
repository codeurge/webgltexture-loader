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

var WebGLTextureLoaderSyncHashCache = function (_WebGLTextureLoader) {
  _inherits(WebGLTextureLoaderSyncHashCache, _WebGLTextureLoader);

  function WebGLTextureLoaderSyncHashCache() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WebGLTextureLoaderSyncHashCache);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WebGLTextureLoaderSyncHashCache.__proto__ || Object.getPrototypeOf(WebGLTextureLoaderSyncHashCache)).call.apply(_ref, [this].concat(args))), _this), _this.results = new Map(), _this.promises = new Map(), _this._disposed = false, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // return a unique representation of the input (typically a hash, or anything that can be used as ref identifier)

  // An sync load function that does not cache (WebGLTextureLoaderAsyncHashCache do the caching with inputHash)


  _createClass(WebGLTextureLoaderSyncHashCache, [{
    key: "dispose",
    value: function dispose() {
      var _this2 = this;

      var gl = this.gl,
          results = this.results,
          promises = this.promises;

      results.forEach(function (r) {
        _this2.disposeTexture(r.texture);
      });
      results.clear();
      promises.clear();
      this._disposed = true;
    }
  }, {
    key: "disposeTexture",
    value: function disposeTexture(texture) {
      this.gl.deleteTexture(texture);
    }
  }, {
    key: "get",
    value: function get(input) {
      var hash = this.inputHash(input);
      var result = this.results.get(hash);
      if (result) return result;
      var freshResult = this.getNoCache(input);
      this.results.set(hash, freshResult);
      return freshResult;
    }

    // load() implementation is a dumb fallback on get() but still need to save the promise to guarantee idempotent

  }, {
    key: "load",
    value: function load(input) {
      var hash = this.inputHash(input);
      var existing = this.promises.get(hash);
      if (existing) return existing;
      var promise = Promise.resolve(this.get(input));
      this.promises.set(hash, promise);
      return promise;
    }
  }]);

  return WebGLTextureLoaderSyncHashCache;
}(_WebGLTextureLoader3.default);

exports.default = WebGLTextureLoaderSyncHashCache;
//# sourceMappingURL=WebGLTextureLoaderSyncHashCache.js.map