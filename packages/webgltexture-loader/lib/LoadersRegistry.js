"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * LoadersRegistry
 * loaders can define a static priority number. more high is priority, more important the loader is to be used first.
 */
var LoadersRegistry = function () {
  function LoadersRegistry() {
    _classCallCheck(this, LoadersRegistry);

    this._loaders = [];
  }

  _createClass(LoadersRegistry, [{
    key: "add",


    /**
     * Add a TextureLoader class to extend texture format support.
     */
    value: function add(loader) {
      this._loaders.push(loader);
      this._loaders.sort(function (a, b) {
        return (typeof b.priority === "number" ? b.priority : 0) - (typeof a.priority === "number" ? a.priority : 0);
      });
    }

    /**
     * Remove a previously added WebGLTextureLoader class.
     */

  }, {
    key: "remove",
    value: function remove(loader) {
      var i = this._loaders.indexOf(loader);
      if (i !== -1) {
        this._loaders.splice(i, 1);
      }
    }

    /**
     * List the loaders ordered by most priority first
     */

  }, {
    key: "get",
    value: function get() {
      return this._loaders;
    }
  }]);

  return LoadersRegistry;
}();

exports.default = LoadersRegistry;
//# sourceMappingURL=LoadersRegistry.js.map