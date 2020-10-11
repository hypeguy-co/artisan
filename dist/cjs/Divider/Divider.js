"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@chakra-ui/core");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _colors = require("../utils/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  ", "\n\n  background: ", ";\n\n  ", "\n\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDivider = (0, _styled["default"])(_core.Divider)(_templateObject(), function (props) {
  return props.borderColorized && "\n    border: 0px;\n    \n    &:after{\n      content: ' ';\n      display: block;\n      height: 1px;\n      margin-top: 2px;\n      width: 100%;\n      background: #000;\n      background: ".concat(props.borderColorized, ";\n      }\n    }\n  ");
}, function (props) {
  return props.borderColorized;
}, function (props) {
  return props.align === 'center' && "\n    &:after{\n      background: -webkit-gradient(linear,0 0,100% 0,from(rgba(0,0,0,0)),to(rgba(0,0,0,0)),color-stop(50%,".concat(props.borderColorized, "));\n    }\n  ");
}, function (props) {
  return props.align === 'left' && "\n    &:after{\n      background: linear-gradient(90deg, ".concat(props.borderColorized, " 0%, rgba(0,0,0,0) ").concat(props.fadePercentage, ");\n    }\n  ");
});

var Divider = function Divider(_ref) {
  var borderColorized = _ref.borderColorized,
      props = _objectWithoutProperties(_ref, ["borderColorized"]);

  var theme = (0, _core.useTheme)();
  var componentColor = borderColorized && (0, _colors.isHex)(borderColorized) ? borderColorized : theme.border.colorGradientFade;
  return /*#__PURE__*/React.createElement(StyledDivider, _extends({
    borderColorized: componentColor
  }, props));
};

Divider.defaultProps = {
  fadePercentage: '80%'
};
var _default = Divider;
exports["default"] = _default;
//# sourceMappingURL=Divider.js.map