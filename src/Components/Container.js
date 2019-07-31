import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  background: #edeeef;
  display: block;
  z-index: -1;
  width: 75vw;
  height: 85vh;
  position: absolute;
  top: 5vh;
  bottom: 10vh;
  left: 10vh;
  right: 10vh;
`;

export default function Container() {
  return <Wrap />;
}
