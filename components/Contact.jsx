import React, { useState } from "react";
import { motion } from "framer-motion";
  

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo: just mark as submitted
    setSubmitted(true);
  }

  // Inline keyframe animation for 3D rotation
  const rotate3DStyle = {
    animation: 'rotate3D 8s ease-in-out infinite',
    transformStyle: 'preserve-3d',
    perspective: '800px',
  };

  return (
    <>
      <style>{`
        @keyframes rotate3D {
          0% {
            transform: rotateY(0deg) rotateX(0deg);
          }
          50% {
            transform: rotateY(180deg) rotateX(180deg);
          }
          100% {
            transform: rotateY(0deg) rotateX(0deg);
          }
        }
      `}</style>
      <div className="min-h-screen w-full flex items-center justify-center">
        <motion.div 
           aria-label="Contact form with 3d animation"
           className="max-w-md w-full mx-auto mt-9 rounded-3xl bg-neutral-900 backdrop-blur-md shadow-lg p-8"
           style={rotate3DStyle}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 20 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-extrabold text-white text-center mb-8 drop-shadow-lg">
            Contact Me
          </h1>

          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="name" className="block mb-2 font-semibold text-white drop-shadow-md">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                aria-required="true"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-6 px-4 py-3 rounded-xl bg-white bg-opacity-20 text-black placeholder-white placeholder-opacity-70 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />

              <label htmlFor="email" className="block mb-2 font-semibold text-white drop-shadow-md">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-required="true"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-6 px-4 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />

              <label htmlFor="message" className="block mb-2 font-semibold text-white drop-shadow-md">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full mb-6 px-4 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-purple-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />

              <button
                type="submit"
                aria-label="Submit Contact Form"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-extrabold text-lg uppercase tracking-wider shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-400"
              >
                Send
              </button>
            </form>
          ) : (
            <div
              role="alert"
              tabIndex={0}
              className="text-center text-lg font-semibold text-green-300 drop-shadow-lg"
            >
              Thank you for contacting me! I will get back to you soon.
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}

 