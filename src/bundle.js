/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const G = document.defaultView;
/* harmony export (immutable) */ __webpack_exports__["c"] = G;


// Node.CONSTANTS
// 'cause some engine has no global Node defined
// (i.e. Node, NativeScript, basicHTML ... )
const ELEMENT_NODE = 1;
/* harmony export (immutable) */ __webpack_exports__["b"] = ELEMENT_NODE;

const ATTRIBUTE_NODE = 2;
/* unused harmony export ATTRIBUTE_NODE */

const TEXT_NODE = 3;
/* harmony export (immutable) */ __webpack_exports__["j"] = TEXT_NODE;

const COMMENT_NODE = 8;
/* harmony export (immutable) */ __webpack_exports__["h"] = COMMENT_NODE;

const DOCUMENT_FRAGMENT_NODE = 11;
/* harmony export (immutable) */ __webpack_exports__["k"] = DOCUMENT_FRAGMENT_NODE;


// HTML related constants
const VOID_ELEMENTS = /^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i;
/* harmony export (immutable) */ __webpack_exports__["g"] = VOID_ELEMENTS;


// SVG related constants
const OWNER_SVG_ELEMENT = 'ownerSVGElement';
/* harmony export (immutable) */ __webpack_exports__["f"] = OWNER_SVG_ELEMENT;

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
/* harmony export (immutable) */ __webpack_exports__["a"] = SVG_NAMESPACE;


// Custom Elements / MutationObserver constants
const CONNECTED = 'connected';
/* harmony export (immutable) */ __webpack_exports__["l"] = CONNECTED;

const DISCONNECTED = 'dis' + CONNECTED;
/* harmony export (immutable) */ __webpack_exports__["m"] = DISCONNECTED;


// hyperHTML related constants
const EXPANDO = '_hyper: ';
/* unused harmony export EXPANDO */

const SHOULD_USE_TEXT_CONTENT = /^style|textarea$/i;
/* harmony export (immutable) */ __webpack_exports__["i"] = SHOULD_USE_TEXT_CONTENT;

const UID = EXPANDO + ((Math.random() * new Date) | 0) + ';';
/* harmony export (immutable) */ __webpack_exports__["d"] = UID;

const UIDC = '<!--' + UID + '-->';
/* harmony export (immutable) */ __webpack_exports__["e"] = UIDC;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// these are tiny helpers to simplify most common operations needed here
const create = (node, type) => doc(node).createElement(type);
/* harmony export (immutable) */ __webpack_exports__["c"] = create;

const doc = node => node.ownerDocument || node;
/* harmony export (immutable) */ __webpack_exports__["b"] = doc;

const fragment = node => doc(node).createDocumentFragment();
/* harmony export (immutable) */ __webpack_exports__["a"] = fragment;

const text = (node, text) => doc(node).createTextNode(text);
/* harmony export (immutable) */ __webpack_exports__["d"] = text;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);


// you know that kind of basics you need to cover
// your use case only but you don't want to bloat the library?
// There's even a package in here:
// https://www.npmjs.com/package/poorlyfills

// used to dispatch simple events
let Event = __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* G */].Event;
try {
  new Event('Event');
} catch(o_O) {
  Event = function (type) {
    const e = document.createEvent('Event');
    e.initEvent(type, false, false);
    return e;
  };
}


// used to store template literals
/* istanbul ignore next */
const Map = __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* G */].Map || function Map() {
  const keys = [], values = [];
  return {
    get(obj) {
      return values[keys.indexOf(obj)];
    },
    set(obj, value) {
      values[keys.push(obj) - 1] = value;
    }
  };
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Map;


// used to store wired content
let ID = 0;
const WeakMap = __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* G */].WeakMap || function WeakMap() {
  const key = __WEBPACK_IMPORTED_MODULE_0__constants_js__["d" /* UID */] + ID++;
  return {
    get(obj) { return obj[key]; },
    set(obj, value) {
      Object.defineProperty(obj, key, {
        configurable: true,
        value
      });
    }
  };
};
/* harmony export (immutable) */ __webpack_exports__["a"] = WeakMap;


// used to store hyper.Components
const WeakSet = __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* G */].WeakSet || function WeakSet() {
  const wm = new WeakMap;
  return {
    add(obj) { wm.set(obj, true); },
    has(obj) { return wm.get(obj) === true; }
  };
};
/* harmony export (immutable) */ __webpack_exports__["d"] = WeakSet;


// used to be sure IE9 or older Androids work as expected
const isArray = Array.isArray || (toString =>
  arr => toString.call(arr) === '[object Array]'
)({}.toString);
/* harmony export (immutable) */ __webpack_exports__["e"] = isArray;


const trim = __WEBPACK_IMPORTED_MODULE_0__constants_js__["d" /* UID */].trim || function () {
  return this.replace(/^\s+|\s+$/g, '');
};
/* harmony export (immutable) */ __webpack_exports__["b"] = trim;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__re_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_detection_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__easy_dom_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poorlyfills_js__ = __webpack_require__(2);










// appends an array of nodes
// to a generic node/fragment
// When available, uses append passing all arguments at once
// hoping that's somehow faster, even if append has more checks on type
const append = __WEBPACK_IMPORTED_MODULE_2__features_detection_js__["a" /* hasAppend */] ?
  (node, childNodes) => {
    node.append.apply(node, childNodes);
  } :
  (node, childNodes) => {
    const length = childNodes.length;
    for (let i = 0; i < length; i++) {
      node.appendChild(childNodes[i]);
    }
  };
/* harmony export (immutable) */ __webpack_exports__["b"] = append;


const findAttributes = new RegExp('(' + __WEBPACK_IMPORTED_MODULE_0__re_js__["a" /* attrName */] + '=)([\'"]?)' + __WEBPACK_IMPORTED_MODULE_1__constants_js__["e" /* UIDC */] + '\\2', 'gi');
const comments = ($0, $1, $2, $3) =>
  '<' + $1 + $2.replace(findAttributes, replaceAttributes) + $3;
const replaceAttributes = ($0, $1, $2) => $1 + ($2 || '"') + __WEBPACK_IMPORTED_MODULE_1__constants_js__["d" /* UID */] + ($2 || '"');

// given a node and a generic HTML content,
// create either an SVG or an HTML fragment
// where such content will be injected
const createFragment = (node, html) =>
  (__WEBPACK_IMPORTED_MODULE_1__constants_js__["f" /* OWNER_SVG_ELEMENT */] in node ?
    SVGFragment :
    HTMLFragment
  )(node, html.replace(__WEBPACK_IMPORTED_MODULE_0__re_js__["b" /* attrSeeker */], comments));
/* harmony export (immutable) */ __webpack_exports__["f"] = createFragment;


// IE/Edge shenanigans proof cloneNode
// it goes through all nodes manually
// instead of relying the engine to suddenly
// merge nodes together
const cloneNode = __WEBPACK_IMPORTED_MODULE_2__features_detection_js__["b" /* hasDoomedCloneNode */] ?
  node => {
    const clone = node.cloneNode();
    const childNodes = node.childNodes ||
                      // this is an excess of caution
                      // but some node, in IE, might not
                      // have childNodes property.
                      // The following fallback ensure working code
                      // in older IE without compromising performance
                      // or any other browser/engine involved.
                      /* istanbul ignore next */
                      [];
    const length = childNodes.length;
    for (let i = 0; i < length; i++) {
      clone.appendChild(cloneNode(childNodes[i]));
    }
    return clone;
  } :
  // the following ignore is due code-coverage
  // combination of not having document.importNode
  // but having a working node.cloneNode.
  // This shenario is common on older Android/WebKit browsers
  // but basicHTML here tests just two major cases:
  // with document.importNode or with broken cloneNode.
  /* istanbul ignore next */
  node => node.cloneNode(true);

// IE and Edge do not support children in SVG nodes
/* istanbul ignore next */
const getChildren = node => {
  const children = [];
  const childNodes = node.childNodes;
  const length = childNodes.length;
  for (let i = 0; i < length; i++) {
    if (childNodes[i].nodeType === __WEBPACK_IMPORTED_MODULE_1__constants_js__["b" /* ELEMENT_NODE */])
      children.push(childNodes[i]);
  }
  return children;
};
/* harmony export (immutable) */ __webpack_exports__["g"] = getChildren;


// used to import html into fragments
const importNode = __WEBPACK_IMPORTED_MODULE_2__features_detection_js__["c" /* hasImportNode */] ?
  (doc, node) => doc.importNode(node, true) :
  (doc, node) => cloneNode(node)
/* harmony export (immutable) */ __webpack_exports__["e"] = importNode;


// just recycling a one-off array to use slice
// in every needed place
const slice = [].slice;
/* harmony export (immutable) */ __webpack_exports__["c"] = slice;


// lazy evaluated, returns the unique identity
// of a template literal, as tempalte literal itself.
// By default, ES2015 template literals are unique
// tag`a${1}z` === tag`a${2}z`
// even if interpolated values are different
// the template chunks are in a frozen Array
// that is identical each time you use the same
// literal to represent same static content
// around its own interpolations.
const unique = template => TL(template);
/* harmony export (immutable) */ __webpack_exports__["a"] = unique;


// TL returns a unique version of the template
// it needs lazy feature detection
// (cannot trust literals with transpiled code)
let TL = t => {
  if (
    // TypeScript template literals are not standard
    t.propertyIsEnumerable('raw') ||
    (
        // Firefox < 55 has not standard implementation neither
        /Firefox\/(\d+)/.test((__WEBPACK_IMPORTED_MODULE_1__constants_js__["c" /* G */].navigator || {}).userAgent) &&
          parseFloat(RegExp.$1) < 55
        )
  ) {
    const T = {};
    TL = t => {
      const k = '^' + t.join('^');
      return T[k] || (T[k] = t);
    };
  } else {
    // make TL an identity like function
    TL = t => t;
  }
  return TL(t);
};

// used to store templates objects
// since neither Map nor WeakMap are safe
const TemplateMap = () => {
  try {
    const wm = new __WEBPACK_IMPORTED_MODULE_4__poorlyfills_js__["a" /* WeakMap */];
    const o_O = Object.freeze([]);
    wm.set(o_O, true);
    if (!wm.get(o_O))
      throw o_O;
    return wm;
  } catch(o_O) {
    // inevitable legacy code leaks due
    // https://github.com/tc39/ecma262/pull/890
    return new __WEBPACK_IMPORTED_MODULE_4__poorlyfills_js__["c" /* Map */];
  }
};
/* harmony export (immutable) */ __webpack_exports__["d"] = TemplateMap;


