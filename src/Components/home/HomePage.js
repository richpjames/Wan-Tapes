import React from "react";
import styled from "styled-components";
import Listen from "./Listen";
import HotTapText from "../hot-tap/HotTapText";
import Background from "../Background";
import Container from "../Container";

export default function HomePage() {
  return (
    <>
      <Background />
      <Container />
      <HotTapText />
      <Listen />
    </>
  );
}
