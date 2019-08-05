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
`;

const BottomSegmentWrap = styled.div`
  background: white;
`;

export default function Background(props) {
  const { title, artist, tracks, buyCode, photos, baseUrl, colors } = props;
  return (
    <BackgroundWrapper {...props} className="BackgroundWrapper">
      <TopSegment primary>
        <TitleText title={title} artist={artist} colors={colors} />
        <AudioPlayer tracks={tracks} baseUrl={baseUrl} />
      </TopSegment>
      <BottomSegmentWrap>
        <Photos photos={photos} baseUrl={baseUrl} />
        <BuyButton buyCode={buyCode} />
      </BottomSegmentWrap>
    </BackgroundWrapper>
  );
}
