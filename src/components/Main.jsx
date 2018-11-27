import React from 'react'
import PropTypes from 'prop-types'

import aboutPic from '../images/profilepic-serious.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={aboutPic} alt="" /></span>
          <p>
            I was born and raised in Cincinnati, OH, and moved to Denver in 2018 to enjoy the mountains as my wife and I start a family. We had our first child in August of 2017 and both have really enjoyed becoming parents. Aside from spending time raising a little girl, I'm enthusiastic about the outdoors! Specifically, I love road biking, mountain biking, road running, trail running, hiking, kayaking, skiing, snowboarding, swimming, and camping. I also love table top games, coding, mechanical keyboards, reading, and building things in general.
          </p>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
