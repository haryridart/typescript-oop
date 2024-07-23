describe('Error Handling', () => {
    class ValidationError extends Error {
        constructor(message: string) {
            super(message);
        }
    }
    function doubleIt(value: number): number {
        if (value < 0) {
            throw new ValidationError('Value cannot be negative');
        }
        return value * 2;
    }
    it('should throw an error', () => {
        try {
            doubleIt(-1);
        } catch (error) {
            if(error instanceof ValidationError) {
                console.info(error.message);
            }
        }
    });
});