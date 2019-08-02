import React from "react";
import styled from "styled-components";
import { FaStop, FaPause } from "react-icons/fa";

export const PlayStopPause = styled.button`
  margin-top: 5px;
`;

export default function MusicControlButton({ playState, setPlayState }) {
  return (
    <PlayStopPause
      className="ButtonWrapper"
      onClick={() => setPlayState(playState)}
    >
      {playState === "Stop" ? <FaStop /> : <FaPause />}
    </PlayStopPause>
  );
}
