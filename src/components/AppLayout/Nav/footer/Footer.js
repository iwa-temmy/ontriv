import React from "react"
import classnames from "classnames"

const Footer = () => {
  return (
    <footer
      className={classnames("footer footer-light footer-static")}
    >
      <p className="mb-0 clearfix">
        <span className="float-md-left d-block d-md-inline-block mt-25">
          COPYRIGHT © {new Date().getFullYear()}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ontriv
          </a>
        </span>
        <span className="float-md-right d-none d-md-block">
        </span>
      </p>
    </footer>
  )
}

export default Footer
