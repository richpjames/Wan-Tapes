import React from "react";
import styled from "styled-components";
import banner from "../../Assets/wan-logo-small.png";

const BannerImg = styled.img`
  height: 100px;
  margin-top: 1vh;
  margin-left: 1vw;
`;

const Banner = () => {
  return <BannerImg className="BannerImg" src={banner} />;
};

export default Banner;
