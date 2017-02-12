"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
require("./style.scss");
var store_1 = require("../store");
var item_1 = require("./item");
var GuideList = (function (_super) {
    __extends(GuideList, _super);
    function GuideList(props) {
        var _this = _super.call(this, props) || this;
        _this.list = function (guides) {
            return guides.map(function (guide, i) {
                return React.createElement(item_1.default, { key: i, guide: guide });
            });
        };
        return _this;
    }
    GuideList.prototype.render = function () {
        return (React.createElement("div", { id: "guide", className: "list" },
            React.createElement("div", { id: "header" },
                React.createElement("h3", null, "Guides")),
            React.createElement("ul", { className: "guide list" }, this.list(store_1.default.guides))));
    };
    return GuideList;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GuideList;
//# sourceMappingURL=index.js.map