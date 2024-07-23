describe('Class', () => {
    class Customer{
        constructor(){
            console.info('Create new customer');
        }

    }
    class Order{

    }
    it('should allow generate class', () => {
        const customer: Customer = new Customer();
        const order = new Order();
    });
    it('should allow process constructor', () => {
        new Customer();
        new Customer();
    });
})