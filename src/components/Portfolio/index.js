import React from "react"
import Card from "../atoms/Card"
import data from "../ProjectList"

const Portfolio = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <h1>Portfolio</h1>

          <div className="grid">
            {data.projects.map(project => (
              <Card
                key={project.id}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
