let id = Symbol('id');

export default class User {

    constructor(data) {
        this.name = data.name || '';
        this.email = data.email || '';
        this[id] = Math.random();
    }

    get id() {
        return this[id];
    }

    sayHello() {
        console.log('Hello', this.name, '!', this[id]);
    }
}
