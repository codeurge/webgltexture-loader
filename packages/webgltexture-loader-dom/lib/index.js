"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageURLTextureLoader = exports.VideoTextureLoader = exports.CanvasTextureLoader = undefined;

var _webgltextureLoaderDomCanvas = require("webgltexture-loader-dom-canvas");

var _webgltextureLoaderDomCanvas2 = _interopRequireDefault(_webgltextureLoaderDomCanvas);

var _webgltextureLoaderDomVideo = require("webgltexture-loader-dom-video");

var _webgltextureLoaderDomVideo2 = _interopRequireDefault(_webgltextureLoaderDomVideo);

var _webgltextureLoaderDomImageUrl = require("webgltexture-loader-dom-image-url");

var _webgltextureLoaderDomImageUrl2 = _interopRequireDefault(_webgltextureLoaderDomImageUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CanvasTextureLoader = _webgltextureLoaderDomCanvas2.default;
exports.VideoTextureLoader = _webgltextureLoaderDomVideo2.default;
exports.ImageURLTextureLoader = _webgltextureLoaderDomImageUrl2.default;
//# sourceMappingURL=index.js.map