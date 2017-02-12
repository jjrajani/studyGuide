"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var _1 = require("./");
var Form = (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.form = function () {
            return _this.props.inputs.map(function (input, i) {
                return React.createElement(_1.Input, { key: i, config: input, change: _this.change });
            });
        };
        _this.buildState = function (inputs) {
            var state = {};
            inputs.forEach(function (input) { state[input.for] = input.value; });
            return state;
        };
        _this.change = function (key, value) {
            _this.state[key] = value;
        };
        _this.state = _this.buildState(_this.props.inputs);
        return _this;
    }
    Form.prototype.render = function () {
        return (React.createElement("div", { className: "form" },
            this.form(),
            React.createElement("button", { onClick: this.props.submit.bind(this, this.state) }, "Login")));
    };
    return Form;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Form;
//# sourceMappingURL=Form.js.map