export class one {
    name: any;
    constructor(name: string, two: number, three: Array<String>) {
        this.name = name;
    }
}

class two {
    name: any;
    constructor(one: one) {
        this.name = one;
    }
}
class three {
    name: any;
    name2: any;
    name3: any;
    constructor() {
        this.name = new one('',4,['1']);
        // this.name2 = new one('');
        // this.name3 = new one('',4);
    }
}