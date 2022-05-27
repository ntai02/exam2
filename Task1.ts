import {Sectors} from "./sectors";

export class List {
    private name : string
    private sectors : Sectors

    constructor(name: string,
                sectors: Sectors
) {
        this.name = name;
        this.sectors = sectors;

    }
    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getSectors(): string {
        return this.sectors;
    }

    setSectors(sectors: Sectors) {
        this.sectors = sectors;
    }
}