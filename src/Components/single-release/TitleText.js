import React from "react";
import styled from "styled-components";

export const Title = styled.h1`
  top: 18%;
  position: absolute;
  left: 10%;
`;

export const Artist = styled.h1`
  left: 15%;
  position: absolute;
  top: 45%;
`;

export default function TitleText({ title, artist }) {
  return (
    <>
      <Title>{title}</Title>
      <Artist>{(title !== artist )? artist : null}</Artist>
    </>
  );
}
