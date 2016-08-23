var getClassNames = require('./get-class-names').default;

describe('getClassNames', function() {
    it('only provide truthy values', function() {
        var classes = getClassNames({
            a: true,
            b: false,
            c: 1,
            d: 0,
            e: null,
            f: undefined
        });
        expect(classes).toBe('a c');
    });

    it('evaluate functions', function() {
        var classes = getClassNames({
            a: () => true,
            b: () => false,
            c: () => 1,
            d: () => 0,
            e: () => null,
            f: () => {}
        });
        expect(classes).toBe('a c');
    });

    it('appends strings', function() {
        var bValue = 'foot';
        var classes = getClassNames({
            a: 'salt',
            b: bValue,
        });
        expect(classes).toBe('a-salt b-foot');
    });

    it('creates kebab-case class names', function() {
        var classes = getClassNames({
            aValue: 'bigFoot',
            StartCaps: true,
        });
        expect(classes).toBe('a-value-big-foot start-caps');
    });

    it('does not show inherited values', function() {
        var o1 = {
            a: true,
            b: false,
            c: () => true
        };

        var o2 = Object.create(o1);
        o2.d = true;

        var classes = getClassNames(o2);
        expect(classes).toBe('d');
    });
});