// create document fragments via native template
// with a fallback for browsers that won't be able
// to deal with some injected element such <td> or others
const HTMLFragment = __WEBPACK_IMPORTED_MODULE_2__features_detection_js__["d" /* hasContent */] ?
  (node, html) => {
    const container = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__easy_dom_js__["c" /* create */])(node, 'template');
    container.innerHTML = html;
    return container.content;
  } :
  (node, html) => {
    const container = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__easy_dom_js__["c" /* create */])(node, 'template');
    const content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__easy_dom_js__["a" /* fragment */])(node);
    if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
      const selector = RegExp.$1;
      container.innerHTML = '<table>' + html + '</table>';
      append(content, slice.call(container.querySelectorAll(selector)));
    } else {
      container.innerHTML = html;
      append(content, slice.call(container.childNodes));
    }
    return content;
  };

// creates SVG fragment with a fallback for IE that needs SVG
// within the HTML content
const SVGFragment = __WEBPACK_IMPORTED_MODULE_2__features_detection_js__["d" /* hasContent */] ?
  (node, html) => {
    const content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__easy_dom_js__["a" /* fragment */])(node);
    const container = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__easy_dom_js__["b" /* doc */])(node).createElementNS(__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* SVG_NAMESPACE */], 'svg');
    container.innerHTML = html;
    append(content, slice.call(container.childNodes));
    return content;
  } :
  (node, html) => {
    const content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__easy_dom_js__["a" /* fragment */])(node);
    const container = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__easy_dom_js__["c" /* create */])(node, 'div');
    container.innerHTML = '<svg xmlns="' + __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* SVG_NAMESPACE */] + '">' + html + '</svg>';
    append(content, slice.call(container.firstChild.childNodes));
    return content;
  };


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperhtml_esm__ = __webpack_require__(12);
/*! (C) 2017-2018 Andrea Giammarchi - ISC Style License */



// utils to deal with custom elements builtin extends
const O = Object;
const classes = [];
const defineProperties = O.defineProperties;
const defineProperty = O.defineProperty;
const getOwnPropertyDescriptor = O.getOwnPropertyDescriptor;
const getOwnPropertyNames = O.getOwnPropertyNames;
const getOwnPropertySymbols = O.getOwnPropertySymbols || (() => []);
const getPrototypeOf = O.getPrototypeOf || (o => o.__proto__);
const ownKeys = typeof Reflect === 'object' && Reflect.ownKeys ||
                (o => getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
const setPrototypeOf = O.setPrototypeOf ||
                      ((o, p) => (o.__proto__ = p, o));

class HyperHTMLElement extends HTMLElement {

  // define a custom-element in the CustomElementsRegistry
  // class MyEl extends HyperHTMLElement {}
  // MyEl.define('my-el');
  static define(name, options) {
    const Class = this;
    const proto = Class.prototype;

    // if observedAttributes contains attributes to observe
    // HyperHTMLElement will directly reflect get/setAttribute
    // operation once these attributes are used, example:
    // el.observed = 123;
    // will automatically do
    // el.setAttribute('observed', 123);
    // triggering also the attributeChangedCallback
    (Class.observedAttributes || []).forEach(name => {
      if (!(name in proto)) defineProperty(
        proto,
        name.replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase()),
        {
          configurable: true,
          // it's impossible to understand if this property
          // should be returned as boolean or not
          // but you can always define
          // get propName() { return !!this.getAttribute(name); }
          // overwriting the default behavior
          get() {
            const value = this.getAttribute(name);
            return value === '' ? true : value;
          },
          set(value) {
            if (value === false || value == null)
              this.removeAttribute(name, value);
            else {
              this.setAttribute(name, value);
            }
          }
        }
      );
    });

    const onChanged = proto.attributeChangedCallback;
    const hasChange = !!onChanged;

    // created() {} is an initializer method that grants
    // the node is fully known to the browser.
    // It is ensured to run either after DOMContentLoaded,
    // or once there is a next sibling (stream-friendly) so that
    // you have full access to element attributes and/or childNodes.
    const created = proto.created;
    if (created) {
      // used to ensure create() is called once and once only
      defineProperty(
        proto,
        '_init$',
        {
          configurable: true,
          writable: true,
          value: true
        }
      );

      // ⚠️ if you need to overwrite/change attributeChangedCallback method
      //    at runtime after class definition, be sure you do so
      //    via Object.defineProperty to preserve its non-enumerable nature.
      defineProperty(
        proto,
        'attributeChangedCallback',
        {
          configurable: true,
          value: function aCC(name, prev, curr) {
            if (this._init$) {
              checkReady.call(this, created);
              if (this._init$)
                return this._init$$.push(aCC.bind(this, name, prev, curr));
            }
            // ensure setting same value twice
            // won't trigger twice attributeChangedCallback
            if (hasChange && prev !== curr) {
              onChanged.apply(this, arguments);
            }
          }
        }
      );

      // ⚠️ if you need to overwrite/change connectedCallback method
      //    at runtime after class definition, be sure you do so
      //    via Object.defineProperty to preserve its non-enumerable nature.
      const onConnected = proto.connectedCallback;
      const hasConnect = !!onConnected;
      defineProperty(
        proto,
        'connectedCallback',
        {
          configurable: true,
          value: function cC() {
            if (this._init$) {
              checkReady.call(this, created);
              if (this._init$)
                return this._init$$.push(cC.bind(this));
            }
            if (hasConnect) {
              onConnected.apply(this, arguments);
            }
          }
        }
      );
    } else if (hasChange) {
      // ⚠️ if you need to overwrite/change attributeChangedCallback method
      //    at runtime after class definition, be sure you do so
      //    via Object.defineProperty to preserve its non-enumerable nature.
      defineProperty(
        proto,
        'attributeChangedCallback',
        {
          configurable: true,
          value(name, prev, curr) {
            // ensure setting same value twice
            // won't trigger twice attributeChangedCallback
            if (prev !== curr) {
              onChanged.apply(this, arguments);
            }
          }
        }
      );
    }

    // define lazily all handlers
    // class { handleClick() { ... }
    // render() { `<a onclick=${this.handleClick}>` } }
    getOwnPropertyNames(proto).forEach(key => {
      if (/^handle[A-Z]/.test(key)) {
        const _key$ = '_' + key + '$';
        const method = proto[key];
        defineProperty(proto, key, {
          configurable: true,
          get() {
            return  this[_key$] ||
                    (this[_key$] = method.bind(this));
          }
        });
      }
    });

    // whenever you want to directly use the component itself
    // as EventListener, you can pass it directly.
    // https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
    //  class Reactive extends HyperHTMLElement {
    //    oninput(e) { console.log(this, 'changed', e.target.value); }
    //    render() { this.html`<input oninput="${this}">`; }
    //  }
    if (!('handleEvent' in proto)) {
      // ⚠️ if you need to overwrite/change handleEvent method
      //    at runtime after class definition, be sure you do so
      //    via Object.defineProperty to preserve its non-enumerable nature.
      defineProperty(
        proto,
        'handleEvent',
        {
          configurable: true,
          value(event) {
            this[
              (event.currentTarget.dataset || {}).call ||
              ('on' + event.type)
            ](event);
          }
        }
      );
    }

    if (options && options.extends) {
      const Native = document.createElement(options.extends).constructor;
      const Intermediate = class extends Native {};
      const Super = getPrototypeOf(Class);
      ownKeys(Super)
        .filter(key => [
          'length', 'name', 'arguments', 'caller', 'prototype'
        ].indexOf(key) < 0)
        .forEach(key => defineProperty(
          Intermediate,
          key,
          getOwnPropertyDescriptor(Super, key)
        )
      );
      ownKeys(Super.prototype)
        .forEach(key => defineProperty(
          Intermediate.prototype,
          key,
          getOwnPropertyDescriptor(Super.prototype, key)
        )
      );
      setPrototypeOf(Class, Intermediate);
      setPrototypeOf(proto, Intermediate.prototype);
      customElements.define(name, Class, options);
    } else {
      customElements.define(name, Class);
    }
    classes.push(Class);
    return Class;
  }

  // lazily bind once hyperHTML logic
  // to either the shadowRoot, if present and open,
  // the _shadowRoot property, if set due closed shadow root,
  // or the custom-element itself if no Shadow DOM is used.
  get html() {
    return this._html$ || (this.html = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperhtml_esm__["a" /* bind */])(
      // in case of Shadow DOM {mode: "open"}, use it
      this.shadowRoot ||
      // in case of Shadow DOM {mode: "close"}, use it
      // this needs the following reference created upfront
      // this._shadowRoot = this.attachShadow({mode: "close"});
      this._shadowRoot ||
      // if no Shadow DOM is used, simply use the component
      // as container for its own content (it just works too)
      this
    ));
  }

  // it can be set too if necessary, it won't invoke render()
  set html(value) {
    defineProperty(this, '_html$', {configurable: true, value: value});
  }

  // ---------------------//
  // Basic State Handling //
  // ---------------------//

  // overwrite this method with your own render
  render() {}

  // define the default state object
  // you could use observed properties too
  get defaultState() { return {}; }

  // the state with a default
  get state() {
    return this._state$ || (this.state = this.defaultState);
  }

  // it can be set too if necessary, it won't invoke render()
  set state(value) {
    defineProperty(this, '_state$', {configurable: true, value: value});
  }

  // currently a state is a shallow copy, like in Preact or other libraries.
  // after the state is updated, the render() method will be invoked.
  // ⚠️ do not ever call this.setState() inside this.render()
  setState(state, render) {
    const target = this.state;
    const source = typeof state === 'function' ? state.call(this, target) : state;
    for (const key in source) target[key] = source[key];
    if (render !== false) this.render();
    return this;
  }

};

// exposing hyperHTML utilities
HyperHTMLElement.Component = __WEBPACK_IMPORTED_MODULE_0_hyperhtml_esm__["b" /* Component */];
HyperHTMLElement.bind = __WEBPACK_IMPORTED_MODULE_0_hyperhtml_esm__["a" /* bind */];
HyperHTMLElement.intent = __WEBPACK_IMPORTED_MODULE_0_hyperhtml_esm__["c" /* define */];
HyperHTMLElement.wire = __WEBPACK_IMPORTED_MODULE_0_hyperhtml_esm__["d" /* wire */];
HyperHTMLElement.hyper = __WEBPACK_IMPORTED_MODULE_0_hyperhtml_esm__["e" /* hyper */];

