import { createHelloWorld } from '../../challenges/easy/helloWorldFunction';

describe('createHelloWorld', () => {
    it('should always return "Hello World" with no arguments', () => {
        const f = createHelloWorld();
        expect(f()).toBe('Hello World');
    });

    it('should ignore any arguments passed', () => {
        const f = createHelloWorld();
        const testCases = [
            [{}, null, 42],
            ['test', 3.14],
            [Symbol('foo'), true, undefined],
            [() => { }, { key: 'value' }],
            Array(10).fill(null) // max allowed arguments
        ];

        testCases.forEach(args => {
            expect(f(...args)).toBe('Hello World');
        });
    });

    it('should work with all primitive types as arguments', () => {
        const f = createHelloWorld();
        expect(f(undefined)).toBe('Hello World');
        expect(f(null)).toBe('Hello World');
        expect(f(0)).toBe('Hello World');
        expect(f(false)).toBe('Hello World');
        expect(f(NaN)).toBe('Hello World');
    });
});

