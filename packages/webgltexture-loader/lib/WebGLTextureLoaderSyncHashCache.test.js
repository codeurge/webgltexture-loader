"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WebGLTextureLoaderSyncHashCache = require("./WebGLTextureLoaderSyncHashCache");

var _WebGLTextureLoaderSyncHashCache2 = _interopRequireDefault(_WebGLTextureLoaderSyncHashCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

test("simple usage", function () {
  var gl = {
    deleteTexture: function deleteTexture() {}
  };

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

  var loader = new FakeLoader(gl);
  expect(loader.get(42)).toMatchObject({
    texture: { id: 42 },
    width: 2,
    height: 2
  });
  expect(loader.get(43)).toMatchObject({
    texture: { id: 43 },
    width: 2,
    height: 2
  });
  loader.dispose();
});
//# sourceMappingURL=WebGLTextureLoaderSyncHashCache.test.js.map