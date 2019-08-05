const { AddLineBreak } = require("../utils/utils");
const { releases } = require("../src/data/releases");
const { expect } = require("chai");

describe("AddLineBreak", () => {
  it("returns a string in array when passed one track object", () => {
    const input = [
      {
        id: "A1",
        title: "Lane Creeper",
        length: 5.39,
        glyph: "†",
        uri: "https://www.wantapes.com/releases/ht-ht/trax/A1-Lane-Creeper.mp3"
      }
    ];
    const actualOutput = AddLineBreak(input);
    const expectedOutput = ["NoSpace"];
    expect(actualOutput).to.eql(expectedOutput);
  });
  it("returns two nospaces in array when passed two track object with the same first letter of id", () => {
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
  it("returns ['NoSpace', 'Space'] when passed two track object with two different first letters of id", () => {
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
    const actualOutput = AddLineBreak(input);
    const expectedOutput = ["NoSpace", "Space"];
    expect(actualOutput).to.eql(expectedOutput);
  });
  it("returns ['NoSpace', 'Space', 'NoSpace']in array when passed three track object with two different first letters of id followed by one of the same id", () => {
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
    const actualOutput = AddLineBreak(input);
    const expectedOutput = ["NoSpace", "Space", "NoSpace"];
    expect(actualOutput).to.eql(expectedOutput);
  });
});
