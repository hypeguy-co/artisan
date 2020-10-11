"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _hooks = require("./hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Translate = function Translate(_ref) {
  var label = _ref.label,
      data = _ref.data,
      language = _ref.language,
      module = _ref.module,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: className
  }, (0, _hooks.useTranslateString)(label, data, language, module));
};

var _default = /*#__PURE__*/_react["default"].memo(Translate);

exports["default"] = _default;
//# sourceMappingURL=Translate.js.map