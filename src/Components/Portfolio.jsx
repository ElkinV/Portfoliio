/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/photo-face.png";
import "./css/portfolio.css";

const imageAltText = "Elkin's Face";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Web Converter",
    description: "A simple temperature converte made with HTML, CSS and JavaScript",
    url: "https://github.com/ElkinV/Converter",
  },
  {
    title: "JS DrumKit",
    description: "A simple DrumKit made with HTML, CSS and JS",
    url: "https://elkinv.github.io/Drumkit/",
  },
  {
    title: "JS Clock",
    description: "A simple Clock made with HTML, CSS and JS",
    url: "https://elkinv.github.io/Clock/",
  },
  {
    title: "EG Series",
    description:
      "Object oriented application in Java that allows to register the information of the series and its characters to calculate the price for salaries to the characters according to the number of episodes.",
    url: "https://github.com/ElkinV/Final_Project_OOP",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio_container">
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
