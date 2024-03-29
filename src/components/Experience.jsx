import React, { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
// import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import figma from "../assets/figma.png"
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
// import { FaPeopleCarry } from "react-icons/fa";

const Experience = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: figma,
      title: "Figma",
      style: "shadow-pink-600",
    },
    
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: tailwind,
      title: "TailwindCSS",
      style: "shadow-sky-400",
    },
   
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-900 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-blue-300">
           Experience
          </p>
          <p className="py-6">These are the technologies I've worked with and used in my projects.</p>
        </div>

        <div 
        data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
        className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="skills" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
