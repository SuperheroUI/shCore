var getDecimal = require('./get-decimal').default;

describe('getDecimal', function() {
    it('can run the function', function() {
        var classes = getDecimal('b.123');
        expect(classes).toBe(0.123);
    });
    it('works on a number', function() {
        var classes = getDecimal(.123);
        expect(classes).toBe(0.123);
    });
    it('works on a negative', function() {
        var classes = getDecimal(-.123);
        expect(classes).toBe(-0.123);
    });
    it('works on a zero', function() {
        var classes = getDecimal(0);
        expect(classes).toBe(0);
    });
    it('works with letters', function() {
        var classes = getDecimal('abc');
        expect(classes).toBe(0);
    });
    it('works with negative strings', function() {
        var classes = getDecimal('-1');
        expect(classes).toBe(-1);
    });
    it('works with specials', function() {
        var classes = getDecimal('!@@#$%^&*()`~_+');
        expect(classes).toBe(0);
    });
    it('works with nothing', function() {
        var classes = getDecimal();
        expect(classes).toBe(0);
    });
    it('works with something', function() {
        var classes = getDecimal(99999999999999999999999999999999999999999999999999999999999999999999999999999999999);
        expect(classes).toBe(99999999999999999999999999999999999999999999999999999999999999999999999999999999999);
    });
});
