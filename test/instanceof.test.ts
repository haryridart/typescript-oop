describe('instanceof', () => {
    class Employee{ };
    class Manager{ };
    class Director extends Employee{ };
    const name1 = new Employee();
    const name2 = new Manager();
    const name3 = new Director();
    it('should have problem using typeof', () => {
        console.info(typeof name1);
        console.info(typeof name2);
    });
    it('should support instanceof', () => {
        expect(name1 instanceof Employee).toBe(true);
        expect(name1 instanceof Manager).toBe(false);
        expect(name2 instanceof Manager).toBe(true);
        expect(name2 instanceof Employee).toBe(false);
        console.info(name3 instanceof Employee);
        console.info(name3 instanceof Director);
    });
});
    