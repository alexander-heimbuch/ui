import 'core-js/es/symbol'
import 'core-js/es/object'
import 'core-js/es/promise'
import 'core-js/es/array'
import 'regenerator-runtime/runtime'

if (typeof window.CustomEvent !== 'function') {
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined }
    const evt = document.createEvent('CustomEvent')
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
    return evt
  }

  CustomEvent.prototype = window.Event.prototype
  window.CustomEvent = CustomEvent
}

if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
      if (this.parentNode) {
          this.parentNode.removeChild(this);
      }
  };
}

if (!String.prototype.includes) {
  String.prototype.includes = function() {
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  }
}

const polyfills = []

if (typeof fetch === 'undefined') {
  polyfills.push(import(/* webpackChunkName: 'fetch-polyfill' */ 'whatwg-fetch'))
}

export default () => Promise.all(polyfills)
