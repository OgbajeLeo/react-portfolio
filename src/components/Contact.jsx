import React, { useEffect, useRef,useState } from "react";
import { FaPhone } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


const Contact = () => {
  const [isLoading,setIsLoading]= useState(false)

  const serviceID ='service_oecgc0m'
  const templateID ='template_sv1spgt'
  const form = useRef();

  useEffect(() => emailjs.init("tzNBPOYcCpnQxURaP"), []);
  
  
//function for form reset
function handleSubmit(e){
  setIsLoading(true)
  
  e.preventDefault(); // prevents the page from reloading when you hit “Send”

  emailjs.sendForm(serviceID, templateID, form.current, 'tzNBPOYcCpnQxURaP')
    .then((result) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Message sent successfully"
      });

      e.target.reset();
    setIsLoading(false)
    }, (error) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Error, Please try again !"
      });
      e.target.reset();
      setIsLoading(false)
    });


  // setTimeout(() => {
  //   e.target.reset();
  //   setIsLoading(false)
  // }, 5000);
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
            ref={form}
            onSubmit={handleSubmit}
            name="contact_form"
            method="POST"
            // action="https://getform.io/f/b1bacef8-e9a0-43e0-a40a-67c1f2635986"
            className=" flex flex-col w-full md:w-1/2"
          >

            <input type="hidden" name="contact_number" />
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
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
