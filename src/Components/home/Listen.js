import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const ListenWrapper = styled.h1`
  position: absolute;
  bottom: 6%;
  right: 20%;
  z-index: 10;
`;

export default function Listen() {
  return (
    <ListenWrapper>
      <Link to="/releases/hot-tap">Listen...</Link>
    </ListenWrapper>
  );
}
