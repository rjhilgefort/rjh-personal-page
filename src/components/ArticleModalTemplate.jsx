import React from 'react'
import PropTypes from 'prop-types'
import { toUpper } from 'ramda'

const activeStringWhenEq = a => b => a === b ? 'active' : ''
const timeoutStringOfBool = x => x ? 'timeout' : ''

const PropTypesT = {
  name: PropTypes.string.isRequired,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  CloseButton: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
}
const ArticleModalTemplate = ({ 
  name,
  article,
  articleTimeout,
  CloseButton,
  children,
}) => (
  <article 
    id={name} 
    className={`${activeStringWhenEq(article)(name)} ${timeoutStringOfBool(articleTimeout)}`} 
    style={{display:'none'}}
  >
    <h2 className="major">{toUpper(name)}</h2>
    {children}
    <CloseButton/>
  </article>
)
  
ArticleModalTemplate.propTypes = PropTypesT

export default ArticleModalTemplate