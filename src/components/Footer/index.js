import React from "react"
import data from "../ProjectList"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <h1>Contact</h1>
          <h2>Let's create your moonshine</h2>
          <a className="email-link" href={`mailto:kdm602@icloud.com`}>
            kdm602@icloud.com
          </a>
          <div className="social-icons">
            {data.social.map(socialLink => (
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            © 2020 Moon Ink
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
