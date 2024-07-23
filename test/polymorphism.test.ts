describe('Polymorphism', () => {
    class Employee {
        constructor(public name: string) {
        }
    }
    class Manager extends Employee {

    }
    class VicePresident extends Manager {
    }
    function sayHello(employee: Employee) {
        // conditional statement for polymorphism is ordered from bottom to top
        if(employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello vice president ${vp.name}`);
        }else if(employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        }else{
            console.info(`Hello employee ${employee.name}`);}
    }
    it('should support polymorphism', () => {
        let employee: Employee = new Employee('Hary');
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