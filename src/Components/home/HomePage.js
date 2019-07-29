import React from "react";
import styled from "styled-components";
import Listen from "./Listen";

const Hot = styled.h1`
  top: 18%;
  position: absolute;
  left: 10%;
`;

const Tap = styled.h1`
  left: 15%;
  position: absolute;
  top: 45%;
`;

export default function HomePage() {
  return (
    <>
      <Hot>Hot</Hot>
      <Tap>Tap</Tap>
      <Listen />
    </>
  );
}
