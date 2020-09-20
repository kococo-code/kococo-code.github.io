import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <Header/>
        <main>{children}</main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
