import React, { Component } from "react";
import styled from "styled-components";
import AudioPlayer from "./AudioPlayer";
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
        <AudioPlayer />;
        <BuyButton />
      </>
    );
  }
}
