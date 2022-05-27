import {ListOfGoodsManager} from "./ListOfGoodsManager";
import {Sectors} from "./sectors";

let listManager = new ListOfGoodsManager()

listManager.add ("Iphone X",Sectors.iphone)
listManager.add ("SamSung Galaxy S7",Sectors.iphone)
listManager.add ("Vinsmart Pro",Sectors.iphone)

console.table(listManager._list)

listManager.delete(2)

console.table(listManager._list)















