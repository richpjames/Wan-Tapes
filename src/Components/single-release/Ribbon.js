import React from "react";
import styled from "styled-components";

const RibbonWrapper = styled.section`
  width: 100%;
  background: ${props => (props.colors ? props.colors.other : "#000")};
  
`;

export default function Ribbon(props) {
  return <RibbonWrapper {...props} />;
}
