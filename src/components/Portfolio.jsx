import React from "react";
import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: api,
      link: 'https://insure-personal-git-alice-home-alice2212.vercel.app/',
      repo: 'https://github.com/TiideLab-Team-Euvola/INSure',
      description:'INsure: an Insurance sale management tool that helps agents manage and track leads',
    },

    {
      id: 2,
      src: webpostman,
      link: 'https://recipe-app-tiidelab.netlify.app/',
      repo: 'https://github.com/mealmaster',
      description:'MealMaster: A meal planer that helps you to filter meal by ingredient or by category',
    },
    {
      id: 3,
      src: apod,
      link: 'https://todoify-gilt.vercel.app/',
      repo: 'https://github.com/OgbajeLeo/Todoify',
      description:'Todoify: A Task Manager that enables you to Add, Delete, Update and Track your task',
    },
    
    
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white  portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-4 text-blue-300">
            Recent Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo ,description}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg bg-slate-900">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 sm:h-[50%] lg:h-[55%]"
              />
              <div className="text-center text-gray-400 text-sm p-2">{description}</div>
              <div className="flex items-center justify-center text-sm ">
                <button className="w-1/2  border-2 rounded-full py-2 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className={id===1? "hidden" :"w-1/2  px-2 border-2 rounded-full  py-2 m-4 duration-200 hover:scale-105" } 
                onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
