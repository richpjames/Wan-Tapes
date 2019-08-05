import React from "react";
import styled from "styled-components";
import Ribbon from "./Ribbon";

export const Title = styled.h1`
  margin-top: 5vh;
  margin-bottom: 0vh;
`;

export const Artist = styled.h2`
  min-height: 10vh;
  padding: 0;
`;

const TextWrapper = styled.section``;

export default function TitleText({ title, artist, colors }) {
  return (
    <TextWrapper>
      <Title>{title}</Title>
      <Ribbon colors={colors} />
      <Artist>{title !== artist ? artist : null}</Artist>
    </TextWrapper>
  );
}
