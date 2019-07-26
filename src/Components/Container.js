import React from "react";

import styled from "styled-components";
import Buy from "./Buy";

const ContainerWrapper = styled.section`
  background: #fcfdfe;
  display: block;
  z-index: 5;
  width: 75vw;
  height: 85vh;
  margin: auto auto;
  position: relative;
  top: 5vh;
  bottom: 10vh;
  left: 10vh;
  right: 10vh;
`;

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

export default function Container() {
  return (
    <ContainerWrapper>
      <Hot>Hot</Hot>
      <Tap>Tap</Tap>
      <Buy />
    </ContainerWrapper>
  );
}