try {
  if (Symbol.hasInstance) classes.push(
    defineProperty(HyperHTMLElement, Symbol.hasInstance, {
      enumerable: false,
      configurable: true,
      value(instance) {
        return classes.some(isPrototypeOf, getPrototypeOf(instance));
      }
    }));
} catch(meh) {}

/* harmony default export */ __webpack_exports__["a"] = (HyperHTMLElement);

// ------------------------------//
// DOMContentLoaded VS created() //
// ------------------------------//
const dom = {
  type: 'DOMContentLoaded',
  handleEvent() {
    if (dom.ready()) {
      document.removeEventListener(dom.type, dom, false);
      dom.list.splice(0).forEach(invoke);
    }
    else
      setTimeout(dom.handleEvent);
  },
  ready() {
    return document.readyState === 'complete';
  },
  list: []
};

if (!dom.ready()) {
  document.addEventListener(dom.type, dom, false);
}

function checkReady(created) {
  if (dom.ready() || isReady.call(this, created)) {
    if (this._init$) {
      const list = this._init$$;
      if (list) delete this._init$$;
      created.call(defineProperty(this, '_init$', {value: false}));
      if (list) list.forEach(invoke);
    }
  } else {
    if (!this.hasOwnProperty('_init$$'))
      defineProperty(this, '_init$$', {configurable: true, value: []});
    dom.list.push(checkReady.bind(this, created));
  }
}

function invoke(fn) {
  fn();
}

function isPrototypeOf(Class) {
  return this === Class.prototype;
}

function isReady(created) {
  let el = this;
  do { if (el.nextSibling) return true; }
  while (el = el.parentNode);
  setTimeout(checkReady.bind(this, created));
  return false;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Component;
/* harmony export (immutable) */ __webpack_exports__["b"] = setup;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__ = __webpack_require__(2);


// hyperHTML.Component is a very basic class
// able to create Custom Elements like components
// including the ability to listen to connect/disconnect
// events via onconnect/ondisconnect attributes
// Components can be created imperatively or declaratively.
// The main difference is that declared components
// will not automatically render on setState(...)
// to simplify state handling on render.
function Component() {
  return this; // this is needed in Edge !!!
}

// Component is lazily setup because it needs
// wire mechanism as lazy content
function setup(content) {
  // there are various weakly referenced variables in here
  // and mostly are to use Component.for(...) static method.
  const children = new __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__["a" /* WeakMap */];
  const create = Object.create;
  const createEntry = (wm, id, component) => {
    wm.set(id, component);
    return component;
  };
  const get = (Class, info, context, id) => {
    const relation = info.get(Class) || relate(Class, info);
    switch (typeof id) {
      case 'object':
      case 'function':
        const wm = relation.w || (relation.w = new __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__["a" /* WeakMap */]);
        return wm.get(id) || createEntry(wm, id, new Class(context));
      default:
        const sm = relation.p || (relation.p = create(null));
        return sm[id] || (sm[id] = new Class(context));
    }
  };
  const relate = (Class, info) => {
    const relation = {w: null, p: null};
    info.set(Class, relation);
    return relation;
  };
  const set = context => {
    const info = new __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__["c" /* Map */];
    children.set(context, info);
    return info;
  };
  // The Component Class
  Object.defineProperties(
    Component,
    {
      // Component.for(context[, id]) is a convenient way
      // to automatically relate data/context to children components
      // If not created yet, the new Component(context) is weakly stored
      // and after that same instance would always be returned.
      for: {
        configurable: true,
        value(context, id) {
          return get(
            this,
            children.get(context) || set(context),
            context,
            id == null ?
              'default' : id
          );
        }
      }
    }
  );
  Object.defineProperties(
    Component.prototype,
    {
      // all events are handled with the component as context
      handleEvent: {value(e) {
        const ct = e.currentTarget;
        this[
          ('getAttribute' in ct && ct.getAttribute('data-call')) ||
          ('on' + e.type)
        ](e);
      }},
      // components will lazily define html or svg properties
      // as soon as these are invoked within the .render() method
      // Such render() method is not provided by the base class
      // but it must be available through the Component extend.
      // Declared components could implement a
      // render(props) method too and use props as needed.
      html: lazyGetter('html', content),
      svg: lazyGetter('svg', content),
      // the state is a very basic/simple mechanism inspired by Preact
      state: lazyGetter('state', function () { return this.defaultState; }),
      // it is possible to define a default state that'd be always an object otherwise
      defaultState: {get() { return {}; }},
      // dispatch a bubbling, cancelable, custom event
      // through the first known/available node
      dispatch: {value(type, detail) {
        const {_wire$} = this;
        if (_wire$) {
          const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail
          });
          event.component = this;
          return (_wire$.dispatchEvent ?
                    _wire$ :
                    _wire$.childNodes[0]
                  ).dispatchEvent(event);
        }
        return false;
      }},
      // setting some property state through a new object
      // or a callback, triggers also automatically a render
      // unless explicitly specified to not do so (render === false)
      setState: {value(state, render) {
        const target = this.state;
        const source = typeof state === 'function' ? state.call(this, target) : state;
        for (const key in source) target[key] = source[key];
        if (render !== false)
          this.render();
        return this;
      }}
    }
  );
}

// instead of a secret key I could've used a WeakMap
// However, attaching a property directly will result
// into better performance with thousands of components
// hanging around, and less memory pressure caused by the WeakMap
const lazyGetter = (type, fn) => {
  const secret = '_' + type + '$';
  return {
    get() {
      return this[secret] || setValue(this, secret, fn.call(this, type));
    },
    set(value) {
      setValue(this, secret, value);
    }
  };
};

// shortcut to set value on get or set(value)
const setValue = (self, secret, value) =>
  Object.defineProperty(self, secret, {
    configurable: true,
    value: typeof value === 'function' ?
      function () {
        return (self._wire$ = value.apply(this, arguments));
      } :
      value
  })[secret]
;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Wire;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_easy_dom_js__ = __webpack_require__(1);



function Wire(childNodes) {
  this.childNodes = childNodes;
  this.length = childNodes.length;
  this.first = childNodes[0];
  this.last = childNodes[this.length - 1];
}

// when a wire is inserted, all its nodes will follow
Wire.prototype.insert = function insert() {
  const df = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_easy_dom_js__["a" /* fragment */])(this.first);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["b" /* append */])(df, this.childNodes);
  return df;
};

// when a wire is removed, all its nodes must be removed as well
Wire.prototype.remove = function remove() {
  const first = this.first;
  const last = this.last;
  if (this.length === 2) {
    last.parentNode.removeChild(last);
  } else {
    const range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_easy_dom_js__["b" /* doc */])(first).createRange();
    range.setStartBefore(this.childNodes[1]);
    range.setEndAfter(last);
    range.deleteContents();
  }
  return first;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Updates_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_re_js__ = __webpack_require__(10);







// a weak collection of contexts that
// are already known to hyperHTML
const bewitched = new __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__["a" /* WeakMap */];

// all unique template literals
const templates = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["d" /* TemplateMap */])();

// better known as hyper.bind(node), the render is
// the main tag function in charge of fully upgrading
// or simply updating, contexts used as hyperHTML targets.
// The `this` context is either a regular DOM node or a fragment.
function render(template) {
  const wicked = bewitched.get(this);
  if (wicked && wicked.template === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["a" /* unique */])(template)) {
    update.apply(wicked.updates, arguments);
  } else {
    upgrade.apply(this, arguments);
  }
  return this;
}

// an upgrade is in charge of collecting template info,
// parse it once, if unknown, to map all interpolations
// as single DOM callbacks, relate such template
// to the current context, and render it after cleaning the context up
function upgrade(template) {
  template = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["a" /* unique */])(template);
  const info =  templates.get(template) ||
                createTemplate.call(this, template);
  const fragment = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["e" /* importNode */])(this.ownerDocument, info.fragment);
  const updates = __WEBPACK_IMPORTED_MODULE_2__objects_Updates_js__["a" /* default */].create(fragment, info.paths);
  bewitched.set(this, {template, updates});
  update.apply(updates, arguments);
  this.textContent = '';
  this.appendChild(fragment);
}

// an update simply loops over all mapped DOM operations
function update() {
  const length = arguments.length;
  for (let i = 1; i < length; i++) {
    this[i - 1](arguments[i]);
  }
}

// a template can be used to create a document fragment
// aware of all interpolations and with a list
// of paths used to find once those nodes that need updates,
// no matter if these are attributes, text nodes, or regular one
function createTemplate(template) {
  const paths = [];
  const html = template.join(__WEBPACK_IMPORTED_MODULE_1__shared_constants_js__["e" /* UIDC */]).replace(SC_RE, SC_PLACE);
  const fragment = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["f" /* createFragment */])(this, html);
  __WEBPACK_IMPORTED_MODULE_2__objects_Updates_js__["a" /* default */].find(fragment, paths, template.slice());
  const info = {fragment, paths};
  templates.set(template, info);
  return info;
}

// some node could be special though, like a custom element
// with a self closing tag, which should work through these changes.
const SC_RE = __WEBPACK_IMPORTED_MODULE_4__shared_re_js__["c" /* selfClosing */];
const SC_PLACE = ($0, $1, $2) => {
  return __WEBPACK_IMPORTED_MODULE_1__shared_constants_js__["g" /* VOID_ELEMENTS */].test($1) ? $0 : ('<' + $1 + $2 + '></' + $1 + '>');
};

/* harmony default export */ __webpack_exports__["a"] = (render);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const attributes = {};
const intents = {};
const keys = [];
const hasOwnProperty = intents.hasOwnProperty;

let length = 0;

