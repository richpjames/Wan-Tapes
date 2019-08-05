const AddLineBreak = tracks => {
  const lineBreaks = tracks.map((track, i) => {
    // let indexMinus1 = i - 1;
    // console.log(tracks[indexMinus1]);
    return "NoSpace";
  });
  console.log(lineBreaks)
  return lineBreaks;
};

module.exports = { AddLineBreak };
