"use strict";
describe('Abstract', () => {
    class Customer {
        constructor(id) {
            this.id = id;
        }
        hello() {
            console.info('Hello');
        }
    }
    class RegulerCustomer extends Customer {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}`);
        }
    }
    it('should create abstract class', () => {
        const customer = new RegulerCustomer(1, 'Hary');
        customer.sayHello('Gala');
        console.info(customer);
    });
});
