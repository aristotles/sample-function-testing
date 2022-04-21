const cleanString = require('./clean-string');

//Backslash and quotation have odd functionality when used in a string currently,
//this lead to tests being created for any character, because other charters could act similarly in the future

const specialKeyboardChars = ['~', "`", "!", "@", "#", "$", "%", "^", "&", "(", ")", "-", "_", ",", "+", "=", "{", "}", "[", "]", "|", ":", ";", ",", "<", ">", "/", ".", ","]

const otherChars = ["å̵̼͜͠", "🤔", "ᴥ"]

const standardNumString = "44"

describe("CleanString", () => {

    test('CleanStringShouldRemoveSpacesReturning456WhenGiven 4 5 6', () => {
        expect(cleanString(" 4 5 6 ")).toBe("456");
    });

    test('CleanStringShouldNotModify9832', () => {
        expect(cleanString("9832")).toBe("9832");
    });

    test('CleanStringShouldRemoveMiddleNonNumReturning7263WhenGiven72-63', () => {
        expect(cleanString("72-63")).toBe("7263");
    });

    test('CleanStringShouldRemoveEndNonNumReturning7263WhenGiven7263-', () => {
        expect(cleanString("7263-")).toBe("7263");
    });

    test('CleanStringShouldRemoveStartNonNumReturning7263WhenGiven-7263', () => {
        expect(cleanString("-7263")).toBe("7263");
    });

    test('CleanStringShouldReturningEmptyStringWhenGivenStringWithNoNums', () => {
        expect(cleanString("alpha")).toBe("");
    });

    specialKeyboardChars.forEach(specialChar => {
        const addedString = specialChar + standardNumString
        it(`Special keyboard char: should remove ${specialChar} from ${addedString} to become ${standardNumString}`, () => {
            expect(cleanString(addedString)).toEqual(standardNumString);
        });
    });

    otherChars.forEach(otherChar => {
        const addedString = otherChar + standardNumString
        it(`Other char: should remove ${otherChar} from ${addedString} to become ${standardNumString}`, () => {
            expect(cleanString(addedString)).toEqual(standardNumString);
        });
    });
})