import React from "react";
import styled from "styled-components";

const RibbonWrapper = styled.section`
  width: 100%;
  height: 15%;
  background: ${props => (props.colors ? props.colors.other : "#000")};
  z-index: 10;
  position: absolute;
  top: 35%;
`;

export default function Ribbon(props) {
  return <RibbonWrapper {...props} />;
}
