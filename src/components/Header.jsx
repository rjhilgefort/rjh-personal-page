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
                <li><button onClick={() => {props.onOpenArticle('about')}}>About</button></li>
                <li><button onClick={() => {props.onOpenArticle('resume')}}>Resume</button></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
