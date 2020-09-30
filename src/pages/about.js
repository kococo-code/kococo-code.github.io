import React from "react"
import Header from 'components/header'
import {Link} from 'gatsby'
import SEO from "../components/seo"
const About = () => (
  <React.Fragment>
    <SEO title="about" />
    <Header></Header>
    <section id="About">
        About Me Page
    </section>
    <div className="button-wrapper">
      <Link className="back-btn" to="/">Back</Link>
    </div>
  </React.Fragment>

)

export default About
