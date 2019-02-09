import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Document, Page } from 'react-pdf';
import { compose, when, __, add, subtract, always, gt, lt } from 'ramda'


const PdfControls = styled.div`
  margin:auto;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  * {
    margin: 0 20px;
  }
  span {
    align-self: center;
  }
`
const DocumentContainer = styled.div`
  margin:auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .react-pdf__Document > .react-pdf__Page > canvas {
    max-width: 100%;
    height: auto !important;
  }
`

const PropTypesT = {
  file: PropTypes.string.isRequired,
  scale: PropTypes.number,
}
class PDF extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  prevPage = () => {
    const {
      numPages,
      pageNumber,
    } = this.state
    compose(
      x => this.setState({ pageNumber: x }),
      when(lt(__, 1), always(numPages)),
      subtract(__, 1),
    )(pageNumber)
  }

  nextPage = () => {
    const {
      numPages,
      pageNumber,
    } = this.state
    compose(
      x => this.setState({ pageNumber: x }),
      when(gt(__, numPages), always(1)),
      add(1),
    )(pageNumber)
  }

  render() {
    const { pageNumber, numPages } = this.state
    const { file, scale=1.5 } = this.props

    return (
      <div>
        <DocumentContainer>
          <Document
            file={file}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} scale={scale}/>
          </Document>
        </DocumentContainer>
        <PdfControls>
          <button onClick={() => this.prevPage()}>Prev Page</button>
          <span>Page {pageNumber} of {numPages}</span>
          <button onClick={() => this.nextPage()}>Next Page</button>
        </PdfControls>
      </div>
    );
  }
}

PDF.propTypes = PropTypesT

export default PDF