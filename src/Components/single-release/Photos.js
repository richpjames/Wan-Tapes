import React, { Component } from "react";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import IndividualPhoto from "./IndividualPhoto";

const ImagesWrapper = styled.div`
  display: flex;
  padding-top: 10%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  z-index: 5;
  border: 1px red dashed;
`;

export default class Photos extends Component {
  state = { photoIndex: 0, isOpen: false };

  render() {
    const { photoIndex, isOpen } = this.state;
    const { baseUrl, photos } = this.props;
    const imagesUrls = photos.map(photo => `${baseUrl}img/${photo}`);

    const photoReel = imagesUrls.map((photo, i) => {
      return (
        <IndividualPhoto
          className="IndividualPhoto"
          openLightbox={this.openLightbox}
          index={i}
          photo={photo}
          key={photo}
        />
      );
    });
    return (
      <div>
        <VisibilitySensor>
          <ImagesWrapper className="ImagesWrapper">{photoReel}</ImagesWrapper>
        </VisibilitySensor>

        {isOpen && (
          <Lightbox
            mainSrc={imagesUrls[photoIndex]}
            nextSrc={imagesUrls[(photoIndex + 1) % imagesUrls.length]}
            prevSrc={
              imagesUrls[
                (photoIndex + imagesUrls.length - 1) % imagesUrls.length
              ]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + imagesUrls.length - 1) % imagesUrls.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % imagesUrls.length
              })
            }
          />
        )}
      </div>
    );
  }
  openLightbox = i => {
    this.setState({ isOpen: true, photoIndex: i });
  };
}
