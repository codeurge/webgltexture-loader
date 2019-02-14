"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * a WebGLTextureLoader handle the loading of WebGLTexture for a given input object.
 */
var WebGLTextureLoader = function () {

  /**
   *
   */
  function WebGLTextureLoader(gl) {
    _classCallCheck(this, WebGLTextureLoader);

    this.gl = gl;
  }

  /**
   * Cancel and clear everything
   */

  /**
   * @property {WebGLRenderingContext} gl - the contextual rendering context
   */


  /**
   * Check if the loader can handle a given input
   */


  /**
   * Load the resource by its input. returns a promise of {texture,width,height}.
   * idempotent: If load() is called twice with the same input, same promise is returned.
   */


  /**
   * try to get in sync the texture for a given input. otherwise null/undefined.
   * If null is returned, load() can be called in order to load the resource that will then be available in a future get() call.
   */


  _createClass(WebGLTextureLoader, [{
    key: "update",


    /**
     * sync the webgl texture with a loaded input. for instance for <video>/<canvas> elements this needs to be called recurrently (like in a requestAnimationFrame loop) to get the texture updated.
     * update should only get called IF get(input) was returning a result.
     */
    value: function update(input) {
      // Default implementation don't do anything which works for all static content like an image
    }
  }]);

  return WebGLTextureLoader;
}();

exports.default = WebGLTextureLoader;
//# sourceMappingURL=WebGLTextureLoader.js.map