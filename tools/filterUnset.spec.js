import filterUnset from './filterUnset';

describe('filter Unset', () => {
    it('leaves empty object as it is', () => {
        filterUnset({}).should.deep.equal({});
    });
    it('leaves primitive properties as they are', () => {
        const target = {
            number: 5,
            string: 'string',
            boolean: true,
        };
        filterUnset(target).should.deep.equal(target);
    });
    it('removes undefined properties', () => {
        filterUnset({
            empty: undefined,
        }).should.deep.equal({});
    });
    it('removes undefined items from array properties', () => {
        filterUnset({
            array: [undefined, 4, 5, undefined, 2, 3],
        }).should.deep.equal({
            array: [4, 5, 2, 3],
        });
    });
});
