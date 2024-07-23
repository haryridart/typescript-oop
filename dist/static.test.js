"use strict";
describe('Static', () => {
    class Configuration {
    }
    Configuration.NAME = 'Typescript OOP';
    Configuration.VERSION = 1.0;
    Configuration.AUTHOR = 'Hary Ridart';
    class MathUtil {
        static sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
    }
    it('should support static', () => {
        console.info(Configuration.NAME);
        console.info(Configuration.VERSION);
        console.info(Configuration.AUTHOR);
    });
    it('should support static method', () => {
        console.info(MathUtil.sum(1, 2, 3, 4, 5));
    });
});
