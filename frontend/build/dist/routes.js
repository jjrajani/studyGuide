"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var react_router_1 = require("react-router");
var app_1 = require("./components/app");
var login_1 = require("./components/login");
var guide_1 = require("./components/guide");
var list_1 = require("./components/guide/list");
var detail_1 = require("./components/guide/detail");
var form_1 = require("./components/guide/form");
var resource_1 = require("./components/resource");
var form_2 = require("./components/resource/form");
var form_3 = require("./components/chapter/form");
var form_4 = require("./components/section/form");
var form_5 = require("./components/note/form");
var dashboard_1 = require("./components/dashboard");
var not_found_1 = require("./components/not-found");
var Routes = function (props) { return (React.createElement(react_router_1.Router, __assign({}, props, { history: react_router_1.hashHistory }),
    React.createElement(react_router_1.Route, { path: "/", component: app_1.default },
        React.createElement(react_router_1.IndexRedirect, { to: "guides" }),
        React.createElement(react_router_1.Route, { path: "login", component: login_1.default }),
        React.createElement(react_router_1.Route, { path: "dashboard", component: dashboard_1.default }),
        React.createElement(react_router_1.Route, { path: "guide", component: guide_1.default }),
        React.createElement(react_router_1.Route, { path: "guides", component: list_1.default }),
        React.createElement(react_router_1.Route, { path: "guide/new/:id", component: form_1.default }),
        React.createElement(react_router_1.Route, { path: "guide/edit/:id", component: form_1.default }),
        React.createElement(react_router_1.Route, { path: "guide/:id", component: detail_1.default }),
        React.createElement(react_router_1.Route, { path: "guide/:id/resource", component: resource_1.default }),
        React.createElement(react_router_1.Route, { path: "guide/:id/resource/add", component: form_2.default }),
        React.createElement(react_router_1.Route, { path: "guide/:id/resource/chapter/add", component: form_3.default }),
        React.createElement(react_router_1.Route, { path: "guide/:id/resource/chapter/:chapterId/edit", component: form_3.default }),
        React.createElement(react_router_1.Route, { path: "guide/:id/resource/chapter/:chapterId/section/add", component: form_4.default }),
        React.createElement(react_router_1.Route, { path: "guide/:id/resource/chapter/:chapterId/section/edit", component: form_4.default }),
        React.createElement(react_router_1.Route, { path: "guide/:id/resource/chapter/:chapterId/section/:sectionId/note/add", component: form_5.default }),
        React.createElement(react_router_1.Route, { path: "guide/:id/resource/chapter/:chapterId/section/:sectionId/note/edit", component: form_5.default })),
    React.createElement(react_router_1.Route, { path: "*", component: not_found_1.default }))); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
//# sourceMappingURL=routes.js.map