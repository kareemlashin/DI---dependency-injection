// without dependency injection

class dog {
    name : string;
    age : number;
}

class Cats {
    name : string;
    age : number;
    dog: Dog;
    constructor() {
        this.dog = new Dog(); // creating instance (object) from Dog class.
    }

    printDogInfo() {
        this.dog.name = "john";
        this.dog.age = 12;
        console.log(this.dog.name);
        console.log(this.dog.age);
    }
}
export class Dog {
    name : string;
    age : number;
    doSomething() {
        console.log("hey");
    }
}
// with dependency injection
export class Cat {
    constructor(public dogService : Dog) {}
    printDogInfo() {
        this.dogService.name = "john";
        this.dogService.age = 12;
        console.log(this.dogService.name);
        console.log(this.dogService.age);
    }
}

class Foo {}
class Bar {
    foo : Foo;

    constructor() {
        this.foo = new Foo();
    }
}
class Foobar {
    foo : Foo;
    bar : Bar;

    constructor() {
        this.foo = new Foo();
        this.bar = new Bar();
    }
}
class Bars {
    constructor(foo : Foos) {}
}
class Foos {
    constructor(bar : Bars) {}
}

class Lamps {
    bulb : IE27Bulb;
    constructor() {
        this.bulb = new E27PhilipsLed11WBulb();
    }
}
class E27PhilipsLed11WBulb {}

class IE27Bulb {}
// with DI
class Lamp {
    bulb : IE27Bulb;
    constructor(bulb : IE27Bulb) {
        this.bulb = bulb;
    }
}
class TodoService {}
class data {
    name : any;
    constructor() {
        this.name = new TodoService();
    }
}
class TodoController {
    private todoService : TodoService;
    constructor(todoService : TodoService) {
        this.todoService = todoService;
    }
}
 /* 
 class a{}
 class b{}
 a used b (b Dependency to a)
 

 */ 