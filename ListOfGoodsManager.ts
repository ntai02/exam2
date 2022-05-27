import {List} from "./Task1";
import {Sectors} from "./sectors";

export class ListOfGoodsManager {

    _list : List[] = []

    constructor() {
        this._list = []
    }
    add (name: string,
         sectors: Sectors ) {
        let list = new List(name,sectors)
        this._list.push(list)
    }
    delete (index : number) : void {
        this._list.splice(index,1)
    }
    create () {

    }
}