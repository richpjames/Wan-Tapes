import React from "react";
import styled from "styled-components";
import wansplash from "../../Assets/wan-splash.png";

const Container = styled.section`
  height: 100vh;
  max-height: 100%;
  max-width: 100%;
  width: 100vw;
  margin: 0 auto;
  /* background: red; */
  z-index: -1;
  overflow: hidden;
`;

const WanTapesLetters = styled.img`
  height: auto;
  width: 80%;
  position: absolute;
  z-index: 5;
  background: white;
  overflow: hidden;
  margin-left: -40%;
  margin-top: -50%;
`;

const ImageWrap = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 80%;
  background: url(./../../Assets/wan-splash.png) center center no-repeat;
`;

export default function HomePage() {
  return (
    <Container className="Container">
      <ImageWrap className="ImageWrap" />
      {/* <WanTapesLetters
          className="WanTapesLetters"
          src={wansplash}
          alt="wan tapes splash"
        /> */}
    </Container>
  );
}
