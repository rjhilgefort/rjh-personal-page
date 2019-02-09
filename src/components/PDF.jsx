import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Document, Page } from 'react-pdf';
import { compose, when, __, add, subtract, always, gt, lt } from 'ramda'

const PropTypesT = {
  route: PropTypes.string,
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
        <Document
          file={file}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={scale}/>
        </Document>
        <button onClick={() => this.prevPage()}>Prev Page</button>
        <span style={{ margin: '0 283px' }}>Page {pageNumber} of {numPages}</span>
        <button onClick={() => this.nextPage()}>Next Page</button>
      </div>
    );
  }
}

PDF.propTypes = PropTypesT

export default PDF