/* harmony default export */ __webpack_exports__["a"] = ({

  // used to invoke right away hyper:attributes
  attributes,

  // hyperHTML.define('intent', (object, update) => {...})
  // can be used to define a third parts update mechanism
  // when every other known mechanism failed.
  // hyper.define('user', info => info.name);
  // hyper(node)`<p>${{user}}</p>`;
  define: (intent, callback) => {
    if (intent.indexOf('-') < 0) {
      if (!(intent in intents)) {
        length = keys.push(intent);
      }
      intents[intent] = callback;
    } else {
      attributes[intent] = callback;
    }
  },

  // this method is used internally as last resort
  // to retrieve a value out of an object
  invoke: (object, callback) => {
    for (let i = 0; i < length; i++) {
      let key = keys[i];
      if (hasOwnProperty.call(object, key)) {
        return intents[key](object[key], callback);
      }
    }
  }
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* AUTOMATICALLY IMPORTED, DO NOT MODIFY */
/*! (c) 2017 Andrea Giammarchi (ISC) */

/**
 * This code is a revisited port of the snabbdom vDOM diffing logic,
 * the same that fuels as fork Vue.js or other libraries.
 * @credits https://github.com/snabbdom/snabbdom
 */

const eqeq = (a, b) => a == b;

const identity = O => O;

const remove = (get, parentNode, before, after) => {
  if (after == null) {
    parentNode.removeChild(get(before, -1));
  } else {
    const range = parentNode.ownerDocument.createRange();
    range.setStartBefore(get(before, -1));
    range.setEndAfter(get(after, -1));
    range.deleteContents();
  }
};

const domdiff = (
  parentNode,     // where changes happen
  currentNodes,   // Array of current items/nodes
  futureNodes,    // Array of future items/nodes
  options         // optional object with one of the following properties
                  //  before: domNode
                  //  compare(generic, generic) => true if same generic
                  //  node(generic) => Node
) => {
  if (!options)
    options = {};
  const compare = options.compare || eqeq;
  const get = options.node || identity;
  const before = options.before == null ? null : get(options.before, 0);
  let currentStart = 0, futureStart = 0;
  let currentEnd = currentNodes.length - 1;
  let currentStartNode = currentNodes[0];
  let currentEndNode = currentNodes[currentEnd];
  let futureEnd = futureNodes.length - 1;
  let futureStartNode = futureNodes[0];
  let futureEndNode = futureNodes[futureEnd];
  while (currentStart <= currentEnd && futureStart <= futureEnd) {
    if (currentStartNode == null) {
      currentStartNode = currentNodes[++currentStart];
    }
    else if (currentEndNode == null) {
      currentEndNode = currentNodes[--currentEnd];
    }
    else if (futureStartNode == null) {
      futureStartNode = futureNodes[++futureStart];
    }
    else if (futureEndNode == null) {
      futureEndNode = futureNodes[--futureEnd];
    }
    else if (compare(currentStartNode, futureStartNode)) {
      currentStartNode = currentNodes[++currentStart];
      futureStartNode = futureNodes[++futureStart];
    }
    else if (compare(currentEndNode, futureEndNode)) {
      currentEndNode = currentNodes[--currentEnd];
      futureEndNode = futureNodes[--futureEnd];
    }
    else if (compare(currentStartNode, futureEndNode)) {
      parentNode.insertBefore(
        get(currentStartNode, 1),
        get(currentEndNode, -0).nextSibling
      );
      currentStartNode = currentNodes[++currentStart];
      futureEndNode = futureNodes[--futureEnd];
    }
    else if (compare(currentEndNode, futureStartNode)) {
      parentNode.insertBefore(
        get(currentEndNode, 1),
        get(currentStartNode, 0)
      );
      currentEndNode = currentNodes[--currentEnd];
      futureStartNode = futureNodes[++futureStart];
    }
    else {
      let index = currentNodes.indexOf(futureStartNode);
      if (index < 0) {
        parentNode.insertBefore(
          get(futureStartNode, 1),
          get(currentStartNode, 0)
        );
        futureStartNode = futureNodes[++futureStart];
      }
      else {
        let i = index;
        let f = futureStart;
        while (
          i <= currentEnd &&
          f <= futureEnd &&
          currentNodes[i] === futureNodes[f]
        ) {
          i++;
          f++;
        }
        if (1 < (i - index)) {
          if (--index === currentStart) {
            parentNode.removeChild(get(currentStartNode, -1));
          } else {
            remove(
              get,
              parentNode,
              currentStartNode,
              currentNodes[index]
            );
          }
          currentStart = i;
          futureStart = f;
          currentStartNode = currentNodes[i];
          futureStartNode = futureNodes[f];
        } else {
          const el = currentNodes[index];
          currentNodes[index] = null;
          parentNode.insertBefore(get(el, 1), get(currentStartNode, 0));
          futureStartNode = futureNodes[++futureStart];
        }
      }
    }
  }
  if (currentStart <= currentEnd || futureStart <= futureEnd) {
    if (currentStart > currentEnd) {
      const pin = futureNodes[futureEnd + 1];
      const place = pin == null ? before : get(pin, 0);
      if (futureStart === futureEnd) {
        parentNode.insertBefore(get(futureNodes[futureStart], 1), place);
      }
      else {
        const fragment = parentNode.ownerDocument.createDocumentFragment();
        while (futureStart <= futureEnd) {
          fragment.appendChild(get(futureNodes[futureStart++], 1));
        }
        parentNode.insertBefore(fragment, place);
      }
    }
    else {
      if (currentNodes[currentStart] == null)
        currentStart++;
      if (currentStart === currentEnd) {
        parentNode.removeChild(get(currentNodes[currentStart], -1));
      }
      else {
        remove(
          get,
          parentNode,
          currentNodes[currentStart],
          currentNodes[currentEnd]
        );
      }
    }
  }
  return futureNodes;
};

/* harmony default export */ __webpack_exports__["a"] = (domdiff);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attrName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return attrSeeker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selfClosing; });
// TODO:  I'd love to code-cover RegExp too here
//        these are fundamental for this library

const spaces = ' \\f\\n\\r\\t';
const almostEverything = '[^ ' + spaces + '\\/>"\'=]+';
const attrName = '[ ' + spaces + ']+' + almostEverything;
const tagName = '<([A-Za-z]+[A-Za-z0-9:_-]*)((?:';
const attrPartials = '(?:=(?:\'[^\']*?\'|"[^"]*?"|<[^>]*?>|' + almostEverything + '))?)';

const attrSeeker = new RegExp(
  tagName + attrName + attrPartials + '+)([ ' + spaces + ']*/?>)',
  'g'
);

const selfClosing = new RegExp(
  tagName + attrName + attrPartials + '*)([ ' + spaces + ']*/>)',
  'g'
);




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_address_element__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_buttons__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_slider__ = __webpack_require__(21);







