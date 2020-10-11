"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _themes = require("../themes");

var _colors = require("../utils/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  text-shadow: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// interface TextProps extends  {
// };
var StyledText = (0, _themes.styled)(_core.Text)(_templateObject(), function (props) {
  return props.colorized && "color: ".concat(props.colorized, ";");
}, function (props) {
  return props.theme.text.shadow;
});

var Text = function Text(_ref) {
  var children = _ref.children,
      colorized = _ref.colorized,
      props = _objectWithoutProperties(_ref, ["children", "colorized"]);

  var theme = (0, _core.useTheme)();
  var componentColor = colorized && (0, _colors.isHex)(colorized) ? colorized : theme.colors.colorBase; // In case that colors is only a boolean

  if (typeof colorized === 'boolean') {
    componentColor = theme.colors.primary[500];
  }

  return /*#__PURE__*/_react["default"].createElement(StyledText, _extends({
    colorized: componentColor
  }, props), children);
};

var _default = Text;
exports["default"] = _default;
//# sourceMappingURL=Text.js.map