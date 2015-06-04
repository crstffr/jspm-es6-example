export default class User {
    constructor(data) {
        this.name = data.name || '';
        this.email = data.email || '';
    }

    sayHello() {
        console.log('Hello ', this.name, '!');
    }
}
