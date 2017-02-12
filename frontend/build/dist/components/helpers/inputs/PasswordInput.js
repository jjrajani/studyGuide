"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var TextInput = (function (_super) {
    __extends(TextInput, _super);
    function TextInput(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            _this.props.change(e.target.name, e.target.value);
        };
        return _this;
    }
    TextInput.prototype.render = function () {
        return (React.createElement("input", { type: "password", name: this.props.for, value: this.props.value, onChange: this.onChange.bind(this) }));
    };
    return TextInput;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextInput;
//# sourceMappingURL=PasswordInput.js.map