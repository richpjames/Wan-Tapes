import React, { Component } from "react";
import styled from "styled-components";
import { releases } from "../../data/releases.json";
import AudioPlayer from "../single-release/AudioPlayer";
import BackgroundWrapper from "../Background";
import Container from "../Container";
import TitleText from "../single-release/TitleText";
import Photos from "../single-release/Photos";
import BuyButton from "../single-release/BuyButton";
import Ribbon from "../Ribbon"

const SecondContainerWrap = styled.div`
  margin-top: 15vh;
`;

const Release = styled.section`width:20%;`;

const ReleasesWrapper = styled.section``;

export default class ReleasesHome extends Component {
  state = {
    isLoading: true,
    error: false,
    releases: []
  };
  render() {
    const { releases } = this.state;
    const releaseRoll = releases.map(
      ({ title, artist, releaseDate, tracks, buyCode, photos, url, colors }) => {
        return (
          <Release key={releaseDate}>
            <BackgroundWrapper colors={colors} height={"200vh"}/>
            <Container primary />
            <TitleText title={title} artist={artist} />
            <AudioPlayer tracks={tracks} url ={url}/>
            <Ribbon colors={colors}/>
            <SecondContainerWrap>
              <Container primary />
              <Photos photos={photos} url={url}/>
            </SecondContainerWrap>
            <BuyButton buyCode={buyCode} />
          </Release>
        );
      }
    );
    return <ReleasesWrapper>{releaseRoll}</ReleasesWrapper>;
  }
  componentDidMount = () => {
    this.setState({ releases: releases, isLoading: false });
  };
}
