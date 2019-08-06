import React from "react";
import styled from "styled-components";
import { FaStop, FaPause } from "react-icons/fa";

export const Stop = styled.button`
  margin-top: 5px;
`;

export default function MusicControlButton({ setPlayState }) {
  return (
    <Stop className="ButtonWrapper" onClick={() => setPlayState("Stop")}>
      <FaStop />
    </Stop>
  );
}
