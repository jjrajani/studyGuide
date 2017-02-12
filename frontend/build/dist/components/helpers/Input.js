"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            _this.props.change(e.target.name, e.target.value);
        };
        return _this;
    }
    Input.prototype.render = function () {
        return (React.createElement("input", { type: this.props.config.type, name: this.props.config.for, value: this.props.config.value, onChange: this.onChange.bind(this) }));
    };
    return Input;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Input;
//# sourceMappingURL=Input.js.map