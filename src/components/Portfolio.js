import React from "react";
import Section from "./common/Section";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import p1 from "../assets/projects/dreamxv.png";
import p2 from "../assets/projects/premier_league.png";
import p3 from "../assets/projects/weatherios.png";
import p4 from "../assets/projects/senvoix.jpg";
import p5 from "../assets/projects/hulu.jpg";
import p6 from "../assets/projects/e-learning.png";
import p7 from "../assets/projects/cloud-management.png";
import p7 from "../assets/projects/carserviceapp.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "Dream XV",
      github: "https://github.com/Ranul00/DreamXV.git",
      demo: "https://github.com/Ranul00/DreamXV.git",
      active: false,
    },
    {
      id: 2,
      image: p2,
      title: "Premier Leauge Manager",
      github: "https://github.com/ashen99/PremierLeageManager",
      demo: "https://github.com/ashen99/PremierLeageManager",
      active: false,
    },
    {
      id: 3,
      image: p3,
      title: "Weather App",
      github: "https://github.com/ashen99",
      demo: "https://github.com/ashen99",
      active: false,
    },
    {
      id: 4,
      image: p4,
      title: "SenVoix",
      github: "https://github.com/ashen99",
      demo: "https://github.com/ashen99",
      active: false,
    },
    {
      id: 5,
      image: p5,
      title: "Hulu Clone",
      github: "https://github.com/ashen99/Hulu-Clone",
      demo: "https://github.com/ashen99/Hulu-Clone",
      active: false,
    },
    {
      id: 6,
      image: p6,
      title: "E-Learning Site",
      github: "https://github.com/ashen99/E-learning-site",
      demo: "https://e-learning-site-nu.vercel.app/",
      active: true,
    },
    {
      id: 7,
      image: p7,
      title: "Cloud Management",
      github: "https://github.com/ashen99/Cloud-Management-Site",
      demo: "https://cloud-management-site.vercel.app/",
      active: true,
    },
    {
      id: 8,
      image: p8,
      title: "Car Service App",
      github: "https://github.com/ashen99/carserviceapp.git",
      demo: "https://github.com/ashen99/carserviceapp.git",
      active: true,
    },
  ];

  return (
    <Section
      title={"Portfolio 🗒️"}
      subtitle={
        "These are some of the projects that I have worked on. Some of them I have worked before I gained some experience. So go on gentle on them."
      }
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300
                rounded-2xl overflow-hidden"
          >
            <img src={image} alt="" className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
