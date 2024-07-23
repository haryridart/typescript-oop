"use strict";
describe('Polymorphism', () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class VicePresident extends Manager {
    }
    function sayHello(employee) {
        // conditional statement for polymorphism is ordered from bottom to top
        if (employee instanceof VicePresident) {
            const vp = employee;
            console.info(`Hello vice president ${vp.name}`);
        }
        else if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello manager ${manager.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    }
    it('should support polymorphism', () => {
        let employee = new Employee('Hary');
        console.info(employee);
        employee = new Manager('Hary');
        console.info(employee);
        employee = new VicePresident('Hary');
        console.info(employee);
        console.info(employee instanceof Manager);
    });
    it('should support method parameter polymorphism', () => {
        sayHello(new Employee('Hary'));
        sayHello(new Manager('Ridart'));
        sayHello(new VicePresident('Gala'));
    });
});
