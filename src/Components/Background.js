import React from "react";
import styled from "styled-components";

const BackgroundWrapper = styled.section`
  background: #a0ecff;
  width: 99vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
  top: 0;
`;

export default function Background() {
  return <BackgroundWrapper className="BackgroundWrapper" />;
}
