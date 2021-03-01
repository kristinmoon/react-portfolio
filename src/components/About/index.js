import React from 'react';
import headshot from "../../assets/images/kmoon-headshot.jpg";

function About() {
  return (
    <div className="section" id="about">
      <div className="container">
        <h3>Hi, I'm Kristin!</h3>
        <img src={headshot} className="my-2" style={{ width: "25%" }} alt="headshot" />
        <p>I am a native Arizonan and currently live in Central Phoenix with my husband and two-year-old son. I love to travel the world and look forward to sharing that with my growing family. I have my degree in art history from the University of Arizona and have been an event planner for the past 15 years, coordinating large conferences, professional development trainings, fundraisers, golf tournaments, weddings, and art shows. Recently, I also completed my Master Florist certification through the Arizona Florists Association. Now, rounding out my resume, I am pursuing a certificate in coding through the University of Arizona. This is the beginning of my online portfolio. Enjoy!</p>
      </div>
    </div>
  );
}

export default About;
