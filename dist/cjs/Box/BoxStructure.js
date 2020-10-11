"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _themes = require("../themes");

var _BoxHeader = _interopRequireDefault(require("./BoxHeader"));

var _BoxFooter = _interopRequireDefault(require("./BoxFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  \n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledBox = (0, _themes.styled)(_core.Box)(_templateObject(), function (props) {
  return props.theme.content.backgroundColor;
}, function (props) {
  return props.borderColorized && "border: 1px solid ".concat(props.theme.border.color, ";");
}, function (props) {
  return !props.borderRadius && "border-radius: ".concat(props.theme.content.borderRadius, ";");
}, function (props) {
  return props.blurred && "backdrop-filter: blur(".concat(props.theme.content.backgroundBlur, ");");
});
;

var BoxStructure = function BoxStructure(_ref) {
  var children = _ref.children,
      className = _ref.className,
      borderColorized = _ref.borderColorized,
      blurred = _ref.blurred,
      props = _objectWithoutProperties(_ref, ["children", "className", "borderColorized", "blurred"]);

  var header,
      footer,
      content = children;

  if (Array.isArray(children)) {
    header = children.filter(function (child) {
      return child.type === _BoxHeader["default"];
    });
    footer = children.filter(function (child) {
      return child.type === _BoxFooter["default"];
    });
    content = children.filter(function (child) {
      return child.type !== _BoxFooter["default"] && child.type !== _BoxHeader["default"];
    });
  }

  return /*#__PURE__*/_react["default"].createElement(StyledBox, _extends({
    className: className,
    borderColorized: borderColorized,
    blurred: blurred
  }, props), header, content, footer);
};

var _default = BoxStructure;
exports["default"] = _default;
//# sourceMappingURL=BoxStructure.js.map