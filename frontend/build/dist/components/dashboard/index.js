"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
require("./style.scss");
var Dashboard = (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        return _super.apply(this, arguments) || this;
    }
    Dashboard.prototype.render = function () {
        return (React.createElement("div", { id: "dashboard" },
            React.createElement("h1", null, "Gonna be a dashbaord")));
    };
    return Dashboard;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dashboard;
//# sourceMappingURL=index.js.map