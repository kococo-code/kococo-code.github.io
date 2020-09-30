import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss';
const Header = ({ siteTitle }) => (
      <header>
        <Link to="https://github.com/kococo-code" target="_blank">Kococo</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>

        </nav>
      </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
