import React from "react";
import styled from "styled-components";

export const Hot = styled.h1`
  top: 18%;
  position: absolute;
  left: 10%;
`;

export const Tap = styled.h1`
  left: 15%;
  position: absolute;
  top: 45%;
`;

export default function HotTapText() {
  return (
    <>
      <Hot>Hot</Hot>
      <Tap>Tap</Tap>
    </>
  );
}
