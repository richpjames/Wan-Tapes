import React from "react";
import styled from "styled-components";

const CoverArt = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const CoverArt = props => {
  const { coverArt } = props;
  return <Cover src={coverArt} />;
};

export default CoverArt;
