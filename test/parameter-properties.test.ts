describe('Parameter Properties', () => {
    class Person{
        constructor(public name: string) {
        }
    }
    it('should can have properties', () => {
        const person = new Person('Hary');
        expect(person.name).toBe('Hary');
    })
})