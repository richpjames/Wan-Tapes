import React, { Component } from "react";
import { releases } from "../../data/releases.json";

export default class ReleasesHome extends Component {
  state = {
    isLoading: true,
    error: false,
    releases: []
  };
  render() {
    const { releases } = this.state;
    // const releaseRoll = releases.map(release => {
    //   // console.log(release);
    // });
    return <p>{releases.map(console.log)}</p>;
  }
  componentDidMount = () => {
    this.setState({ releases: releases, isLoading: false });
  };
}