/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){"use strict";var t=document.defaultView,r=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,l="ownerSVGElement",c="http://www.w3.org/2000/svg",s="connected",f="dis"+s,d=/^style|textarea$/i,b="_hyper: "+(Math.random()*new Date|0)+";",h="\x3c!--"+b+"--\x3e",v=t.Event;try{new v("Event")}catch(e){v=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}var n,i=t.Map||function(){var n=[],r=[];return{get:function(e){return r[n.indexOf(e)]},set:function(e,t){r[n.push(e)-1]=t}}},o=0,p=t.WeakMap||function(){var n=b+o++;return{get:function(e){return e[n]},set:function(e,t){Object.defineProperty(e,n,{configurable:!0,value:t})}}},a=t.WeakSet||function(){var t=new p;return{add:function(e){t.set(e,!0)},has:function(e){return!0===t.get(e)}}},m=Array.isArray||(n={}.toString,function(e){return"[object Array]"===n.call(e)}),g=b.trim||function(){return this.replace(/^\s+|\s+$/g,"")};function w(){return this}var u=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||y(this,n,t.call(this,e))},set:function(e){y(this,n,e)}}},y=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},N={},x={},E=[],C=x.hasOwnProperty,j=0,A={attributes:N,define:function(e,t){e.indexOf("-")<0?(e in x||(j=E.push(e)),x[e]=t):N[e]=t},invoke:function(e,t){for(var n=0;n<j;n++){var r=E[n];if(C.call(e,r))return x[r](e[r],t)}}},k=function(e,t){return T(e).createElement(t)},T=function(e){return e.ownerDocument||e},O=function(e){return T(e).createDocumentFragment()},S=function(e,t){return T(e).createTextNode(t)},L=" \\f\\n\\r\\t",M="[^ "+L+"\\/>\"'=]+",$="[ "+L+"]+"+M,D="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",P="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+M+"))?)",B=new RegExp(D+$+P+"+)([ "+L+"]*/?>)","g"),R=new RegExp(D+$+P+"*)([ "+L+"]*/>)","g"),_=O(document),H="append"in _,z="content"in k(document,"template");_.appendChild(S(_,"g")),_.appendChild(S(_,""));var F=1===_.cloneNode(!0).childNodes.length,Z="importNode"in document,I=H?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},V=new RegExp("("+$+"=)(['\"]?)"+h+"\\2","gi"),W=function(e,t,n,r){return"<"+t+n.replace(V,q)+r},q=function(e,t,n){return t+(n||'"')+b+(n||'"')},G=function(e,t){return(l in e?ee:Y)(e,t.replace(B,W))},J=F?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(J(n[i]));return t}:function(e){return e.cloneNode(!0)},K=Z?function(e,t){return e.importNode(t,!0)}:function(e,t){return J(t)},Q=[].slice,U=function(e){return X(e)},X=function(e){if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((t.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var n={};X=function(e){var t="^"+e.join("^");return n[t]||(n[t]=e)}}else X=function(e){return e};return X(e)},Y=z?function(e,t){var n=k(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=k(e,"template"),r=O(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",I(r,Q.call(n.querySelectorAll(i)))}else n.innerHTML=t,I(r,Q.call(n.childNodes));return r},ee=z?function(e,t){var n=O(e),r=T(e).createElementNS(c,"svg");return r.innerHTML=t,I(n,Q.call(r.childNodes)),n}:function(e,t){var n=O(e),r=k(e,"div");return r.innerHTML='<svg xmlns="'+c+'">'+t+"</svg>",I(n,Q.call(r.firstChild.childNodes)),n};function te(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}te.prototype.insert=function(){var e=O(this.first);return I(e,this.childNodes),e},te.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=T(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var ne=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},re=function(e,t,n){return{type:e,name:n,node:t,path:function(e){var t=[],n=void 0;switch(e.nodeType){case 1:case 11:n=e;break;case 8:n=e.parentNode,ne(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)ne(t,n,e);return t}(t)}},ie=function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e},oe=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,ae=function(o,a){var u=void 0,l=void 0;return function(e){switch(typeof e){case"object":if(e){if("object"===u){if(!a&&l!==e)for(var t in l)t in e||(o[t]="")}else a?o.value="":o.cssText="";var n=a?{}:o;for(var r in e){var i=e[r];n[r]="number"!=typeof i||oe.test(r)?i:i+"px"}u="object",a?o.value=ce(l=n):l=e;break}default:l!=e&&(u="string",l=e,a?o.value=e||"":o.cssText=e||"")}}},ue=/([^A-Z])([A-Z]+)/g,le=function(e,t,n){return t+"-"+n.toLowerCase()},ce=function(e){var t=[];for(var n in e)t.push(n.replace(ue,le),":",e[n],";");return t.join("")},se=function(e,t){return e==t},fe=function(e){return e},de=function(e,t,n,r){if(null==r)t.removeChild(e(n,-1));else{var i=t.ownerDocument.createRange();i.setStartBefore(e(n,-1)),i.setEndAfter(e(r,-1)),i.deleteContents()}},he=function(e,t,n,r){r||(r={});for(var i=r.compare||se,o=r.node||fe,a=null==r.before?null:o(r.before,0),u=0,l=0,c=t.length-1,s=t[0],f=t[c],d=n.length-1,h=n[0],v=n[d];u<=c&&l<=d;)if(null==s)s=t[++u];else if(null==f)f=t[--c];else if(null==h)h=n[++l];else if(null==v)v=n[--d];else if(i(s,h))s=t[++u],h=n[++l];else if(i(f,v))f=t[--c],v=n[--d];else if(i(s,v))e.insertBefore(o(s,1),o(f,-0).nextSibling),s=t[++u],v=n[--d];else if(i(f,h))e.insertBefore(o(f,1),o(s,0)),f=t[--c],h=n[++l];else{var p=t.indexOf(h);if(p<0)e.insertBefore(o(h,1),o(s,0)),h=n[++l];else{for(var m=p,g=l;m<=c&&g<=d&&t[m]===n[g];)m++,g++;if(1<m-p)--p===u?e.removeChild(o(s,-1)):de(o,e,s,t[p]),l=g,s=t[u=m],h=n[g];else{var b=t[p];t[p]=null,e.insertBefore(o(b,1),o(s,0)),h=n[++l]}}}if(u<=c||l<=d)if(c<u){var w=n[d+1],y=null==w?a:o(w,0);if(l===d)e.insertBefore(o(n[l],1),y);else{for(var N=e.ownerDocument.createDocumentFragment();l<=d;)N.appendChild(o(n[l++],1));e.insertBefore(N,y)}}else null==t[u]&&u++,u===c?e.removeChild(o(t[u],-1)):de(o,e,t[u],t[c]);return n},ve=new a;function pe(){}pe.prototype=Object.create(null);var me=function(e){return{html:e}},ge=function e(t,n){return"ELEMENT_NODE"in t?t:t.constructor===te?1/n<0?n?t.remove():t.last:n?t.insert():t.first:e(t.render(),n)},be=function(e,t,n){for(var r=new pe,i=e.attributes,o=Q.call(i),a=[],u=o.length,l=0;l<u;l++){var c=o[l];if(c.value===b){var s=c.name;if(!(s in r)){var f=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");r[s]=i[f]||i[f.toLowerCase()],t.push(re("attr",r[s],f))}a.push(c)}}for(var d=a.length,h=0;h<d;h++){var v=a[h];/^id$/i.test(v.name)?e.removeAttribute(v.name):e.removeAttributeNode(a[h])}var p=e.nodeName;if(/^script$/i.test(p)){for(var m=document.createElement(p),g=0;g<i.length;g++)m.setAttributeNode(i[g].cloneNode(!0));m.textContent=e.textContent,e.parentNode.replaceChild(m,e)}},we=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(me).then(t):Promise.resolve(A.invoke(e,t)).then(t)},ye=function(e){return null!=e&&"then"in e},Ne=function(r,i){var o={node:ge,before:r},a=!1,u=void 0;return function e(t){switch(typeof t){case"string":case"number":case"boolean":a?u!==t&&(u=t,i[0].textContent=t):(a=!0,u=t,i=he(r.parentNode,i,[S(r,t)],o));break;case"object":case"undefined":if(null==t){a=!1,i=he(r.parentNode,i,[],o);break}default:if(a=!1,m(u=t))if(0===t.length)i.length&&(i=he(r.parentNode,i,[],o));else switch(typeof t[0]){case"string":case"number":case"boolean":e({html:t});break;case"object":if(m(t[0])&&(t=t.concat.apply([],t)),ye(t[0])){Promise.all(t).then(e);break}default:i=he(r.parentNode,i,t,o)}else"ELEMENT_NODE"in(n=t)||n instanceof te||n instanceof w?i=he(r.parentNode,i,11===t.nodeType?Q.call(t.childNodes):[t],o):ye(t)?t.then(e):"placeholder"in t?we(t,e):"text"in t?e(String(t.text)):"any"in t?e(t.any):"html"in t?i=he(r.parentNode,i,Q.call(G(r,[].concat(t.html).join("")).childNodes),o):e("length"in t?Q.call(t):A.invoke(t,e))}var n}},xe=function(t,n,e){var r=l in t,i=void 0;if("style"===n)return function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),ae(r,n)}return ae(e.style,n)}(t,e,r);if(/^on/.test(n)){var o=n.slice(2);return o===s||o===f?(je&&(je=!1,function(){var i=function(e,t){for(var n=new v(t),r=e.length,i=0;i<r;i++){var o=e[i];1===o.nodeType&&a(o,n)}},a=function e(t,n){ve.has(t)&&t.dispatchEvent(n);for(var r=t.children||function(e){for(var t=[],n=e.childNodes,r=n.length,i=0;i<r;i++)1===n[i].nodeType&&t.push(n[i]);return t}(t),i=r.length,o=0;o<i;o++)e(r[o],n)};try{new MutationObserver(function(e){for(var t=e.length,n=0;n<t;n++){var r=e[n];i(r.removedNodes,f),i(r.addedNodes,s)}}).observe(document,{subtree:!0,childList:!0})}catch(e){document.addEventListener("DOMNodeRemoved",function(e){i([e.target],f)},!1),document.addEventListener("DOMNodeInserted",function(e){i([e.target],s)},!1)}}()),ve.add(t)):n.toLowerCase()in t&&(o=o.toLowerCase()),function(e){i!==e&&(i&&t.removeEventListener(o,i,!1),(i=e)&&t.addEventListener(o,e,!1))}}if("data"===n||!r&&n in t)return function(e){i!==e&&(i=e,t[n]!==e&&null==(t[n]=e)&&t.removeAttribute(n))};if(n in A.attributes)return function(e){i=A.attributes[n](t,e),t.setAttribute(n,null==i?"":i)};var a=!1,u=e.cloneNode(!0);return function(e){i!==e&&(i=e,u.value!==e&&(null==e?(a&&(a=!1,t.removeAttributeNode(u)),u.value=e):(u.value=e,a||(a=!0,t.setAttributeNode(u)))))}},Ee=function(n){var r=void 0;return function e(t){r!==t&&("object"==typeof(r=t)&&t?ye(t)?t.then(e):"placeholder"in t?we(t,e):e("text"in t?String(t.text):"any"in t?t.any:"html"in t?[].concat(t.html).join(""):"length"in t?Q.call(t).join(""):A.invoke(t,e)):n.textContent=null==t?"":t)}},Ce={create:function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=ie(e,o.path);switch(o.type){case"any":n.push(Ne(a,[]));break;case"attr":n.push(xe(a,o.name,o.node));break;case"text":n.push(Ee(a)),a.textContent=""}}return n},find:function e(t,n,r){for(var i=t.childNodes,o=i.length,a=0;a<o;a++){var u=i[a];switch(u.nodeType){case 1:be(u,n,r),e(u,n,r);break;case 8:u.textContent===b&&(r.shift(),n.push(d.test(t.nodeName)?re("text",t):re("any",u)));break;case 3:d.test(t.nodeName)&&g.call(u.textContent)===h&&(r.shift(),n.push(re("text",t)))}}}},je=!0;var Ae=new p,ke=function(){try{var e=new p,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(t){return new i}}();function Te(e){var t=Ae.get(this);return t&&t.template===U(e)?Oe.apply(t.updates,arguments):function(e){e=U(e);var t=ke.get(e)||function(e){var t=[],n=e.join(h).replace(De,Pe),r=G(this,n);Ce.find(r,t,e.slice());var i={fragment:r,paths:t};return ke.set(e,i),i}.call(this,e),n=K(this.ownerDocument,t.fragment),r=Ce.create(n,t.paths);Ae.set(this,{template:e,updates:r}),Oe.apply(r,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}function Oe(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}var Se,Le,Me,$e,De=R,Pe=function(e,t,n){return r.test(t)?e:"<"+t+n+"></"+t+">"},Be=new p,Re=function(n){var r=void 0,i=void 0,o=void 0,a=void 0,u=void 0;return function(e){e=U(e);var t=a!==e;return t&&(a=e,o=O(document),i="svg"===n?document.createElementNS(c,"svg"):o,u=Te.bind(i)),u.apply(null,arguments),t&&("svg"===n&&I(o,Q.call(i.childNodes)),r=He(o)),r}},_e=function(e,t){var n=t.indexOf(":"),r=Be.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||Be.set(e,r={}),r[i]||(r[i]=Re(t))},He=function(e){for(var t=e.childNodes,n=t.length,r=[],i=0;i<n;i++){var o=t[i];1!==o.nodeType&&0===g.call(o.textContent).length||r.push(o)}return 1===r.length?r[0]:new te(r)},ze=A.define;function Fe(e){return arguments.length<2?null==e?Re("html"):"string"==typeof e?Fe.wire(null,e):"raw"in e?Re("html")(e):"nodeType"in e?Fe.bind(e):_e(e,"html"):("raw"in e?Re("html"):Fe.wire).apply(null,arguments)}return Fe.Component=w,Fe.bind=function(e){return Te.bind(e)},Fe.define=ze,Fe.diff=he,(Fe.hyper=Fe).wire=function(e,t){return null==e?Re(t||"html"):_e(e,t||"html")},Se=Re,Le=new p,Me=Object.create,$e=function(e,t){var n={w:null,p:null};return t.set(e,n),n},Object.defineProperties(w,{for:{configurable:!0,value:function(e,t){return function(e,t,n,r){var i,o,a,u=t.get(e)||$e(e,t);switch(typeof r){case"object":case"function":var l=u.w||(u.w=new p);return l.get(r)||(i=l,o=r,a=new e(n),i.set(o,a),a);default:var c=u.p||(u.p=Me(null));return c[r]||(c[r]=new e(n))}}(this,Le.get(e)||(n=e,r=new i,Le.set(n,r),r),e,null==t?"default":t);var n,r}}}),Object.defineProperties(w.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:u("html",Se),svg:u("svg",Se),state:u("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return!1!==t&&this.render(),this}}}),Fe}(window);
/* unused harmony default export */ var _unused_webpack_default_export = (hyperHTML);
const {Component, bind, define, diff, hyper, wire} = hyperHTML;
/* harmony export (immutable) */ __webpack_exports__["b"] = Component;

/* harmony export (immutable) */ __webpack_exports__["a"] = bind;

/* harmony export (immutable) */ __webpack_exports__["c"] = define;

/* unused harmony export diff */

/* harmony export (immutable) */ __webpack_exports__["e"] = hyper;

/* harmony export (immutable) */ __webpack_exports__["d"] = wire;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return weakly; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_poorlyfills_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_easy_dom_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_Wire_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__render_js__ = __webpack_require__(7);







// all wires used per each context
const wires = new __WEBPACK_IMPORTED_MODULE_1__shared_poorlyfills_js__["a" /* WeakMap */];

// A wire is a callback used as tag function
// to lazily relate a generic object to a template literal.
// hyper.wire(user)`<div id=user>${user.name}</div>`; => the div#user
// This provides the ability to have a unique DOM structure
// related to a unique JS object through a reusable template literal.
// A wire can specify a type, as svg or html, and also an id
// via html:id or :id convention. Such :id allows same JS objects
// to be associated to different DOM structures accordingly with
// the used template literal without losing previously rendered parts.
const wire = (obj, type) => obj == null ?
  content(type || 'html') :
  weakly(obj, type || 'html');

// A wire content is a virtual reference to one or more nodes.
// It's represented by either a DOM node, or an Array.
// In both cases, the wire content role is to simply update
// all nodes through the list of related callbacks.
// In few words, a wire content is like an invisible parent node
// in charge of updating its content like a bound element would do.
const content = type => {
  let wire, container, content, template, updates;
  return function (statics) {
    statics = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["a" /* unique */])(statics);
    let setup = template !== statics;
    if (setup) {
      template = statics;
      content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_easy_dom_js__["a" /* fragment */])(document);
      container = type === 'svg' ?
        document.createElementNS(__WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["a" /* SVG_NAMESPACE */], 'svg') :
        content;
      updates = __WEBPACK_IMPORTED_MODULE_5__render_js__["a" /* default */].bind(container);
    }
    updates.apply(null, arguments);
    if (setup) {
      if (type === 'svg') {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["b" /* append */])(content, __WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["c" /* slice */].call(container.childNodes));
      }
      wire = wireContent(content);
    }
    return wire;
  };
};

