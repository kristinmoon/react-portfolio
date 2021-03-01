import React from "react"
import Card from "../atoms/Card"
import data from "../ProjectList"

const Portfolio = () => {
  return (
    <div className="section" id="portfolio">
      <div className="container">
        <h3>Portfolio</h3>
        <div className="row">
          {data.projects.map(project => (
            <Card
              key={project.id}
              heading={project.title}
              paragraph={project.para}
              imgUrl={project.imageSrc}
              projectLink={project.url}
              githubLink={project.githubUrl}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
