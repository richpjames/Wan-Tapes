import React from "react";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";

const Track = styled.li``;

export default function IndividualTrack({
  title,
  glyph,
  length,
  setStateWithTrack,
  uri
}) {
  return (
    <Track className="track">
      {`${glyph} ${title} ${length}`}
      <button onClick={() => setStateWithTrack("Play", title, uri)}>
        <FaPlay />
      </button>
    </Track>
  );
}
