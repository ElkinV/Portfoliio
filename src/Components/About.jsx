/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/image.png";
import "./css/about.css";

const imageAltText = "rose abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am Elkin, a Programmer and System  Engineer student. I ❤️ Programming, Music and Dark Mode.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = ["Programming", "Git/GitHub", "POO", "SQL", "Flask", "Django"];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. focused on desing, development of web solutions .";

const About = () => {
  return (
    <section className="about_container" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="about_content_container">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          className="about_list"
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
