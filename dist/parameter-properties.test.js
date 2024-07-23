"use strict";
describe('Parameter Properties', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    it('should can have properties', () => {
        const person = new Person('Hary');
        expect(person.name).toBe('Hary');
    });
});
