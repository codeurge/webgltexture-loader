"use strict";

var _globalRegistry = require("./globalRegistry");

var _globalRegistry2 = _interopRequireDefault(_globalRegistry);

var _LoadersRegistry = require("./LoadersRegistry");

var _LoadersRegistry2 = _interopRequireDefault(_LoadersRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("globalRegistry is available", function () {
  expect(_globalRegistry2.default).toBeInstanceOf(_LoadersRegistry2.default);
});
//# sourceMappingURL=globalRegistry.test.js.map