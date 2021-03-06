"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ndarray = require("ndarray");

var _ndarray2 = _interopRequireDefault(_ndarray);

var _ndarrayOps = require("ndarray-ops");

var _ndarrayOps2 = _interopRequireDefault(_ndarrayOps);

var _typedarrayPool = require("typedarray-pool");

var _typedarrayPool2 = _interopRequireDefault(_typedarrayPool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (typeof Buffer === "undefined") {
  var _class, _temp;

  global.Buffer = (_temp = _class = function Buffer() {
    _classCallCheck(this, Buffer);
  }, _class.isBuffer = function (b) {
    return b instanceof Buffer;
  }, _temp);
}

// code is partly taken from https://github.com/stackgl/gl-texture2d/blob/master/texture.js

function isPacked(shape, stride) {
  if (shape.length === 3) {
    return stride[2] === 1 && stride[1] === shape[0] * shape[2] && stride[0] === shape[2];
  }
  return stride[0] === 1 && stride[1] === shape[0];
}

function convertFloatToUint8(out, inp) {
  _ndarrayOps2.default.muls(out, inp, 255.0);
}

exports.default = function (gl, texture, array, floatSupported) {
  var dtype = array.dtype;
  var shape = array.shape.slice();
  var maxSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  if (shape[0] < 0 || shape[0] > maxSize || shape[1] < 0 || shape[1] > maxSize) {
    throw new Error("gl-react: Invalid texture size");
  }
  var packed = isPacked(shape, array.stride.slice());
  var type = 0;
  if (dtype === "float32") {
    type = gl.FLOAT;
  } else if (dtype === "float64") {
    type = gl.FLOAT;
    packed = false;
    dtype = "float32";
  } else if (dtype === "uint8") {
    type = gl.UNSIGNED_BYTE;
  } else {
    type = gl.UNSIGNED_BYTE;
    packed = false;
    dtype = "uint8";
  }
  var format = 0;
  if (shape.length === 2) {
    format = gl.LUMINANCE;
    shape = [shape[0], shape[1], 1];
    array = (0, _ndarray2.default)(array.data, shape, [array.stride[0], array.stride[1], 1], array.offset);
  } else if (shape.length === 3) {
    if (shape[2] === 1) {
      format = gl.ALPHA;
    } else if (shape[2] === 2) {
      format = gl.LUMINANCE_ALPHA;
    } else if (shape[2] === 3) {
      format = gl.RGB;
    } else if (shape[2] === 4) {
      format = gl.RGBA;
    } else {
      throw new Error("gl-texture2d: Invalid shape for pixel coords");
    }
  } else {
    throw new Error("gl-texture2d: Invalid shape for texture");
  }
  if (type === gl.FLOAT && !floatSupported) {
    type = gl.UNSIGNED_BYTE;
    packed = false;
  }
  var buffer = void 0,
      buf_store = void 0;
  var size = array.size;
  if (!packed) {
    var stride = [shape[2], shape[2] * shape[0], 1];
    buf_store = _typedarrayPool2.default.malloc(size, dtype);
    var buf_array = (0, _ndarray2.default)(buf_store, shape, stride, 0);
    if ((dtype === "float32" || dtype === "float64") && type === gl.UNSIGNED_BYTE) {
      convertFloatToUint8(buf_array, array);
    } else {
      _ndarrayOps2.default.assign(buf_array, array);
    }
    buffer = buf_store.subarray(0, size);
  } else if (array.offset === 0 && array.data.length === size) {
    buffer = array.data;
  } else {
    buffer = array.data.subarray(array.offset, array.offset + size);
  }
  gl.texImage2D(gl.TEXTURE_2D, 0, format, shape[0], shape[1], 0, format, type, buffer);
  if (buf_store) {
    _typedarrayPool2.default.free(buf_store);
  }
};
//# sourceMappingURL=drawNDArrayTexture.js.map