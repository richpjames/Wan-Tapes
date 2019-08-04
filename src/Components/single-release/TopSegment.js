import React from "react";
import styled from "styled-components";

export const ContainerWrap = styled.section`
  background: #edeeef;
  /* position: ${props => (props.primary ? "relative" : "absolute")}; */

`;

export default function TopSegment(props) {
  return <ContainerWrap {...props} />;
}
