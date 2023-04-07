const mathOperators = require('./calculator');

describe('calculator test', () => {
    it('should add', () => {
        const result = mathOperators.sum(2, 3);
        expect(result).toBe(5);
    });
    it('should diff', () => {
        const result = mathOperators.diff(5, 3);
        expect(result).toBe(2);
    });
});
