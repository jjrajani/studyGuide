"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
require("./style.scss");
var react_router_1 = require("react-router");
var section_1 = require("../section");
var extender_1 = require("../extender");
var Chapter = (function (_super) {
    __extends(Chapter, _super);
    function Chapter(props) {
        var _this = _super.call(this, props) || this;
        _this.chapterLink = function () {
            return (React.createElement(react_router_1.Link, { className: "link", to: "guide/" + _this.props.guideId + "/resource/chapter/:id" },
                _this.props.chapter.title,
                ":"));
        };
        _this.chapterDescription = function () {
            var className = _this.state.chapterOpen
                ? "open description"
                : "closed description";
            return (React.createElement("p", { className: className }, _this.props.chapter.description));
        };
        _this.chapterToggle = function () {
            var arrowDirection = _this.state.chapterOpen ? "left" : "right";
            if (_this.props.chapter.sections.length > 0) {
                return (React.createElement("i", { onClick: _this.toggleChapter, className: "fa fa-arrow-circle-" + arrowDirection, "aria-hidden": "true" }));
            }
            else {
                return null;
            }
        };
        _this.toggleChapter = function () { _this.setState({ chapterOpen: !_this.state.chapterOpen }); };
        _this.addSection = function () {
            console.log('chapter id to add section', _this.props.chapter.id);
            return (React.createElement("div", { className: "add" },
                React.createElement(react_router_1.Link, { className: "add link", to: "guide/" + _this.props.guideId + "/resource/chapter/" + _this.props.chapter.id + "/section/add" },
                    React.createElement("i", { className: "fa fa-plus-circle", "aria-hidden": "true" }))));
        };
        _this.sections = function () {
            var className = _this.state.chapterOpen
                ? "open section list"
                : "closed section list";
            return (React.createElement("div", { className: className },
                _this.props.chapter.sections.map(function (section, i) {
                    return (React.createElement(section_1.default, { key: i, section: section, guideId: _this.props.guideId, chapterId: _this.props.chapter.id }));
                }).slice(0, _this.state.listSize),
                _this.listExtender()));
        };
        _this.listExtender = function () {
            return (React.createElement(extender_1.default, { renderedListSize: _this.state.listSize, listLength: _this.props.chapter.sections.length, setListSize: _this.setListSize }));
        };
        _this.setListSize = function (listSize) { _this.setState({ listSize: listSize }); };
        _this.state = { chapterOpen: false, listSize: 3 };
        return _this;
    }
    Chapter.prototype.render = function () {
        var className = this.state.chapterOpen ? "open chapter header" : " closed chapter header";
        return (React.createElement("div", { className: "chapter list-item" },
            React.createElement("div", { className: className },
                React.createElement("div", { className: "chapter sub-header" },
                    this.chapterLink(),
                    this.chapterDescription(),
                    this.chapterToggle()),
                this.addSection()),
            this.sections()));
    };
    return Chapter;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Chapter;
//# sourceMappingURL=index.js.map