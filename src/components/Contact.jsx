import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";


const Contact = () => {
  const [isLoading,setIsLoading]= useState(false)


  
//function for form reset
function handleSubmit(e){
  setIsLoading(true)
  setTimeout(() => {
    e.target.reset();
    setIsLoading(false)
  }, 3000);
}
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold flex gap-4">
           <FaPhone /> Contact
          </p>
          <p className="py-6"> Need a web developer ? Submit the form below to get in touch with me</p>
        </div>
        
        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/aebabb94-27bc-404a-9e86-e1433d87ca4a"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" 
            disabled={isLoading}
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              {isLoading?'Sending...':'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
