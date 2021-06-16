const { translate } = require("../src/tdd");

describe("Translate function", () => {
  test("Pig latin translation", () => {
    let result = translate("Hello World");
    expect(result).toBe("ellohay orldway");
  });
});