// wires are weakly created through objects.
// Each object can have multiple wires associated
// and this is thanks to the type + :id feature.
const weakly = (obj, type) => {
  const i = type.indexOf(':');
  let wire = wires.get(obj);
  let id = type;
  if (-1 < i) {
    id = type.slice(i + 1);
    type = type.slice(0, i) || 'html';
  }
  if (!wire) wires.set(obj, wire = {});
  return wire[id] || (wire[id] = content(type));
};

// a document fragment loses its nodes as soon
// as it's appended into another node.
// This would easily lose wired content
// so that on a second render call, the parent
// node wouldn't know which node was there
// associated to the interpolation.
// To prevent hyperHTML to forget about wired nodes,
// these are either returned as Array or, if there's ony one entry,
// as single referenced node that won't disappear from the fragment.
// The initial fragment, at this point, would be used as unique reference.
const wireContent = node => {
  const childNodes = node.childNodes;
  const length = childNodes.length;
  const wireNodes = [];
  for (let i = 0; i < length; i++) {
    let child = childNodes[i];
    if (
      child.nodeType === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["b" /* ELEMENT_NODE */] ||
      __WEBPACK_IMPORTED_MODULE_1__shared_poorlyfills_js__["b" /* trim */].call(child.textContent).length !== 0
    ) {
      wireNodes.push(child);
    }
  }
  return wireNodes.length === 1 ? wireNodes[0] : new __WEBPACK_IMPORTED_MODULE_4__classes_Wire_js__["a" /* default */](wireNodes);
};


/* harmony default export */ __webpack_exports__["a"] = (wire);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bind */
/* unused harmony export define */
/* unused harmony export hyper */
/* harmony export (immutable) */ __webpack_exports__["a"] = hyper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Component_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Intent_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hyper_render_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_domdiff_js__ = __webpack_require__(9);
/* unused harmony reexport Component */
/* unused harmony reexport diff */
/* unused harmony reexport wire */
/*! (c) Andrea Giammarchi (ISC) */







// all functions are self bound to the right context
// you can do the following
// const {bind, wire} = hyperHTML;
// and use them right away: bind(node)`hello!`;
const bind = context => __WEBPACK_IMPORTED_MODULE_3__hyper_render_js__["a" /* default */].bind(context);
const define = __WEBPACK_IMPORTED_MODULE_1__objects_Intent_js__["a" /* default */].define;

hyper.Component = __WEBPACK_IMPORTED_MODULE_0__classes_Component_js__["a" /* default */];
hyper.bind = bind;
hyper.define = define;
hyper.diff = __WEBPACK_IMPORTED_MODULE_4__shared_domdiff_js__["a" /* default */];
hyper.hyper = hyper;
hyper.wire = __WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["a" /* default */];

// the wire content is the lazy defined
// html or svg property of each hyper.Component
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__classes_Component_js__["b" /* setup */])(__WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["b" /* content */]);

// everything is exported directly or through the
// hyperHTML callback, when used as top level script


// by default, hyperHTML is a smart function
// that "magically" understands what's the best
// thing to do with passed arguments
function hyper(HTML) {
  return arguments.length < 2 ?
    (HTML == null ?
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["b" /* content */])('html') :
      (typeof HTML === 'string' ?
        hyper.wire(null, HTML) :
        ('raw' in HTML ?
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["b" /* content */])('html')(HTML) :
          ('nodeType' in HTML ?
            hyper.bind(HTML) :
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["c" /* weakly */])(HTML, 'html')
          )
        )
      )) :
    ('raw' in HTML ?
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["b" /* content */])('html') : hyper.wire
    ).apply(null, arguments);
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(0);


// every template literal interpolation indicates
// a precise target in the DOM the template is representing.
// `<p id=${'attribute'}>some ${'content'}</p>`
// hyperHTML finds only once per template literal,
// hence once per entire application life-cycle,
// all nodes that are related to interpolations.
// These nodes are stored as indexes used to retrieve,
// once per upgrade, nodes that will change on each future update.
// A path example is [2, 0, 1] representing the operation:
// node.childNodes[2].childNodes[0].childNodes[1]
// Attributes are addressed via their owner node and their name.
const createPath = node => {
  const path = [];
  let parentNode;
  switch (node.nodeType) {
    case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["b" /* ELEMENT_NODE */]:
    case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["k" /* DOCUMENT_FRAGMENT_NODE */]:
      parentNode = node;
      break;
    case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["h" /* COMMENT_NODE */]:
      parentNode = node.parentNode;
      prepend(path, parentNode, node);
      break;
    default:
      parentNode = node.ownerElement;
      break;
  }
  for (
    node = parentNode;
    (parentNode = parentNode.parentNode);
    node = parentNode
  ) {
    prepend(path, parentNode, node);
  }
  return path;
};

const prepend = (path, parent, node) => {
  path.unshift(path.indexOf.call(parent.childNodes, node));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  create: (type, node, name) => ({type, name, node, path: createPath(node)}),
  find: (node, path) => {
    const length = path.length;
    for (let i = 0; i < length; i++) {
      node = node.childNodes[path[i]];
    }
    return node;
  }
});


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/constants.js
const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

// style is handled as both string and object
// even if the target is an SVG element (consistency)
/* harmony default export */ __webpack_exports__["a"] = ((node, original, isSVG) => {
  if (isSVG) {
    const style = original.cloneNode(true);
    style.value = '';
    node.setAttributeNode(style);
    return update(style, isSVG);
  }
  return update(node.style, isSVG);
});

// the update takes care or changing/replacing
// only properties that are different or
// in case of string, the whole node
const update = (style, isSVG) => {
  let oldType, oldValue;
  return newValue => {
    switch (typeof newValue) {
      case 'object':
        if (newValue) {
          if (oldType === 'object') {
            if (!isSVG) {
              if (oldValue !== newValue) {
                for (const key in oldValue) {
                  if (!(key in newValue)) {
                    style[key] = '';
                  }
                }
              }
            }
          } else {
            if (isSVG) style.value = '';
            else style.cssText = '';
          }
          const info = isSVG ? {} : style;
          for (const key in newValue) {
            const value = newValue[key];
            info[key] = typeof value === 'number' &&
                        !IS_NON_DIMENSIONAL.test(key) ?
                          (value + 'px') : value;
          }
          oldType = 'object';
          if (isSVG) style.value = toStyle((oldValue = info));
          else oldValue = newValue;
          break;
        }
      default:
        if (oldValue != newValue) {
          oldType = 'string';
          oldValue = newValue;
          if (isSVG) style.value = newValue || '';
          else style.cssText = newValue || '';
        }
        break;
    }
  };
};

const hyphen = /([^A-Z])([A-Z]+)/g;
const ized = ($0, $1, $2) => $1 + '-' + $2.toLowerCase();
const toStyle = object => {
  const css = [];
  for (const key in object) {
    css.push(key.replace(hyphen, ized), ':', object[key], ';');
  }
  return css.join('');
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Component_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Wire_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Path_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Style_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Intent_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_easy_dom_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_poorlyfills_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_utils_js__ = __webpack_require__(3);








// see /^script$/i.test(nodeName) bit down here
// import { create as createElement, text } from '../shared/easy-dom.js';




// hyper.Component have a connected/disconnected
// mechanism provided by MutationObserver
// This weak set is used to recognize components
// as DOM node that needs to trigger connected/disconnected events
const components = new __WEBPACK_IMPORTED_MODULE_8__shared_poorlyfills_js__["d" /* WeakSet */];

// a basic dictionary used to filter already cached attributes
// while looking for special hyperHTML values.
function Cache() {}
Cache.prototype = Object.create(null);

// returns an intent to explicitly inject content as html
const asHTML = html => ({html});

// returns nodes from wires and components
const asNode = (item, i) => {
  return 'ELEMENT_NODE' in item ?
    item :
    (item.constructor === __WEBPACK_IMPORTED_MODULE_2__classes_Wire_js__["a" /* default */] ?
      // in the Wire case, the content can be
      // removed, post-pended, inserted, or pre-pended and
      // all these cases are handled by domdiff already
      /* istanbul ignore next */
      ((1 / i) < 0 ?
        (i ? item.remove() : item.last) :
        (i ? item.insert() : item.first)) :
      asNode(item.render(), i));
}

// returns true if domdiff can handle the value
const canDiff = value =>  'ELEMENT_NODE' in value ||
value instanceof __WEBPACK_IMPORTED_MODULE_2__classes_Wire_js__["a" /* default */] ||
value instanceof __WEBPACK_IMPORTED_MODULE_1__classes_Component_js__["a" /* default */];

// updates are created once per context upgrade
// within the main render function (../hyper/render.js)
// These are an Array of callbacks to invoke passing
// each interpolation value.
// Updates can be related to any kind of content,
// attributes, or special text-only cases such <style>
// elements or <textarea>
const create = (root, paths) => {
  const updates = [];
  const length = paths.length;
  for (let i = 0; i < length; i++) {
    const info = paths[i];
    const node = __WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].find(root, info.path);
    switch (info.type) {
      case 'any':
        updates.push(setAnyContent(node, []));
        break;
      case 'attr':
        updates.push(setAttribute(node, info.name, info.node));
        break;
      case 'text':
        updates.push(setTextContent(node));
        node.textContent = '';
        break;
    }
  }
  return updates;
};

