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
            return 'reTextCenter';
        case 'right':
            return 'reTextCenter';
        default:
            return null;
    }
}

/***/ })

};
//# sourceMappingURL=0.2b50fc250d79bf37fed1.hot-update.js.map