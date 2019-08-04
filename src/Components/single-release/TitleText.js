import React from "react";
import styled from "styled-components";

export const Title = styled.h1`
  top: 18%;
  left: 10%;
`;

export const Artist = styled.h1`
  left: 15%;
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
