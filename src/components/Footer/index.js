import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l12 s12">
            <ul>
              <li>
                <a href="https://github.com/kristinmoon" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/moonkristin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href="https://twitter.com/kristindmoon" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2021 Moon Ink
        </div>
      </div>
    </footer>
  )
}

export default Footer;
