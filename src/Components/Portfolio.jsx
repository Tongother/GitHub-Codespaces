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
import image from "../images/design-team-work.jpg";

const imageAltText = "A team work in a conference room with books and laptops";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Variety of numerical methods in python",
    description:
      "With a simple interface, you can solve a variety of numerical methods in python",
    url: "https://github.com/Tongother/proyecto_tareas",
  },
  {
    title: "Generic form created in C#",
    description:
      "Saving the information in a notepad for data recording.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Web Pokedex",
    description:
      "Information about all the existing Pokémon on a single page, allows you to filter by numbering from the lowest or the highest, by alphabetical order and a small description with an animated gif when you click on it.",
    url: "https://github.com/Tongother/pre_pokedex",
  },
  {
    title: "Simulation of an ATM on a website",
    description:
      "It has 3 functions: deposit, transfer and withdraw. After each action carried out, you have the possibility of printing the respective receipt for the operation carried out. Has a dark mode feature",
    url: "https://github.com/Tongother/Cajero_automatico-ATM",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
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
