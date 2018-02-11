exports.id = 0;
exports.modules = {

/***/ "./src/Editor/InlineStyleControls.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineStyleControls */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StyleButton__ = __webpack_require__("./src/Editor/StyleButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./src/Editor/constants.js");
var _jsxFileName = '/Users/kwawrzecki/Documents/DraftJS/src/Editor/InlineStyleControls.js';




var InlineStyleControls = function InlineStyleControls(props) {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'RichEditor-controls', __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        },
        __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* INLINE_STYLES */].map(function (type) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__StyleButton__["a" /* default */], {
                key: type.label,
                active: currentStyle.has(type.style),
                label: type.label,
                onToggle: props.onToggle,
                style: type.style,
                icon: type.icon,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            });
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (InlineStyleControls);

/***/ })

};
//# sourceMappingURL=0.77d59e2b9ea714a6247e.hot-update.js.map