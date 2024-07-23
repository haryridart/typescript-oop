"use strict";
describe('inheritance', () => {
    //parent class
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class Director extends Manager {
    }
    it('should support inheritance', () => {
        const employee = new Employee('Ridart');
        console.info(employee.name);
        const manager = new Manager('Hary');
        console.info(manager.name);
        const director = new Director('John');
        console.info(director.name);
    });
});
