"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = require("../Text");

var _Box = require("../Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListTitle = function ListTitle(_ref) {
  var title = _ref.title,
      children = _ref.children;
  // The size prop affects the height of the button
  // but I can still override it by passing a custom height
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, null, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    mt: {
      base: 4,
      md: 0
    },
    mr: 6,
    display: "block"
  }, title), /*#__PURE__*/_react["default"].createElement(_Box.Box, null, children));
};

var _default = ListTitle;
exports["default"] = _default;
//# sourceMappingURL=ListTitle.js.map