import React from "react";

export default function IndividualTrack({ title, glyph, setStateWithTrack }) {
  // const { title } = props;
  return (
    <li onClick={() => setStateWithTrack(title)}>{`${glyph} ${title}`}</li>
  );
}
