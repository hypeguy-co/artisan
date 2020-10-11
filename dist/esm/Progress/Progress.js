"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = require("../Text");

var _Box = require("../Box");

var _themes = require("../themes");

var _core = require("@chakra-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n& [aria-valuemax] {\n  background: ", ";\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

;
var StyledProgress = (0, _themes.styled)(_core.Progress)(_templateObject(), function (props) {
  return props.valueBackgroundColor;
});

var Progress = function Progress(_ref) {
  var children = _ref.children,
      label = _ref.label,
      borderRadius = _ref.borderRadius,
      backgroundColor = _ref.backgroundColor,
      value = _ref.value,
      _ref$valueTotal = _ref.valueTotal,
      valueTotal = _ref$valueTotal === void 0 ? [] : _ref$valueTotal,
      props = _objectWithoutProperties(_ref, ["children", "label", "borderRadius", "backgroundColor", "value", "valueTotal"]);

  var theme = (0, _themes.useTheme)();
  var backgroundColorCode = backgroundColor;

  var _valueTotal = _slicedToArray(valueTotal, 2),
      current = _valueTotal[0],
      total = _valueTotal[1];

  var _backgroundColorCode$ = backgroundColorCode.split("."),
      _backgroundColorCode$2 = _slicedToArray(_backgroundColorCode$, 2),
      shade = _backgroundColorCode$2[0],
      hue = _backgroundColorCode$2[1];

  if (shade && hue) {
    backgroundColorCode = theme.colors[shade][hue];
  }

  var totalComplete = value || current,
      labelValue = label;

  if (!value && current && total) {
    totalComplete = Number(current) * 100 / Number(total);
  }

  if (!labelValue && current && total) {
    labelValue = "".concat(current, " / ").concat(total);
  }

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    position: "relative"
  }, /*#__PURE__*/_react["default"].createElement(StyledProgress, _extends({
    border: "1px solid",
    borderColor: "primary.500",
    value: Number(totalComplete),
    css: {
      borderRadius: borderRadius,
      backgroundColor: backgroundColorCode
    }
  }, props), /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    textAlign: "center",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1em",
    lineHeight: "1em"
  }, labelValue)), /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    textAlign: "center",
    textTransform: "uppercase",
    colorized: true,
    fontSize: "0.9em",
    lineHeight: "0.9em",
    mt: "8px"
  }, children));
};

var _default = Progress;
exports["default"] = _default;
//# sourceMappingURL=Progress.js.map