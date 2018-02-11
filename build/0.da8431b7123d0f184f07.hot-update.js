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
        case 'dupa':
            return 'reTextCenter';
        default:
            return null;
    }
}

/***/ })

};
//# sourceMappingURL=0.da8431b7123d0f184f07.hot-update.js.map