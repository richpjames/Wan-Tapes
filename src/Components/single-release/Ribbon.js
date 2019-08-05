import React from "react";
import styled from "styled-components";

const RibbonWrapper = styled.section`
  background: ${props => (props.colors ? props.colors.other : "#000")};
  z-index: 50;
  min-height: 50px;
  width: 100%;
  float: left;
  /* margin-top: -120%; */
`;

export default function Ribbon(props) {
  return <RibbonWrapper className="RibbonWrapper" {...props} />;
}
