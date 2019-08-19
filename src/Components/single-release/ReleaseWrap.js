import React from "react";
import styled from "styled-components";
import TitleText from "../single-release/TitleText";
import Photos from "../single-release/Photos";
import BuyButton from "../single-release/BuyButton";
import AudioPlayer from "../single-release/AudioPlayer";
import CoverArt from "./CoverArt";

const BackgroundWrapper = styled.section`
  background: ${props => (props.colors ? props.colors.background : "#000")};
  height: ${props => (props.height ? props.height : "100vh")};
  display: flex;
  flex-direction: column;
  max-width: 40vw;
  min-width: 40vw;
  height: auto;
`;

export const TopSegment = styled.div`
  background: #edeeef;
  margin: 7%;
  min-height: 70vh;
`;

export default function ReleaseWrap(props) {
  const {
    title,
    artist,
    tracks,
    buyCode,
    photos,
    baseUrl,
    colors,
    coverArt,
    showDetail,
    detail
  } = props;
  return (
    <>
      {detail ? (
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
            <Photos photos={photos} baseUrl={baseUrl} className="Photos" />
            <BuyButton buyCode={buyCode} className="BuyButton" />
          </TopSegment>
        </BackgroundWrapper>
      ) : (
        <CoverArt coverArt={coverArt} showDetail={showDetail} />
      )}
    </>
  );
}
