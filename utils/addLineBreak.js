const addLineBreak = tracks => {
  const lineBreaks = tracks.map((track, i) => {
    let indexMinus1 = i - 1;
    let previousTrackSideId = tracks[indexMinus1]
      ? tracks[indexMinus1].id[0]
      : tracks[i].id[0];
    let currentTrackSideId = tracks[i].id[0];
    if (previousTrackSideId !== currentTrackSideId) return true;
    else return false;
  });
  return lineBreaks;
};

module.exports = { addLineBreak };
