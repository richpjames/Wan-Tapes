import React from "react";
import styled from "styled-components";

export const BackgroundWrapper = styled.section`
  background: #a0ecff;
  width: 100vw;
  height: ${props => (props.height ? props.height : "100vh")};
  z-index: -2;
  position: absolute;
  top: 0;
`;

export default function Background(props) {
  return <BackgroundWrapper {...props} className="BackgroundWrapper" />;
}
