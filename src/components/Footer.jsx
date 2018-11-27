import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <ul className="icons">
      <li><a href="https://twitter.com/rjhilgefort" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
      <li><a href="https://www.facebook.com/rob.hilgefort" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
      <li><a href="https://www.instagram.com/rjhilgefort" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
      <li><a href="https://github.com/rjhilgefort" className="icon fa-github"><span className="label">GitHub</span></a></li>
    </ul>
    <p className="copyright">&copy; Rob Hilgefort -- Design: <a href="https://html5up.net">HTML5 UP</a> -- Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
  </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
