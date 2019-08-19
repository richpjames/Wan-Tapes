import React from "react";
import styled from "styled-components";

const Cover = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const CoverArt = props => {
  const { coverArt, showDetail } = props;
  return <Cover src={coverArt} onClick={showDetail} />;
};

export default CoverArt;
