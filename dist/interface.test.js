"use strict";
describe('Interface', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('should implement interface', () => {
        const person = new Person('Hary');
        person.sayHello('Gala');
    });
});
