"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOfGoodsManager = void 0;
var Task1_1 = require("./Task1");
var ListOfGoodsManager = /** @class */ (function () {
    function ListOfGoodsManager() {
        this._list = [];
        this._list = [];
    }
    ListOfGoodsManager.prototype.add = function (name, sectors) {
        var list = new Task1_1.List(name, sectors);
        this._list.push(list);
    };
    ListOfGoodsManager.prototype.delete = function (index) {
        this._list.splice(index, 1);
    };
    ListOfGoodsManager.prototype.create = function () {
    };
    return ListOfGoodsManager;
}());
exports.ListOfGoodsManager = ListOfGoodsManager;
