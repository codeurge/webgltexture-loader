"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LoaderResolver = require("./LoaderResolver");

var _LoaderResolver2 = _interopRequireDefault(_LoaderResolver);

var _LoadersRegistry = require("./LoadersRegistry");

var _LoadersRegistry2 = _interopRequireDefault(_LoadersRegistry);

var _WebGLTextureLoaderSyncHashCache = require("./WebGLTextureLoaderSyncHashCache");

var _WebGLTextureLoaderSyncHashCache2 = _interopRequireDefault(_WebGLTextureLoaderSyncHashCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

test("an empty LoaderResolver resolves nothing", function () {
  var gl = {};
  var resolver = new _LoaderResolver2.default(gl);
  expect(resolver.resolve(null)).toBeUndefined();
  expect(resolver.resolve(42)).toBeUndefined();
  expect(resolver.resolve("foo")).toBeUndefined();
  resolver.dispose();
});

test("LoaderResolver works with one loader", function () {
  var gl = {
    deleteTexture: function deleteTexture() {}
  };
  var registry = new _LoadersRegistry2.default();

  var FakeLoader = function (_WebGLTextureLoaderSy) {
    _inherits(FakeLoader, _WebGLTextureLoaderSy);

    function FakeLoader() {
      _classCallCheck(this, FakeLoader);

      return _possibleConstructorReturn(this, (FakeLoader.__proto__ || Object.getPrototypeOf(FakeLoader)).apply(this, arguments));
    }

    _createClass(FakeLoader, [{
      key: "canLoad",
      value: function canLoad(input) {
        return typeof input === "number";
      }
    }, {
      key: "inputHash",
      value: function inputHash(input) {
        return input;
      }
    }, {
      key: "getNoCache",
      value: function getNoCache(input) {
        return { texture: { id: input }, width: 2, height: 2 };
      }
    }]);

    return FakeLoader;
  }(_WebGLTextureLoaderSyncHashCache2.default);

  registry.add(FakeLoader);
  var resolver = new _LoaderResolver2.default(gl, registry);
  expect(resolver.resolve(null)).toBeUndefined();
  expect(resolver.resolve("foo")).toBeUndefined();
  var loader = resolver.resolve(42);
  expect(loader).toBeDefined();
  expect(loader).toBeInstanceOf(FakeLoader);
  resolver.dispose();
});
//# sourceMappingURL=LoaderResolver.test.js.map