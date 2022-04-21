//main/integration tests, could test others

const main = require("./main");

describe("Main", () => {

  test('MainReturnsAlphaOmegaGiven(["221b","99","samuel"],[[221,"alpha"],[25,"charlie],[99,"omega"]])', () => {
    expect(main(["221b", "99", "samuel"], [[221, "alpha"], [25, "charlie"], [99, "omega"]])).toStrictEqual(["alpha", "omega"]);
  });

  //duplicate ids
  test('MainReturnsWorldGiven(["221b","992","221samuel"],[[221,"world"],[25,"charlie],[99,"omega"]])', () => {
    expect(main(["221b", "992", "221samuel"], [[221, "world"], [25, "charlie"], [99, "omega"]])).toStrictEqual(["world"]);
  });

  //when one num id is apart of another
  test('MainReturnsWorldCharlieGiven(["221b","992","221samuel"],[[221,"world"],[25,"charlie],[99,"omega"]])', () => {
    expect(main(["221b", "992", "22samuel"], [[221, "world"], [22, "charlie"], [99, "omega"]])).toStrictEqual(["world","charlie"]);
  });

  //when no ids match
  test('MainReturnsWorldCharlieGiven(["221b","992","221samuel"],[[221,"world"],[25,"charlie],[99,"omega"]])', () => {
    expect(main(["221b", "992", "22samuel"], [[2221, "world"], [223, "charlie"], [99, "omega"]])).toStrictEqual([]);
  });

   //when an unclean id contains a specality
   test('MainReturnsWorldCharlieGiven(["221b","992","221samuel"],[[221,"world"],[25,"charlie],[99,"omega"]])', () => {
    expect(main(["78world", "992", "22samuel"], [[2221, "world"], [223, "charlie"], [99, "omega"]])).toStrictEqual([]);
  });

  //when no nums in any ids
  test('MainReturnsWorldCharlieGiven(["221b","992","221samuel"],[[221,"world"],[25,"charlie],[99,"omega"]])', () => {
    expect(main(["world", "", "samuel"], [[2221, "world"], [223, "charlie"], [99, "omega"]])).toStrictEqual([]);
  });

   //when ids contain same nonnum chars
   test('MainReturnsWorldCharlieGiven(["221b","992","221samuel"],[[221,"world"],[25,"charlie],[99,"omega"]])', () => {
    expect(main(["red88", "red99", "samuel"], [[88, "world"], [99, "charlie"], [919, "omega"]])).toStrictEqual(["world","charlie"]);
  });

   //order is based off ids not specliaties
   test('MainReturnsWorldCharlieGiven(["221b","992","221samuel"],[[221,"world"],[25,"charlie],[99,"omega"]])', () => {
    expect(main(["88", "99", "samuel"], [[99, "world"], [88, "hello"], [919, "omega"]])).toStrictEqual(["hello","world"]);
  });
})