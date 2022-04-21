const getMatchingIds = require("./get-matching-id");

describe("Get matching ids", () => {

    test('GetMatchingIdsShouldRemoveNonPresentIds', () => {
        expect(getMatchingIds(["2",'11',"3"],[[11,"samuel"],[22,"kra"]])).toStrictEqual([11]);
    });

    test('GetMatchingIdsShouldReturnEmptyArrayIfNoMatchingIds', () => {
        expect(getMatchingIds(["2",'11',"3"],[[12,"samuel"],[22,"kra"]])).toStrictEqual([]);
    });

    test('GetMatchingIdsShouldReturnEmptyArrayIfEmptyIdArrayGiven', () => {
        expect(getMatchingIds([],[[12,"samuel"],[22,"kra"]])).toStrictEqual([]);
    });
    
    test('GetMatchingIdsShouldReturnEmptyArrayIfEmptyInfoArrayGiven', () => {
        expect(getMatchingIds(["11","5555"],[])).toStrictEqual([]);
    });
})