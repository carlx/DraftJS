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
        default:
            return null;
    }
}

/***/ })

};
//# sourceMappingURL=0.db6c01a62b9f5f008600.hot-update.js.map