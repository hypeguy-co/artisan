"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderFormatedString = exports.checkMarkdownMarkup = exports.promiseAllNamed = exports.fetchResources = exports.ResolveKeyMemoized = exports.replaceData = void 0;

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var path = require('path');

var ResolveKey = function ResolveKey(label, obj) {
  if (!obj) {
    return label;
  }

  return label.split('.').reduce(function (prev, curr) {
    return prev[curr] || false;
  }, obj);
};

var replaceData = function replaceData(text, data) {
  return text.replace(/\$\(([^)]+)?\)/g, function ($1, $2) {
    return data[$2];
  });
};

exports.replaceData = replaceData;
var ResolveKeyMemoized = (0, _memoizeOne["default"])(ResolveKey);
exports.ResolveKeyMemoized = ResolveKeyMemoized;

var fetchResources = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(lang, mod, basePath) {
    var directResult,
        resource,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            directResult = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
            _context.next = 3;
            return Promise.resolve("../../../src/languages/".concat(lang, "/").concat(mod, ".json")).then(function (s) {
              return _interopRequireWildcard(require(s));
            });

          case 3:
            resource = _context.sent;

            if (!directResult) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", resource["default"]);

          case 6:
            return _context.abrupt("return", _defineProperty({}, lang, _defineProperty({}, mod, resource["default"])));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchResources(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchResources = fetchResources;

var promiseAllNamed = function promiseAllNamed(nameToPromise) {
  var entries = Object.entries(nameToPromise);
  return Promise.all(entries.map(function (e) {
    return e[1];
  })).then(function (results) {
    var nameToResult = {};

    for (var i = 0; i < results.length; ++i) {
      var name = entries[i][0];
      nameToResult[name] = results[i];
    }

    return nameToResult;
  });
};

exports.promiseAllNamed = promiseAllNamed;

var checkMarkdownMarkup = function checkMarkdownMarkup(text) {
  return text.includes('*') || text.includes('__') || text.includes('~') || text.includes('[') && text.includes(']');
};

exports.checkMarkdownMarkup = checkMarkdownMarkup;

var renderFormatedString = function renderFormatedString(text) {
  var markdownLink = /\[([^\]]*)\]\(([^)]*)\)/gm;
  var italicText = /__([^_]+)__/gm;
  return text.split('*').map(function (sentence, index) {
    if (index % 2 !== 0) return "<strong>".concat(sentence, "</strong>");
    return sentence;
  }).join('').replace(italicText, '<em>$1<em>').split('~').map(function (sentence, index) {
    if (index % 2 !== 0) return "<ins>".concat(sentence, "</ins>");
    return sentence;
  }).join('').replace(markdownLink, function (r, hrefText, props) {
    var _props$split = props.split(' '),
        _props$split2 = _toArray(_props$split),
        href = _props$split2[0],
        attributes = _props$split2.slice(1);

    return "<a class=\"translate-link text-small\" ".concat(attributes.join(' '), " href=\"").concat(href, "\">").concat(hrefText, "</a>");
  });
};

exports.renderFormatedString = renderFormatedString;
//# sourceMappingURL=utils.js.map