const { AddLineBreak } = require("../utils/utils");
const { releases } = require("../src/data/releases");
const { expect } = require("chai");

describe("AddLineBreak", () => {
  it("doesn't add linebreak when ids are the same", () => {
    const input = [
      {
        id: "A1",
        title: "Lane Creeper",
        length: 5.39,
        glyph: "†",
        uri: "https://www.wantapes.com/releases/ht-ht/trax/A1-Lane-Creeper.mp3"
      },
      {
        id: "A2",
        title: "Gooseberry",
        length: 4.47,
        glyph: "†",
        uri: "https://www.wantapes.com/releases/ht-ht/trax/A2-Gooseberry.mp3"
      }
    ];
    const actualOutput = AddLineBreak(input);
    const expectedOutput = ["NoSpace", "NoSpace"];
    expect(actualOutput).to.eql(expectedOutput);
  });
});
