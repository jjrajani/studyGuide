"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
require("./style.scss");
var Guide = (function (_super) {
    __extends(Guide, _super);
    function Guide() {
        return _super.apply(this, arguments) || this;
    }
    Guide.prototype.render = function () {
        return (React.createElement("div", { id: "guide" }, "guide"));
    };
    return Guide;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Guide;
//# sourceMappingURL=index.js.map