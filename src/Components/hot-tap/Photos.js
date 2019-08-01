import React, { Component } from "react";
import Img from "react-image";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

const Image = styled.div`
  height: 50px;
  width: 50px;

  position: relative;
`;

export default class Photos extends Component {
  state = {
    baseUrl: "https://www.wantapes.com/img/TapeImage",
    photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
  };

  render() {
    const { photos, baseUrl } = this.state;
    const photoReel = photos.map(photo => {
      return (
        <VisibilitySensor>
          <Image>
            <Img src={`${baseUrl}${photo}`} alt="photo of Hot Tape" />
          </Image>
        </VisibilitySensor>
      );
    });
    return photoReel;
  }
}
