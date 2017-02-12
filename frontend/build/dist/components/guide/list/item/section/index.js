"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
var note_1 = require("../note");
var extender_1 = require("../extender");
var Section = (function (_super) {
    __extends(Section, _super);
    function Section(props) {
        var _this = _super.call(this, props) || this;
        _this.sectionLink = function () {
            return (React.createElement(react_router_1.Link, { className: "link", to: "guide/" + _this.props.guideId + "/resource/section/:id" },
                _this.props.section.title,
                ":"));
        };
        _this.sectionDescription = function () {
            var className = _this.state.sectionOpen
                ? "open description"
                : "closed description";
            return (React.createElement("p", { className: className }, _this.props.section.description));
        };
        _this.sectionToggle = function () {
            var arrowDirection = _this.state.sectionOpen ? "left" : "right";
            if (_this.props.section.notes.length > 0) {
                return (React.createElement("i", { onClick: _this.toggleSection, className: "fa fa-arrow-circle-" + arrowDirection, "aria-hidden": "true" }));
            }
            else {
                return null;
            }
        };
        _this.toggleSection = function () { _this.setState({ sectionOpen: !_this.state.sectionOpen }); };
        _this.addNote = function () {
            return (React.createElement("div", { className: "add" },
                React.createElement(react_router_1.Link, { className: "add link", to: "guide/" + _this.props.guideId + "/resource/chapter/" + _this.props.chapterId + "/section/" + _this.props.section.id + "/note/add" },
                    React.createElement("i", { className: "fa fa-plus-circle", "aria-hidden": "true" }))));
        };
        _this.notes = function () {
            var className = _this.state.sectionOpen
                ? "open note list"
                : "closed note list";
            return (React.createElement("div", { className: className },
                _this.props.section.notes.map(function (note, i) {
                    return (React.createElement(note_1.default, { key: i, note: note, guideId: _this.props.guideId, chapterId: _this.props.chapterId, sectionId: _this.props.section.id }));
                }).slice(0, _this.state.listSize),
                _this.listExtender()));
        };
        _this.listExtender = function () {
            return (React.createElement(extender_1.default, { renderedListSize: _this.state.listSize, listLength: _this.props.section.notes.length, setListSize: _this.setListSize }));
        };
        _this.setListSize = function (listSize) { _this.setState({ listSize: listSize }); };
        _this.state = { sectionOpen: false, showNotes: false, listSize: 3 };
        return _this;
    }
    Section.prototype.render = function () {
        var className = this.state.sectionOpen ? "open section header" : " closed section header";
        return (React.createElement("div", { className: "section list-item" },
            React.createElement("div", { className: className },
                React.createElement("div", { className: "section sub-header" },
                    this.sectionLink(),
                    this.sectionDescription(),
                    this.sectionToggle()),
                this.addNote()),
            this.notes()));
    };
    return Section;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Section;
//# sourceMappingURL=index.js.map