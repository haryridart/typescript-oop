describe('Relationship', () => {
    class Person{
        constructor(public name: string) {
        }
    }
    class Customer{
        constructor(public name: string) {}
    }
    it('should work', () => {
        const person: Person = new Customer('Hary');
        console.info(person.name);
    });
});