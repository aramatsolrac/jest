const sum = require('./calculator').sum;

it('should sum 2 and 2 and the result must be 4', () => {
    expect(sum(2,2 )).toBe(4);
});

it('should sum 2 and 2 and the result even if one of them is a string', () => {
    expect(sum('2', '2')).toBe(4);
});

it('should throw an error if what is provided to the method cannot be summed', () => {
    expect(() => sum('','b')).toThrowError();
    expect(() => sum([2,2])).toThrowError();
    expect(() => sum({})).toThrowError();
    expect(() => sum()).toThrowError();
});
