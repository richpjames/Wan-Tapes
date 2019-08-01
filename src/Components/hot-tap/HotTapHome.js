import React, { Component } from "react";
import styled from "styled-components";
import AudioPlayer from "./AudioPlayer";
import BuyButton from "./BuyButton";
import HotTapText from "./HotTapText";
import Container from "../Container";
import BackgroundWrapper from "../Background";
import Photos from "./Photos";

const SecondContainerWrap = styled.div`
  margin-top: 15vh;
`;

export default class HotTapHome extends Component {
  render() {
    return (
      <>
        <BackgroundWrapper className="BackgroundWrapper" height="200vh" />
        <Container primary />
        <HotTapText />
        <AudioPlayer />
        <SecondContainerWrap>
          <Container primary />
          <Photos />
        </SecondContainerWrap>

        {/* <BuyButton /> */}
      </>
    );
  }
}
