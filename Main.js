"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListOfGoodsManager_1 = require("./ListOfGoodsManager");
var sectors_1 = require("./sectors");
var listManager = new ListOfGoodsManager_1.ListOfGoodsManager();
listManager.add("Iphone X", sectors_1.Sectors.iphone);
listManager.add("SamSung Galaxy S7", sectors_1.Sectors.iphone);
listManager.add("Vinsmart Pro", sectors_1.Sectors.iphone);
console.table(listManager._list);
listManager.delete(2);
console.table(listManager._list);
