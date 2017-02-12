"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var helpers_1 = require("../helpers");
var Login = (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.inputs = [
            { type: "text", for: "username" },
            { type: "password", for: "password" },
        ];
        _this.login = function (state, e) {
            console.log('login state', state);
        };
        return _this;
    }
    Login.prototype.render = function () {
        return (React.createElement("div", { className: "nav" },
            React.createElement(helpers_1.Form, { inputs: this.inputs, submit: this.login })));
    };
    return Login;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Login;
//# sourceMappingURL=index.js.map