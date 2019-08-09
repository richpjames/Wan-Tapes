import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 200px;
`;

export default function Cover(props) {
  const { coverArt } = props;
  return <Image src={coverArt} />;
}
