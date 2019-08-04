import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import styled from "styled-components";

const Track = styled.li``;
export default function IndividualTrack({
  title,
  glyph,
  length,
  setStateWithTrack,
  uri,
  selectedTrack
}) {
  return (
    <Track className="track">
      {`${glyph} ${title} ${length}`}

      {selectedTrack === title ? (
        <>
          <button onClick={() => setStateWithTrack("Pause")}>
            <FaPause />
          </button>
        </>
      ) : (
        <button onClick={() => setStateWithTrack("Play", title, uri)}>
          <FaPlay />
        </button>
      )}
    </Track>
  );
}
