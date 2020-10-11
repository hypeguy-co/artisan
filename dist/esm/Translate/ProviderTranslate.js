"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ContextTranslate = _interopRequireDefault(require("./ContextTranslate"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProviderTranslate = function ProviderTranslate(_ref) {
  var language = _ref.language,
      resources = _ref.resources,
      keysLocation = _ref.keysLocation,
      defaultModule = _ref.defaultModule,
      supportedModules = _ref.supportedModules,
      children = _ref.children;

  // Ensures a default modules been set
  if (!supportedModules) {
    supportedModules = [defaultModule];
  }

  var _useState = (0, _react.useState)(language),
      _useState2 = _slicedToArray(_useState, 2),
      stateLanguage = _useState2[0],
      setStateLanguage = _useState2[1];

  var _useState3 = (0, _react.useState)(resources),
      _useState4 = _slicedToArray(_useState3, 2),
      stateResources = _useState4[0],
      setStateResources = _useState4[1];

  var _useState5 = (0, _react.useState)(supportedModules),
      _useState6 = _slicedToArray(_useState5, 2),
      localSupportedModules = _useState6[0],
      setlocalSupportedModules = _useState6[1];

  var addSupportedModule = function addSupportedModule(lang, mod) {
    if (!localSupportedModules.includes(mod)) {
      setlocalSupportedModules([].concat(_toConsumableArray(localSupportedModules), [mod]));
    }
  };

  (0, _react.useEffect)(function () {
    (function () {
      var _autoExecuteAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var asyncResoucers, result, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                asyncResoucers = {};
                localSupportedModules.forEach(function (module) {
                  if (!stateResources[stateLanguage] || !stateResources[stateLanguage][module]) {
                    asyncResoucers[module] = updateResources(stateLanguage, module);
                  }
                });
                _context.next = 4;
                return (0, _utils.promiseAllNamed)(asyncResoucers);

              case 4:
                result = _context.sent;

                if (!(JSON.stringify(result) === '{}')) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", null);

              case 7:
                data = _objectSpread(_objectSpread({}, stateResources), {}, _defineProperty({}, stateLanguage, _objectSpread(_objectSpread({}, stateResources[stateLanguage]), result)));
                return _context.abrupt("return", setStateResources(data));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function autoExecuteAsync() {
        return _autoExecuteAsync.apply(this, arguments);
      }

      return autoExecuteAsync;
    })()();
  }, [stateResources, localSupportedModules, stateLanguage]);

  var updateResources = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(lang, mod) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _utils.fetchResources)(lang, mod, keysLocation, true);

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function updateResources(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var state = {
    resources: stateResources,
    language: stateLanguage,
    keysLocation: keysLocation,
    supportedModules: supportedModules,
    defaultModule: defaultModule
  };
  return /*#__PURE__*/_react["default"].createElement(_ContextTranslate["default"].Provider, {
    value: {
      state: state,
      updateLanguage: setStateLanguage,
      updateResources: updateResources,
      addSupportedModule: addSupportedModule
    }
  }, children);
};

ProviderTranslate.defaultProps = {
  resources: {},
  keysLocation: 'src/languages',
  defaultModule: 'general'
};
var _default = ProviderTranslate;
exports["default"] = _default;
//# sourceMappingURL=ProviderTranslate.js.map