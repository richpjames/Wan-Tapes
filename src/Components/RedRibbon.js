import React from "react";
import styled from "styled-components";

const RibbonWrapper = styled.section`
  width: 100vw;
  height: 15vh;
  background: #ff3030;
  z-index: 10;
  position: absolute;
  top: 35%;
`;

export default function RedRibbon() {
  return <RibbonWrapper />;
}