// finding all paths is a one-off operation performed
// when a new template literal is used.
// The goal is to map all target nodes that will be
// used to update content/attributes every time
// the same template literal is used to create content.
// The result is a list of paths related to the template
// with all the necessary info to create updates as
// list of callbacks that target directly affected nodes.
const find = (node, paths, parts) => {
  const childNodes = node.childNodes;
  const length = childNodes.length;
  for (let i = 0; i < length; i++) {
    let child = childNodes[i];
    switch (child.nodeType) {
      case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["b" /* ELEMENT_NODE */]:
        findAttributes(child, paths, parts);
        find(child, paths, parts);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["h" /* COMMENT_NODE */]:
        if (child.textContent === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["d" /* UID */]) {
          parts.shift();
          paths.push(
            // basicHTML or other non standard engines
            // might end up having comments in nodes
            // where they shouldn't, hence this check.
            __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["i" /* SHOULD_USE_TEXT_CONTENT */].test(node.nodeName) ?
              __WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].create('text', node) :
              __WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].create('any', child)
          );
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["j" /* TEXT_NODE */]:
        // the following ignore is actually covered by browsers
        // only basicHTML ends up on previous COMMENT_NODE case
        // instead of TEXT_NODE because it knows nothing about
        // special style or textarea behavior
        /* istanbul ignore if */
        if (
          __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["i" /* SHOULD_USE_TEXT_CONTENT */].test(node.nodeName) &&
          __WEBPACK_IMPORTED_MODULE_8__shared_poorlyfills_js__["b" /* trim */].call(child.textContent) === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["e" /* UIDC */]
        ) {
          parts.shift();
          paths.push(__WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].create('text', node));
        }
        break;
    }
  }
};

// attributes are searched via unique hyperHTML id value.
// Despite HTML being case insensitive, hyperHTML is able
// to recognize attributes by name in a caseSensitive way.
// This plays well with Custom Elements definitions
// and also with XML-like environments, without trusting
// the resulting DOM but the template literal as the source of truth.
// IE/Edge has a funny bug with attributes and these might be duplicated.
// This is why there is a cache in charge of being sure no duplicated
// attributes are ever considered in future updates.
const findAttributes = (node, paths, parts) => {
  const cache = new Cache;
  const attributes = node.attributes;
  const array = __WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["c" /* slice */].call(attributes);
  const remove = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const attribute = array[i];
    if (attribute.value === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["d" /* UID */]) {
      const name = attribute.name;
      // the following ignore is covered by IE
      // and the IE9 double viewBox test
      /* istanbul ignore else */
      if (!(name in cache)) {
        const realName = parts.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/, '$1');
        cache[name] = attributes[realName] ||
                      // the following ignore is covered by browsers
                      // while basicHTML is already case-sensitive
                      /* istanbul ignore next */
                      attributes[realName.toLowerCase()];
        paths.push(__WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].create('attr', cache[name], realName));
      }
      remove.push(attribute);
    }
  }
  const len = remove.length;
  for (let i = 0; i < len; i++) {
    // Edge HTML bug #16878726
    const attribute = remove[i];
    if (/^id$/i.test(attribute.name))
      node.removeAttribute(attribute.name);
    // standard browsers would work just fine here
    else
      node.removeAttributeNode(remove[i]);
  }

  // This is a very specific Firefox/Safari issue
  // but since it should be a not so common pattern,
  // it's probably worth patching regardless.
  // Basically, scripts created through strings are death.
  // You need to create fresh new scripts instead.
  // TODO: is there any other node that needs such nonsense?
  const nodeName = node.nodeName;
  if (/^script$/i.test(nodeName)) {
    // this used to be like that
    // const script = createElement(node, nodeName);
    // then Edge arrived and decided that scripts created
    // through template documents aren't worth executing
    // so it became this ... hopefully it won't hurt in the wild
    const script = document.createElement(nodeName);
    for (let i = 0; i < attributes.length; i++) {
      script.setAttributeNode(attributes[i].cloneNode(true));
    }
    script.textContent = node.textContent;
    node.parentNode.replaceChild(script, node);
  }
};

// when a Promise is used as interpolation value
// its result must be parsed once resolved.
// This callback is in charge of understanding what to do
// with a returned value once the promise is resolved.
const invokeAtDistance = (value, callback) => {
  callback(value.placeholder);
  if ('text' in value) {
    Promise.resolve(value.text).then(String).then(callback);
  } else if ('any' in value) {
    Promise.resolve(value.any).then(callback);
  } else if ('html' in value) {
    Promise.resolve(value.html).then(asHTML).then(callback);
  } else {
    Promise.resolve(__WEBPACK_IMPORTED_MODULE_5__Intent_js__["a" /* default */].invoke(value, callback)).then(callback);
  }
};

// quick and dirty way to check for Promise/ish values
const isPromise_ish = value => value != null && 'then' in value;

// in a hyper(node)`<div>${content}</div>` case
// everything could happen:
//  * it's a JS primitive, stored as text
//  * it's null or undefined, the node should be cleaned
//  * it's a component, update the content by rendering it
//  * it's a promise, update the content once resolved
//  * it's an explicit intent, perform the desired operation
//  * it's an Array, resolve all values if Promises and/or
//    update the node with the resulting list of content
const setAnyContent = (node, childNodes) => {
  const diffOptions = {node: asNode, before: node};
  let fastPath = false;
  let oldValue;
  const anyContent = value => {
    switch (typeof value) {
      case 'string':
      case 'number':
      case 'boolean':
        if (fastPath) {
          if (oldValue !== value) {
            oldValue = value;
            childNodes[0].textContent = value;
          }
        } else {
          fastPath = true;
          oldValue = value;
          childNodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__["a" /* default */])(
            node.parentNode,
            childNodes,
            [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__shared_easy_dom_js__["d" /* text */])(node, value)],
            diffOptions
          );
        }
        break;
      case 'object':
      case 'undefined':
        if (value == null) {
          fastPath = false;
          childNodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__["a" /* default */])(
            node.parentNode,
            childNodes,
            [],
            diffOptions
          );
          break;
        }
      default:
        fastPath = false;
        oldValue = value;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__shared_poorlyfills_js__["e" /* isArray */])(value)) {
          if (value.length === 0) {
            if (childNodes.length) {
              childNodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__["a" /* default */])(
                node.parentNode,
                childNodes,
                [],
                diffOptions
              );
            }
          } else {
            switch (typeof value[0]) {
              case 'string':
              case 'number':
              case 'boolean':
                anyContent({html: value});
                break;
              case 'object':
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__shared_poorlyfills_js__["e" /* isArray */])(value[0])) {
                  value = value.concat.apply([], value);
                }
                if (isPromise_ish(value[0])) {
                  Promise.all(value).then(anyContent);
                  break;
                }
              default:
                childNodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__["a" /* default */])(
                  node.parentNode,
                  childNodes,
                  value,
                  diffOptions
                );
                break;
            }
          }
        } else if (canDiff(value)) {
          childNodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__["a" /* default */])(
            node.parentNode,
            childNodes,
            value.nodeType === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["k" /* DOCUMENT_FRAGMENT_NODE */] ?
              __WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["c" /* slice */].call(value.childNodes) :
              [value],
            diffOptions
          );
        } else if (isPromise_ish(value)) {
          value.then(anyContent);
        } else if ('placeholder' in value) {
          invokeAtDistance(value, anyContent);
        } else if ('text' in value) {
          anyContent(String(value.text));
        } else if ('any' in value) {
          anyContent(value.any);
        } else if ('html' in value) {
          childNodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__["a" /* default */])(
            node.parentNode,
            childNodes,
            __WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["c" /* slice */].call(
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["f" /* createFragment */])(
                node,
                [].concat(value.html).join('')
              ).childNodes
            ),
            diffOptions
          );
        } else if ('length' in value) {
          anyContent(__WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["c" /* slice */].call(value));
        } else {
          anyContent(__WEBPACK_IMPORTED_MODULE_5__Intent_js__["a" /* default */].invoke(value, anyContent));
        }
        break;
    }
  };
  return anyContent;
};

// there are four kind of attributes, and related behavior:
//  * events, with a name starting with `on`, to add/remove event listeners
//  * special, with a name present in their inherited prototype, accessed directly
//  * regular, accessed through get/setAttribute standard DOM methods
//  * style, the only regular attribute that also accepts an object as value
//    so that you can style=${{width: 120}}. In this case, the behavior has been
//    fully inspired by Preact library and its simplicity.
const setAttribute = (node, name, original) => {
  const isSVG = __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["f" /* OWNER_SVG_ELEMENT */] in node;
  let oldValue;
  // if the attribute is the style one
  // handle it differently from others
  if (name === 'style') {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Style_js__["a" /* default */])(node, original, isSVG);
  }
  // the name is an event one,
  // add/remove event listeners accordingly
  else if (/^on/.test(name)) {
    let type = name.slice(2);
    if (type === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["l" /* CONNECTED */] || type === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["m" /* DISCONNECTED */]) {
      if (notObserving) {
        notObserving = false;
        observe();
      }
      components.add(node);
    }
    else if (name.toLowerCase() in node) {
      type = type.toLowerCase();
    }
    return newValue => {
      if (oldValue !== newValue) {
        if (oldValue) node.removeEventListener(type, oldValue, false);
        oldValue = newValue;
        if (newValue) node.addEventListener(type, newValue, false);
      }
    };
  }
  // the attribute is special ('value' in input)
  // and it's not SVG *or* the name is exactly data,
  // in this case assign the value directly
  else if (name === 'data' || (!isSVG && name in node)) {
    return newValue => {
      if (oldValue !== newValue) {
        oldValue = newValue;
        if (node[name] !== newValue) {
          node[name] = newValue;
          if (newValue == null) {
            node.removeAttribute(name);
          }
        }
      }
    };
  }
  else if (name in __WEBPACK_IMPORTED_MODULE_5__Intent_js__["a" /* default */].attributes) {
    return any => {
      oldValue = __WEBPACK_IMPORTED_MODULE_5__Intent_js__["a" /* default */].attributes[name](node, any);
      node.setAttribute(name, oldValue == null ? '' : oldValue);
    };
  }
  // in every other case, use the attribute node as it is
  // update only the value, set it as node only when/if needed
  else {
    let owner = false;
    const attribute = original.cloneNode(true);
    return newValue => {
      if (oldValue !== newValue) {
        oldValue = newValue;
        if (attribute.value !== newValue) {
          if (newValue == null) {
            if (owner) {
              owner = false;
              node.removeAttributeNode(attribute);
            }
            attribute.value = newValue;
          } else {
            attribute.value = newValue;
            if (!owner) {
              owner = true;
              node.setAttributeNode(attribute);
            }
          }
        }
      }
    };
  }
};

