"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_1 = require("react-router");
var routes_1 = require("./routes");
require("./styles/index.scss");
ReactDOM.render(React.createElement(routes_1.default, { history: react_router_1.browserHistory }), document.getElementById("root"));
var url = 'mongodb://localhost:27017/studyGuide';
var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var connect = function () {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        findDocuments(db, function () {
            db.close();
        });
    });
};
var findDocuments = function (db, callback) {
    var collection = db.collection('user');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
};
connect();
//# sourceMappingURL=index.js.map