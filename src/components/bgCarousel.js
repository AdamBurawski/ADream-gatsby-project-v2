import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

export default class BgCarousel extends Component {
  static propTypes = {
    bgGalleryImages: PropTypes.array.isRequired,
  };

  constructor() {
    super();
    this.onClickForward = this.onClickForward.bind(this);
    this.onClickBack = this.onClickBack.bind(this);

    const img0 = require("../images/Bg/bg1.webp").default;
    const img1 = require("../images/Bg/bg2.webp").default;
    const img2 = require("../images/Bg/bg3.webp").default;

    // <img src={require("../images/OwnOffice/image.webp").default} alt="" />

    this.state = {
      index: 0,
      imgList: [img0, img1, img2],
      percent: 33,
      num: 1,
    };
  }

  onClickForward() {
    if (this.state.index + 1 === this.state.imgList.length) {
      this.setState({
        index: 0,
        percent: 33,
        num: 1,
      });
    } else if (this.state.index + 2 === this.state.imgList.length) {
      this.setState({
        index: 2,
        percent: 100,
        num: 3,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
        percent: 66,
        num: 2,
      });
    }
  }

  onClickBack() {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.imgList.length - 1,
        percent: 100,
        num: 3,
      });
    } else if (this.state.index - 2 === -1) {
      this.setState({
        index: 0,
        percent: 33,
        num: 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
        percent: 66,
        num: 2,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <button className="btn1" onClick={this.onClickBack}>
          ←
        </button>
        <button className="btn2" onClick={this.onClickForward}>
          →
        </button>
        <img
          className="bgImg"
          src={this.state.imgList[this.state.index]}
          alt=""
        />

        <div className="progressWrapper">
          <span>0{this.state.num}</span>
          <div
            className="progressBar"
            style={{
              background: `linear-gradient(to left, white ${
                this.state.percent - 1
              }%, black ${this.state.percent}%`,
            }}
          ></div>
          <span>03</span>
        </div>
      </Fragment>
    );
  }
}
