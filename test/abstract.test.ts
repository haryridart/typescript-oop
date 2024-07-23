describe('Abstract', () => {
    abstract class Customer{
        readonly id: number;
        abstract name: string;

        constructor(id: number){
            this.id = id;
        }
        hello(){
            console.info('Hello');
        }
        abstract sayHello(name: string): void;

    }
    class RegulerCustomer extends Customer{
        name: string;

        constructor(id: number, name: string){
            super(id);
            this.name = name;
        }

        sayHello(name: string): void{
            console.info(`Hello ${name}`);
        }
    }
    it('should create abstract class', () => {
        const customer = new RegulerCustomer(1, 'Hary');
        customer.sayHello('Gala');
        console.info(customer);
    });
});