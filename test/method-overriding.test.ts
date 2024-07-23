describe('Method Overriding', () => {
    class Employee {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHello(name: string): void{
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }
    class Manager extends Employee {
        sayHello(name: string): void{
            console.info(`Hello ${name}, my name is ${this.name}. I am your manager`);
        }
    }
    class Offier extends Employee {
        sayHello(name: string): void{
            super.sayHello(name);
            console.info('and I am your offier');
        }
    }
    it('should support method overriding', ()=>{
        const employee = new Employee('Hary');
        employee.sayHello('Ridart');
        const manager = new Manager('Hary');
        manager.sayHello('Ridart');
        const offier = new Offier('Fenia');
        offier.sayHello('Dwi');
    });
});