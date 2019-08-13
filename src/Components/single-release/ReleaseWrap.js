import React from "react";
import styled from "styled-components";
import TitleText from "../single-release/TitleText";
import Photos from "../single-release/Photos";
import BuyButton from "../single-release/BuyButton";
import AudioPlayer from "../single-release/AudioPlayer";

const BackgroundWrapper = styled.section`
  background: ${props => (props.colors ? props.colors.background : "#000")};
  height: ${props => (props.height ? props.height : "100vh")};
  display: flex;
  flex-direction: column;
  max-width: 40vw;
  max-height: 150vh;
`;

export const TopSegment = styled.div`
  background: #edeeef;
  margin: 7%;
  min-height: 70vh;
`;

const BottomSegmentWrap = styled.div`
  background: white;
`;

export default function Background(props) {
  const {
    title,
    artist,
    tracks,
    buyCode,
    photos,
    baseUrl,
    colors,
    coverArt
  } = props;
  return (
    <BackgroundWrapper {...props} className="BackgroundWrapper">
      <TopSegment coverArt={coverArt} primary className="TopSegment">
        <TitleText
          title={title}
          artist={artist}
          colors={colors}
          className="TitleText"
        />
        <AudioPlayer
          tracks={tracks}
          baseUrl={baseUrl}
          className="AudioPlayer"
        />
      </TopSegment>
      <BottomSegmentWrap className="BottomSegmentWrap">
        <Photos photos={photos} baseUrl={baseUrl} className="Photos" />
        <BuyButton buyCode={buyCode} className="BuyButton" />
      </BottomSegmentWrap>
    </BackgroundWrapper>
  );
}
