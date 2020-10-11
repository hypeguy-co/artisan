"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("./");

var _Text = require("../Text");

var _Divider = require("../Divider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

;

var Header = function Header(_ref) {
  var children = _ref.children,
      borderColorized = _ref.borderColorized,
      props = _objectWithoutProperties(_ref, ["children", "borderColorized"]);

  return /*#__PURE__*/_react["default"].createElement(_.Box, props, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    mt: {
      base: 4,
      md: 0
    },
    mr: 6
  }, children), /*#__PURE__*/_react["default"].createElement(_Divider.Divider, {
    align: "left",
    opacity: '0.8',
    fadePercentage: "90%",
    borderColorized: borderColorized
  }));
};

var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=BoxHeader.js.map