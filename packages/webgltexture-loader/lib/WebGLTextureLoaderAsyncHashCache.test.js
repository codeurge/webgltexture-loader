"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WebGLTextureLoaderAsyncHashCache = require("./WebGLTextureLoaderAsyncHashCache");

var _WebGLTextureLoaderAsyncHashCache2 = _interopRequireDefault(_WebGLTextureLoaderAsyncHashCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

test("WebGLTextureLoaderAsyncHashCache simple usage", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var gl, FakeLoader, loader, res;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          gl = {
            deleteTexture: function deleteTexture() {}
          };

          FakeLoader = function (_WebGLTextureLoaderAs) {
            _inherits(FakeLoader, _WebGLTextureLoaderAs);

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
              key: "loadNoCache",
              value: function loadNoCache(input) {
                return {
                  promise: Promise.resolve({
                    texture: { id: input },
                    width: 2,
                    height: 2
                  }),
                  dispose: function dispose() {}
                };
              }
            }]);

            return FakeLoader;
          }(_WebGLTextureLoaderAsyncHashCache2.default);

          loader = new FakeLoader(gl);
          _context.next = 5;
          return loader.load(42);

        case 5:
          res = _context.sent;

          expect(res).toMatchObject({
            texture: { id: 42 },
            width: 2,
            height: 2
          });
          expect(loader.get(42)).toBe(res);
          // test with another value
          expect(loader.get(43)).toBeUndefined();
          _context.next = 11;
          return loader.load(43);

        case 11:
          res = _context.sent;

          expect(res).toMatchObject({
            texture: { id: 43 },
            width: 2,
            height: 2
          });
          expect(loader.get(43)).toBe(res);
          loader.dispose();

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));
//# sourceMappingURL=WebGLTextureLoaderAsyncHashCache.test.js.map