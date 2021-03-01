import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink, githubLink, alt }) => {
  return (
    <div className="col s12 m6 l6">
      <div className="card small sticky-action hoverable">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={imgUrl} alt={alt} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{heading}<i className="material-icons right">more_vert</i></span>
          <div className="card-action center">
            <a href={projectLink ? projectLink : "#"} target="_blank" rel="noopener noreferrer">Check it out</a>
            <a href={githubLink ? githubLink : "#"} target="_blank" rel="noopener noreferrer">GitHub</a>

          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{heading}<i className="material-icons right">close</i></span>
          <p>{paragraph}</p>
        </div>
      </div>
    </div >
  )
};

export default Card;
