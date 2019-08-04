import React from "react";
import styled from "styled-components";
import TopSegment from "../single-release/TopSegment";
import TitleText from "../single-release/TitleText";
import Photos from "../single-release/Photos";
import BuyButton from "../single-release/BuyButton";
import Ribbon from "../single-release/Ribbon";
import AudioPlayer from "../single-release/AudioPlayer";

const BottomSegmentWrap = styled.div`
`;

export const BackgroundWrapper = styled.section`
  background: ${props => (props.colors ? props.colors.background : "#000")};
  border: 5px blue solid;
  /* height: ${props => (props.height ? props.height : "100vh")}; */

`;

export default function Background(props) {
  const { title, artist, tracks, buyCode, photos, baseUrl, colors } = props;
  return (
    <BackgroundWrapper {...props} className="BackgroundWrapper">
      <TopSegment primary>
        <TitleText title={title} artist={artist} />
        <AudioPlayer tracks={tracks} baseUrl={baseUrl} />
        <Ribbon colors={colors} />
      </TopSegment>
      <BottomSegmentWrap>
        <Photos photos={photos} baseUrl={baseUrl} />
        <BuyButton buyCode={buyCode} />
      </BottomSegmentWrap>
    </BackgroundWrapper>
  );
}
