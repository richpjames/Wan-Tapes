import React from "react";
import styled from "styled-components";

export const ContainerWrap = styled.section`
  background: #edeeef;
  display: block;
  z-index: -1;
  width: 5vw;
  height: 5vh;
  /* position: ${props => (props.primary ? "relative" : "absolute")}; */

`;

export default function TopSegment(props) {
  return <ContainerWrap {...props} />;
}
