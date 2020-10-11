"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ChakraProvider", {
  enumerable: true,
  get: function get() {
    return _core.ChakraProvider;
  }
});
Object.defineProperty(exports, "theme", {
  enumerable: true,
  get: function get() {
    return _core.theme;
  }
});
Object.defineProperty(exports, "Banner", {
  enumerable: true,
  get: function get() {
    return _Banner.Banner;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function get() {
    return _Text.Text;
  }
});
exports.Test = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _Banner = require("./Banner");

var _Text = require("./Text");

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  background-color: red;\n  color: green;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// const ChakraProvider = ({children}) => <>ChakraProvider{children}</>
// const Banner = ({children}) => <Banner>{children}</Banner>
// console.info(Text)
var StyledTest = _styled["default"].div(_templateObject());

var Test = function Test() {
  return /*#__PURE__*/_react["default"].createElement(StyledTest, null, "Test");
};

exports.Test = Test;
//# sourceMappingURL=index.js.map