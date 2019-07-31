import React, { Component } from "react";
import styled from "styled-components";
import HowlerPlayer from "./HowlerPlayer";
import BuyButton from "./BuyButton";

export const BoxWrapper = styled.div`
  margin: auto auto;
  width: 85%;
`;

export default class HotTapHome extends Component {
  state = {};
  render() {
    return (
      <>
        <HowlerPlayer />
        <BuyButton />
      </>
    );
  }
}
