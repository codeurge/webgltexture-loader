"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LoadersRegistry = require("./LoadersRegistry");

var _LoadersRegistry2 = _interopRequireDefault(_LoadersRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = typeof window === "undefined" ? global : window;
var key = "__webglTextureLoader_registry";

// This is a convenient loader registry that store all imported registry
// it needs to be in global state so it does not get lost across potential many lib instances
exports.default = root[key] || (root[key] = new _LoadersRegistry2.default());
//# sourceMappingURL=globalRegistry.js.map