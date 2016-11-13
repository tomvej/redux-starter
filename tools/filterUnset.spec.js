import filterUnset from './filterUnset';

describe('filter Unset', () => {
    const sparseArray = [undefined, 4, 5, undefined, 2, 3];
    const denseArray = [4, 5, 2, 3];
    const primitive = {
        number: 5,
        string: 'string',
        boolean: true,
    };
    it('preserves empty object', () => {
        filterUnset({}).should.deep.equal({});
    });
    it('preserves primitive properties', () => {
        filterUnset(primitive).should.deep.equal(primitive);
    });
    it('removes undefined properties', () => {
        filterUnset({
            empty: undefined,
        }).should.deep.equal({});
    });
    it('removes undefined items from array properties', () => {
        filterUnset({
            array: sparseArray,
        }).should.deep.equal({
            array: denseArray,
        });
    });
    it('removes undefined items from array properties deep in object hierarchy', () => {
        filterUnset({
            object: {
                array: sparseArray,
            },
        }).should.deep.equal({
            object: {
                array: denseArray,
            },
        });
    });
    it('removes undefined properties deep in object hierarchy', () => {
        filterUnset({
            object: {
                empty: undefined,
            },
        }).should.deep.equal({
            object: {},
        });
    });
    it('preserves primitive properties deep in object hierarchy', () => {
        filterUnset({
            object: primitive,
        }).should.deep.equal({
            object: primitive,
        });
    });
});
