import React from 'react'
import PropTypes from 'prop-types'
import { withProps } from 'recompose'
import aboutPic from '../images/profilepic-serious.jpg'
import resumePdf from '../images/Rob-Hilgefort-Resume.pdf'
import ArticleModalTemplate from './ArticleModalTemplate'
import PDF from './PDF'

const Close = ({ onCloseArticle }) => (
  <div className="close" onClick={onCloseArticle}></div>
)
const Image = ({ src }) => (
  <span className="image main"><img src={src} alt="" /></span>
)

const PropTypesT = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}
const Main = ({
  article,
  articleTimeout,
  timeout,
  onCloseArticle,
  setWrapperRef,
}) => {
  const ArticleModal = withProps({
    article,
    articleTimeout,
    CloseButton: withProps({ onCloseArticle })(Close),
  })(ArticleModalTemplate)

  return (
    <div ref={setWrapperRef} id="main" style={timeout ? {display: 'flex'} : {display: 'none'}}>

      <ArticleModal name="about">
        <Image src={aboutPic} />
        <p style={{ fontSize: '125%' }}>
          I was born and raised in Cincinnati, OH, and moved to Denver in 2018 to enjoy the mountains as my wife and I start a family. We had our first child in August of 2017 and both have really enjoyed becoming parents. Aside from spending time raising a little girl, I'm enthusiastic about the outdoors! Specifically, I love road biking, mountain biking, road running, trail running, hiking, kayaking, skiing, snowboarding, swimming, and camping. I also love table top games, coding, mechanical keyboards, reading, and building things in general.
        </p>
      </ArticleModal>

      <ArticleModal name="resume">
        <PDF file={resumePdf}/>
      </ArticleModal>

    </div>
  )
}

Main.propTypes = PropTypesT

export default Main
