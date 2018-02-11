exports.id = 0;
exports.modules = {

/***/ "./src/Editor/BlockStyleControls.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BlockStyleControls */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StyleButton__ = __webpack_require__("./src/Editor/StyleButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./src/Editor/constants.js");
var _jsxFileName = '/Users/kwawrzecki/Documents/DraftJS/src/Editor/BlockStyleControls.js';




var BlockStyleControls = function BlockStyleControls(props) {
    var editorState = props.editorState;

    var selection = editorState.getSelection();
    var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'RichEditor-controls', __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            }
        },
        __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* BLOCK_TYPES */].map(function (type) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__StyleButton__["a" /* default */], {
                key: type.label,
                active: type.style === blockType,
                label: type.label,
                onToggle: props.onToggle,
                style: type.style,
                icon: type.icon,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            });
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (BlockStyleControls);

/***/ })

};
//# sourceMappingURL=0.7ce729ac916e334a2534.hot-update.js.map