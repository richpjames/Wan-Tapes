import React from "react";
import styled from "styled-components";
import { FaStop, FaPause } from "react-icons/fa";

const ButtonWrapper = styled.button``;

export default function MusicControlButton({ playState, setPlayState }) {
  return (
    <ButtonWrapper
      className="ButtonWrapper"
      onClick={() => setPlayState(playState)}
    >
      {playState === "Stop" ? <FaStop /> : <FaPause />}
    </ButtonWrapper>
  );
}
