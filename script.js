'use strict';

class First {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log(`Привет, я ${this.name}!`);
    }
}

class Second extends First {
    constructor(name) {
        super(name);
    }
    test() {
        super.hello()
        console.log(`А я наследуемый метод!`);
    }
}

const third = new Second('метод родителя');

third.test();
