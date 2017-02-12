"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
require("./style.scss");
var react_router_1 = require("react-router");
var resource_1 = require("./resource");
var GuideListItem = (function (_super) {
    __extends(GuideListItem, _super);
    function GuideListItem(props) {
        var _this = _super.call(this, props) || this;
        _this.guideSpecs = function (guide) {
            return (React.createElement("div", { className: "link" },
                _this.editLink(),
                _this.descriptionToggle()));
        };
        _this.editLink = function () {
            return (React.createElement(react_router_1.Link, { className: "guide link", to: "guide/" + _this.props.guide.id }, _this.props.guide.title));
        };
        _this.descriptionToggle = function () {
            var arrowDirection = _this.state.showDescription ? "right active" : "left";
            return (React.createElement("i", { onClick: _this.toggleDescription, className: "fa fa-arrow-circle-" + arrowDirection + " toggle", "aria-hidden": "true" }));
        };
        _this.toggleDescription = function () { _this.setState({ showDescription: !_this.state.showDescription }); };
        _this.description = function (description) {
            var className = _this.state.showDescription ? "description" : "hidden";
            return React.createElement("p", { className: className }, description);
        };
        _this.editGuide = function (id) {
            return (React.createElement(react_router_1.Link, { className: "link edit", to: "guide/edit/" + id },
                React.createElement("i", { className: "fa fa-pencil-square-o", "aria-hidden": "true" })));
        };
        _this.state = { showDescription: true };
        return _this;
    }
    GuideListItem.prototype.render = function () {
        var guide = this.props.guide;
        return (React.createElement("li", { className: "guide list-item" },
            React.createElement("div", { className: "guide header" },
                this.guideSpecs(guide),
                this.description(guide.description),
                this.editGuide(guide.id)),
            React.createElement(resource_1.default, { guideId: guide.id, resource: guide.resource })));
    };
    return GuideListItem;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GuideListItem;
//# sourceMappingURL=index.js.map