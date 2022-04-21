const infoArrayToObject = require("./info-array-to-object");

describe("InfoArrayToObject", () => {

    test('InfoArrayToObjectReturnsAnObjectBasedOffArrayGiven', () => {
        expect(infoArrayToObject([[22, "hello"], [33, "world"]])).toStrictEqual({ 22: "hello", 33: "world" });
    });

    test('InfoArrayToObjectReturnsAnObjectBasedOffArrayWithEmptyStringGiven', () => {
        expect(infoArrayToObject([[22, ""], [33, "world"]])).toStrictEqual({ 22: "", 33: "world" });
    });

    test('InfoArrayToObjectReturnsAnObjectBasedOffArrayWith0Given', () => {
        expect(infoArrayToObject([[0, "hello"], [33, "world"]])).toStrictEqual({ 0: "hello", 33: "world" });
    });

    test('InfoArrayToObjectReturnsAnObjectBasedOffArrayWithEmptyStringGiven', () => {
        expect(infoArrayToObject([[22, ""], [33, "world"]])).toStrictEqual({ 22: "", 33: "world" });
    });

    test('InfoArrayToObjectReturnsAnObjectBasedOffArrayWithSameValuesGiven', () => {
        expect(infoArrayToObject([[22, "world"], [33, "world"]])).toStrictEqual({ 22: "world", 33: "world" });
    });

    test('InfoArrayToObjectReturnsAnObjectBasedOffArrayWithOneElementGiven', () => {
        expect(infoArrayToObject([[22, "world"]])).toStrictEqual({ 22: "world" });
    });
})