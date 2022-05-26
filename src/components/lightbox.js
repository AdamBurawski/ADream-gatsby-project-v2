import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

const LightboxContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 625px 770px 800px;
  grid-template-rows: 537px 341px;
  width: 2255px;
`

const PreviewButton = styled.button`
  background: transparent;
  padding: 0;
  margin: 0;
`

export default class Lightbox extends Component {
  static propTypes = {
    galleryImages: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      showLightbox: false,
      selectedImage: null,
    }
  }

  render() {
    const { galleryImages } = this.props
    const { selectedImage, showLightbox } = this.state
    return (
      <Fragment>
        <button></button>
        <LightboxContainer>
          {galleryImages.map(image => (
            <PreviewButton
              key={image.node.childImageSharp.fluid.src}
              type="button"
              onClick={() =>
                this.setState({ showLightbox: true, selectedImage: image })
              }
            >
              <Image fluid={image.node.childImageSharp.fluid} />
            </PreviewButton>
          ))}
        </LightboxContainer>
        {showLightbox && (
          <Dialog>
            <Image fluid={selectedImage.node.childImageSharp.fluid} />
            <button
              type="button"
              onClick={() => this.setState({ showLightbox: false })}
            >
              Zamknij
            </button>
          </Dialog>
        )}
      </Fragment>
    )
  }
}
