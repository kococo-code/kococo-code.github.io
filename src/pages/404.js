import React from "react"
import {Link} from 'gatsby'
import SEO from "../components/seo"
import './NotFound.scss';
const NotFoundPage = () => (
  <React.Fragment>
    <SEO title="404: Not found" />
    <section id="NotFound">404: Not Found</section>
    <div className="button-wrapper">
      <Link className="back-btn" to="/">Back</Link>
    </div>
  </React.Fragment>

)

export default NotFoundPage
