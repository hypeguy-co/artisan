"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ImageTheme = function ImageTheme(_ref) {
  var src = _ref.src;
  var theme = (0, _core.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_core.Image, {
    src: "themes/".concat(theme.name, "/").concat(src)
  });
};

var _default = ImageTheme;
exports["default"] = _default;
//# sourceMappingURL=ImageTheme.js.map