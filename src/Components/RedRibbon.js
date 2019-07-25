import React from "react";
import styled from "styled-components";

const RibbonWrapper = styled.section`
  width: 100%;
  height: 15%;
  background: #ff3030;
  z-index: 10;
  position: absolute;
  top: 35%;
`;

export default function RedRibbon() {
  return <RibbonWrapper />;
}
