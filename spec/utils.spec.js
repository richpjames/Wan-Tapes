const { addLineBreak } = require("../utils/utils");
const { releases } = require("../src/data/releases");
const { expect } = require("chai");

describe("addLineBreak", () => {
  it("returns false in array when passed one track object", () => {
    const input = [
      {
        id: "A1",
        title: "Lane Creeper",
        length: 5.39,
        glyph: "†",
        uri: "https://www.wantapes.com/releases/ht-ht/trax/A1-Lane-Creeper.mp3"
      }
    ];
    const actualOutput = addLineBreak(input);
    const expectedOutput = [false];
    expect(actualOutput).to.eql(expectedOutput);
  });
  it("returns false in array when passed two track object with the same first letter of id", () => {
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
    const actualOutput = addLineBreak(input);
    const expectedOutput = [false, false];
    expect(actualOutput).to.eql(expectedOutput);
  });
  it("returns [false, true] when passed two track object with two different first letters of id", () => {
    const input = [
      {
        id: "A1",
        title: "Lane Creeper",
        length: 5.39,
        glyph: "†",
        uri: "https://www.wantapes.com/releases/ht-ht/trax/A1-Lane-Creeper.mp3"
      },
      {
        id: "B2",
        title: "Gooseberry",
        length: 4.47,
        glyph: "†",
        uri: "https://www.wantapes.com/releases/ht-ht/trax/A2-Gooseberry.mp3"
      }
    ];
    const actualOutput = addLineBreak(input);
    const expectedOutput = [false, true];
    expect(actualOutput).to.eql(expectedOutput);
  });
  it("returns [false, true, false]in array when passed three track object with two different first letters of id followed by one of the same id", () => {
    const input = [
      {
        id: "A1",
        title: "Lane Creeper",
        length: 5.39,
        glyph: "†",
        uri: "https://www.wantapes.com/releases/ht-ht/trax/A1-Lane-Creeper.mp3"
      },
      {
        id: "B2",
        title: "Gooseberry",
        length: 4.47,
        glyph: "†",
        uri: "https://www.wantapes.com/releases/ht-ht/trax/A2-Gooseberry.mp3"
      },
      {
        id: "B3",
        title: "Gooseberry",
        length: 4.47,
        glyph: "†",
        uri: "https://www.wantapes.com/releases/ht-ht/trax/A2-Gooseberry.mp3"
      }
    ];
    const actualOutput = addLineBreak(input);
    const expectedOutput = [false, true, false];
    expect(actualOutput).to.eql(expectedOutput);
  });
  it("returns [false, false, true] when passed the actual data", () => {
    const input = [ { id: 'A1',
       title: 'Lane Creeper',
       length: 5.39,
       glyph: '†',
       uri:
        'https://www.wantapes.com/releases/ht-ht/trax/A1-Lane-Creeper.mp3' },
     { id: 'A2',
       title: 'Gooseberry',
       length: 4.47,
       glyph: '†',
       uri:
        'https://www.wantapes.com/releases/ht-ht/trax/A2-Gooseberry.mp3' },
     { id: 'B1',
       title: 'Almost Definitely Nothing',
       length: 12.01,
       glyph: '‡',
       uri:
        'https://www.wantapes.com/releases/ht-ht/trax/B1-Almost-Definitely-Nothing.mp3' } ]
    const actualOutput = addLineBreak(input);
    const expectedOutput = [false, false, true];
    expect(actualOutput).to.eql(expectedOutput);
  });
});
