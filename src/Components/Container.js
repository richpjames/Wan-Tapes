import React from "react";
import styled from "styled-components";

export const ContainerWrap = styled.section`
  background: #edeeef;
  display: block;
  z-index: -1;
  width: 75vw;
  height: 85vh;
  position: ${props => (props.primary ? "relative" : "absolute")};
  top: 5vh;
  bottom: 10vh;
  left: 10vh;
  right: 10vh;
`;

export default function Container(props) {
  return <ContainerWrap {...props} />;
}
