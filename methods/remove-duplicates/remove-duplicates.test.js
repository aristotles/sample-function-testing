const removeDuplicates = require('./remove-duplicates');

describe("RemoveDuplicates", () => {

    test('Removes duplicate strings: ["beta", "beta"] to ["beta"]', () => {
        expect(removeDuplicates(["beta", "beta"])).toStrictEqual(["beta"]);
    });

    test('Removes duplicate numbers: [2,2] to [2]', () => {
        expect(removeDuplicates([2, 2])).toStrictEqual([2]);
    });

    test('Removes duplicate nulls: [null,null] to [null]', () => {
        expect(removeDuplicates([null, null])).toStrictEqual([null]);
    });

    test('Doesnt remove anything when no duplicates: [2,3,4,5] to [2,3,4,5]', () => {
        expect(removeDuplicates([2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5]);
    });

    test('Removes more than 2 of the same item: [99,99,99,88] to [99,88]', () => {
        expect(removeDuplicates([99, 99, 99, 88])).toStrictEqual([99, 88]);
    });

    test('Removes all but 1 of all the same: [1,1,1] to [1]', () => {
        expect(removeDuplicates([1, 1, 1])).toStrictEqual([1]);
    });

    test('Only removes the duplicate: [2,2,1] to [2,1]', () => {
        expect(removeDuplicates([2, 1])).toStrictEqual([2, 1]);
    });

})