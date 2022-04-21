const getSpecialtyFromId = require("./get-Specialty-from-id");

describe("Get Specialty from id", () => {

    test('GetSpecialtyFromIdShouldReturnSpecialtyArrayFromMatchingIdArray', () => {
        expect(getSpecialtyFromId([22,2233,73737],[[22,"hello"],[2233,"world"],[223,"helvlo"]])).toStrictEqual(["hello","world"]);
    });

    test('GetSpecialtyFromIdShouldReturnEmptyArrayIfNoMatchingIds', () => {
        expect(getSpecialtyFromId([73737],[[22,"hello"],[2233,"world"],[223,"helvlo"]])).toStrictEqual([]);
    });

    test('GetSpecialtyFromIdShouldReturnEmptyArrayIfInfoArrayEmpty', () => {
        expect(getSpecialtyFromId([73737],[])).toStrictEqual([]);
    });

    test('GetSpecialtyFromIdShouldReturnEmptyArrayIfMatchingIdArrayEmpty', () => {
        expect(getSpecialtyFromId([],[[22,"hello"],[2233,"world"],[223,"helvlo"]])).toStrictEqual([]);
    });
})