// style or textareas don't accept HTML as content
// it's pointless to transform or analyze anything
// different from text there but it's worth checking
// for possible defined intents.
const setTextContent = node => {
  let oldValue;
  const textContent = value => {
    if (oldValue !== value) {
      oldValue = value;
      if (typeof value === 'object' && value) {
        if (isPromise_ish(value)) {
          value.then(textContent);
        } else if ('placeholder' in value) {
          invokeAtDistance(value, textContent);
        } else if ('text' in value) {
          textContent(String(value.text));
        } else if ('any' in value) {
          textContent(value.any);
        } else if ('html' in value) {
          textContent([].concat(value.html).join(''));
        } else if ('length' in value) {
          textContent(__WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["c" /* slice */].call(value).join(''));
        } else {
          textContent(__WEBPACK_IMPORTED_MODULE_5__Intent_js__["a" /* default */].invoke(value, textContent));
        }
      } else {
        node.textContent = value == null ? '' : value;
      }
    }
  };
  return textContent;
};

/* harmony default export */ __webpack_exports__["a"] = ({create, find});

// hyper.Components might need connected/disconnected notifications
// used by components and their onconnect/ondisconnect callbacks.
// When one of these callbacks is encountered,
// the document starts being observed.
let notObserving = true;
function observe() {

  // when hyper.Component related DOM nodes
  // are appended or removed from the live tree
  // these might listen to connected/disconnected events
  // This utility is in charge of finding all components
  // involved in the DOM update/change and dispatch
  // related information to them
  const dispatchAll = (nodes, type) => {
    const event = new __WEBPACK_IMPORTED_MODULE_8__shared_poorlyfills_js__["f" /* Event */](type);
    const length = nodes.length;
    for (let i = 0; i < length; i++) {
      let node = nodes[i];
      if (node.nodeType === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["b" /* ELEMENT_NODE */]) {
        dispatchTarget(node, event);
      }
    }
  };

  // the way it's done is via the components weak set
  // and recursively looking for nested components too
  const dispatchTarget = (node, event) => {
    if (components.has(node)) {
      node.dispatchEvent(event);
    }

    /* istanbul ignore next */
    const children = node.children || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["g" /* getChildren */])(node);
    const length = children.length;
    for (let i = 0; i < length; i++) {
      dispatchTarget(children[i], event);
    }
  }

  // The MutationObserver is the best way to implement that
  // but there is a fallback to deprecated DOMNodeInserted/Removed
  // so that even older browsers/engines can help components life-cycle
  try {
    (new MutationObserver(records => {
      const length = records.length;
      for (let i = 0; i < length; i++) {
        let record = records[i];
        dispatchAll(record.removedNodes, __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["m" /* DISCONNECTED */]);
        dispatchAll(record.addedNodes, __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["l" /* CONNECTED */]);
      }
    })).observe(document, {subtree: true, childList: true});
  } catch(o_O) {
    document.addEventListener('DOMNodeRemoved', event => {
      dispatchAll([event.target], __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["m" /* DISCONNECTED */]);
    }, false);
    document.addEventListener('DOMNodeInserted', event => {
      dispatchAll([event.target], __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["l" /* CONNECTED */]);
    }, false);
  }
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__easy_dom_js__ = __webpack_require__(1);


const testFragment = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__easy_dom_js__["a" /* fragment */])(document);

// DOM4 node.append(...many)
const hasAppend = 'append' in testFragment;
/* harmony export (immutable) */ __webpack_exports__["a"] = hasAppend;


// detect old browsers without HTMLTemplateElement content support
const hasContent = 'content' in __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__easy_dom_js__["c" /* create */])(document, 'template');
/* harmony export (immutable) */ __webpack_exports__["d"] = hasContent;


// IE 11 has problems with cloning templates: it "forgets" empty childNodes
testFragment.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__easy_dom_js__["d" /* text */])(testFragment, 'g'));
testFragment.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__easy_dom_js__["d" /* text */])(testFragment, ''));
const hasDoomedCloneNode = testFragment.cloneNode(true).childNodes.length === 1;
/* harmony export (immutable) */ __webpack_exports__["b"] = hasDoomedCloneNode;


// old browsers need to fallback to cloneNode
// Custom Elements V0 and V1 will work polyfilled
// but native implementations need importNode instead
// (specially Chromium and its old V0 implementation)
const hasImportNode = 'importNode' in document;
/* harmony export (immutable) */ __webpack_exports__["c"] = hasImportNode;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperhtml_element__ = __webpack_require__(4);




class AddressElement extends __WEBPACK_IMPORTED_MODULE_0_hyperhtml_element__["a" /* default */] {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        // const observer = new MutationObserver(changes => this.render());
        // observer.observe(this, {childList: true});
    }

    static get observedAttributes() {
        return ['address'];
    }

    get address() {
        const value = this.getAttribute('address');
        return value && JSON.parse(value);
    }

    set address(value) {
        if (!value) {
            this.removeAttribute('address');
            this.setState({address: null});
        }
        else {
            this.setAttribute('address', JSON.stringify(value));
            this.setState({address: this.address});
        }
    }

    attributeChangedCallback(name, prev, curr) {
        this.render();
    }

    render() {
        // when using without shadowDom and slot
        // const customButtonElem = this.querySelectorAll("button");
        // return this.html`
        //     Street: ${this.state.address.street}<br/>
        //     City: ${this.state.address.city} <br/>
        //     Custom button: ${customButtonElem}<br/>
        //     End of things`;


        return this.html`
            Street: ${this.state.address.street}<br/>
            City: ${this.state.address.city} <br/>
            Custom button: <slot></slot><br/>
            End of things`;
    }

    get defaultState() {
        return {address: this.address || {}};
    }
}

AddressElement.define('my-address');

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperhtml__ = __webpack_require__(14);


class Wrapper extends HTMLElement {
    constructor() {
        super();
        this.hyper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperhtml__["a" /* default */])(this);


        this.buttons = [0, 1, 2, 3];
        this.callbacks = [console.log, console.log, console.log, console.log];
        this.render();
    }

    onClick(text) {
        console.log(`Button says ${text}`)
    }

    render() {
        const buttons = this.buttons.map(btn => {
            const button = __WEBPACK_IMPORTED_MODULE_0_hyperhtml__["a" /* default */].wire({ btn })`<x-button text="Click me" props=${this.getButtonPropsForIndex(btn)}></x-button>`;

            return button;
        });

        this.hyper`${buttons}`;
    }

    getButtonPropsForIndex(i) {
        return {
            onButtonClick: this.callbacks[i],
            messages: {
                onClick: `Hello ${i}`
            }
        }
    }
}



class Button extends HTMLElement {

    get props() {
        return this._props;
    }

    set props(value) {
        this._props = value;
    }

    constructor() {
        super();
        this.hyper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperhtml__["a" /* default */])(this);
        console.log(this.props);
        console.log(this.getAttribute('text'));
        this.hyper`<button onClick="${() => this.onClick()}">${this.getAttribute('text')}</button>`;
    }

    onClick() {
        this.props.onButtonClick(this.props.messages.onClick);
    }
}




customElements.define('x-button', Button);
customElements.define('x-wrapper', Wrapper);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperhtml_element__ = __webpack_require__(4);



class BioComponent extends __WEBPACK_IMPORTED_MODULE_0_hyperhtml_element__["a" /* default */] {

    static get observedAttributes() {
        return ['props'];
    }

    // todo: check if we have received props through an attribute. maybe in created or connected?
    get props() {
        return this._props;
    }

    // when setting "props" as a property, exepct an object
    set props(value) {
        this._props = value;
        this.render(); // assume, that an element is already in the dom and we change its props -- then we need to re-render...
        // when going through attributes, HyperHTMLElement automatically triggers render for us
    }
}


class Slide extends BioComponent {

}

Slide.define('x-slide');

class Slider extends BioComponent {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // re-render when children have changed. Note that childNodes is empty when connectedCallback is called
        // note also, that created() is called when initial childNodes are available. so maybe only re-render
        // on child note changes after created has been called
        const observer = new MutationObserver(changes => this.render());
        observer.observe(this, {childList: true});
    }

    attributeChangedCallback(name, prev, curr) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    get defaultProps() {
        return {selected: 0};
    }

    render() {
        const slides = [...this.childNodes].filter((n) => n instanceof Slide);
        const slidesCount = slides.length;
        const props = this.props || this.defaultProps;

        return this.html`
            <div class="slides">
                <slot></slot>
            </div>
            <x-dots 
                props=${ {count: slidesCount, selected: props.selected} }
                onselectSlide=${e => this.onSelectSlide(e)}></x-dots>
        `;
    }

    onSelectSlide(e) {
        this.props = {selected: e.detail};
    }
}

Slider.define('x-slider');

class Dots extends BioComponent {

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, prev, curr) {
        this.render();
    }

    render() {
        const {selected} = this.props;
        const dots = new Array(this.props.count).fill(1);

        const dotElements = dots.map((_, idx) => selected === idx
            ? BioComponent.wire()`<li onclick=${() => this.onSelected(idx)}><b>+</b></li>`
            : BioComponent.wire()`<li onclick=${() => this.onSelected(idx)}>+</li>`);

        this.html`
            <ul>${dotElements}</ul>
        `;
    }

    onSelected(index) {
        const selectEvent = new CustomEvent('selectSlide', {
            bubbles: true,
            cancelable: true,
            detail: index
        });

        this.dispatchEvent(selectEvent);
    }
}

Dots.define('x-dots');


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map