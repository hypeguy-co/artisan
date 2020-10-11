"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = require("../Text");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

;

var Footer = function Footer(_ref) {
  var children = _ref.children,
      borderColorized = _ref.borderColorized,
      props = _objectWithoutProperties(_ref, ["children", "borderColorized"]);

  var isString = typeof children === 'string';
  var wrapperComp = isString ? /*#__PURE__*/_react["default"].createElement(_Text.Text, _extends({
    mt: "24px",
    align: "center",
    textTransform: "uppercase",
    fontSize: "14px",
    colorized: true
  }, props), children) : children;
  return /*#__PURE__*/_react["default"].createElement(_.Box, null, wrapperComp);
};

var _default = Footer;
exports["default"] = _default;
//# sourceMappingURL=BoxFooter.js.map