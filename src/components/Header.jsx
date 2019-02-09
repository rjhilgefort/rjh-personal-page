// TODO: Fix the `a` to be a button and style accordingly
//       https://github.com/rjhilgefort/rjh-personal-page/issues/5
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-code"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Rob Hilgefort</h1>
                <p>
                  Software Engineer - FP Enthusiast, UK Graduate, Colorado resident, Cincinnati Native, Husband and Father.<br />
                  Running, Trail Running, MTB, Road Cycling, Skiing, Snow Boarding, Tabletop Games, CCGs, Bali-song, OLKB.<br />
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a onClick={() => {props.onOpenArticle('resume')}}>Resume</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
