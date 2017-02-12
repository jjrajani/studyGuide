"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
require("./style.scss");
var react_router_1 = require("react-router");
var Note = (function (_super) {
    __extends(Note, _super);
    function Note(props) {
        var _this = _super.call(this, props) || this;
        _this.header = function () {
            return (React.createElement("div", { className: "open note header" },
                _this.editLink(),
                _this.edit()));
        };
        _this.editLink = function () {
            return (React.createElement(react_router_1.Link, { className: "link page-number", to: "guide/" + _this.props.guideId + "/resource/chapter/" + _this.props.chapterId + "/section" + _this.props.sectionId + "/note/" + _this.props.note.id },
                "pg.",
                _this.props.note.pageNumber));
        };
        _this.edit = function () {
            return (React.createElement(react_router_1.Link, { className: "link edit", to: "guide/" + _this.props.guideId + "/resource/section/" + _this.props.sectionId + "/note/" + _this.props.note.id + "/edit" },
                React.createElement("i", { className: "fa fa-pencil-square-o", "aria-hidden": "true" })));
        };
        return _this;
    }
    Note.prototype.render = function () {
        var note = this.props.note;
        return (React.createElement("div", { className: "note list-item" },
            this.header(),
            React.createElement("p", { className: "text" }, note.text)));
    };
    return Note;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Note;
//# sourceMappingURL=index.js.map