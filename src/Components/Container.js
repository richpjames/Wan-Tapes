import React from "react";
import styled from "styled-components";
import HomePage from "./home/HomePage"

const BoxWrapper = styled.div`
  margin: auto auto;
  width: 85%;
`;

export default function Container() {
  return (
    <BoxWrapper className="BoxWrapper">
      <HomePage/>
    </BoxWrapper>
  );
}
