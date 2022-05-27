"use strict";
exports.__esModule = true;
exports.List = void 0;
var List = /** @class */ (function () {
    function List(name, sectors) {
        this.name = name;
        this.sectors = sectors;
    }
    List.prototype.getName = function () {
        return this.name;
    };
    List.prototype.setName = function (name) {
        this.name = name;
    };
    List.prototype.getSectors = function () {
        return this.sectors;
    };
    List.prototype.setSectors = function (sectors) {
        this.sectors = sectors;
    };
    return List;
}());
exports.List = List;
