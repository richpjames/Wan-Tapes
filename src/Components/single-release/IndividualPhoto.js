import React from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100px;
  z-index: 20;
`;

export default function IndividualPhoto(props) {
  const { openLightbox, photo, index } = props;

  return (
    <Image
      onClick={() => openLightbox(index)}
      src={photo}
      alt="photo of tape"
    />
  );
}
