import React from "react";
import styled from "styled-components";

const BackgroundWrapper = styled.section`
  background: #a0ecff;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  position: absolute;
  top: 0;
`;

export default function Background() {
  return <BackgroundWrapper className="BackgroundWrapper" />;
}
