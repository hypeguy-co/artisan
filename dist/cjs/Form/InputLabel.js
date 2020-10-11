"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = require("../Text");

var _core = require("@chakra-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputLabel = function InputLabel(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  return /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    mt: "4px"
  }, /*#__PURE__*/_react["default"].createElement(_core.Input // fontSize=""
  , _extends({
    size: "sm",
    width: "40px",
    height: "1.5rem",
    variant: "flushed",
    textAlign: "center",
    borderBottom: "1px",
    borderColor: "primary.500",
    focusBorderColor: "primary.900"
  }, props)), /*#__PURE__*/_react["default"].createElement(_Text.Text, _extends({
    mt: "3px",
    ml: "16px",
    align: "center",
    fontSize: "14px",
    color: 'primary.500'
  }, props), label));
};

var _default = InputLabel;
exports["default"] = _default;
//# sourceMappingURL=InputLabel.js.map