import React, { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

const Services = () => {
    
    useEffect(() => {
        AOS.init();
      }, [])
  const services = [
    {
      id: 1,
      title: "Web Design and Optimization",
      description: "Create visually appealing and optimized websites for your business.",
    },
    {
        id: 2,
        title: "Cross-Browser Compatibility",
        description: "Ensure your website functions correctly across various web browsers.",
      },
    {
        id: 3,
        title: "Responsive Web Development",
        description: "Build websites that adapt and work seamlessly on various devices and screen sizes.",
      },
      {
        id: 4,
        title: "UI/UX Design",
        description: "Craft intuitive and user-friendly interfaces for a better user experience.",
      },
   
  ];

  return (
    <div
      name="services"
      className="bg-gradient-to-b from-black to-black w-full text-white  services"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-4 text-blue-300">
            Services
          </p>
          <p className="py-4">Explore the services I offer</p>
        </div>

        <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="grid sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-4 gap-5 lg:gap-8  px-10 sm:px-0">
          {services.map(({ id, title, description }) => (
            <div key={id} className="shadow-md hover:scale-105 hover:bg-black duration-300 shadow-gray-200 rounded-lg bg-slate-900 p-4">
              <h3 className="text-xl font-bold mb-2"> {title}</h3>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
