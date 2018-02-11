exports.id = 0;
exports.modules = {

/***/ "./src/Editor/BlockStyleFn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBlockStyle;
function getBlockStyle(block) {
    console.log(block.getType());
    switch (block.getType()) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        case 'center':
            return 'reTextCenter';
        case 'left':
            return 'reTextLeft';
        case 'right':
            return 'reTextRight';
        case 'justify':
            return 'reTextJustify';
        default:
            return null;
    }
}

/***/ }),

/***/ "./src/Editor/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLOCK_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INLINE_STYLES; });
var BLOCK_TYPES = [{ label: 'H1', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { label: 'H3', style: 'header-three' }, { label: 'H4', style: 'header-four' }, { label: 'H5', style: 'header-five' }, { label: 'H6', style: 'header-six' }, { label: 'Blockquote', style: 'blockquote' }, { label: 'CENTER', style: 'center' }, { label: 'LEFT', style: 'left' }, { label: 'RIGHT', style: 'right' }, { label: 'JUSTIFY', style: 'justify' }, { label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }, { label: 'Code Block', style: 'code-block' }];

var INLINE_STYLES = [{ label: 'Bold', style: 'BOLD' }, { label: 'Italic', style: 'ITALIC' }, { label: 'Underline', style: 'UNDERLINE' }, { label: 'Monospace', style: 'CODE' }, { label: 'Center', style: 'center' }];

/***/ })

};
//# sourceMappingURL=0.7c0f48e77140862f235d.hot-update.js.map