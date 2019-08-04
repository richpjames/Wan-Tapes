import React from "react";
import styled from "styled-components";

export const Title = styled.h1`
  
`;

export const Artist = styled.h1`
 
`;

export default function TitleText({ title, artist }) {
  return (
    <>
      <Title>{title}</Title>
      <Artist>{(title !== artist )? artist : null}</Artist>
    </>
  );
}
