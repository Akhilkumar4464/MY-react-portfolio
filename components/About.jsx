import React from "react";
import { motion } from "framer-motion";

function About({ theme }) {
  const isLight = theme === 'light';

  // Theme-based classes
  const textMain = isLight ? "text-gray-900" : "text-gray-100";
  const bgMain = isLight ? "bg-white/80" : "bg-gray-900/80";
  const shadowMain = isLight ? "shadow-md" : "shadow-lg";
  const sectionBg = "bg-transparent";
  const sectionText = textMain;

  const skills = [
    {
      name: 'JavaScript',
      level: 'Advanced',
      icon: (
        <svg width="48" height="48" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F7DF1E" d="M1.408 1.408h125.184v125.184H1.408z"/>
          <path d="M116.43 107.163c-2.315-14.8-13.33-23.045-28.376-23.045-14.452 0-23.868 9.264-23.868 23.4 0 13.33 8.74 19.7 21.748 19.7 9.66 0 16.03-3.17 20.875-7.843l-6.234-7.606c-3.01 2.315-6.095 4.17-12.59 4.17-6.396 0-10.435-2.984-10.435-7.184 0-4.772 3.73-6.63 10.83-6.63 4.397 0 7.56 1.51 9.756 5.443l6.317-6.15zm-39.82-1.158c-1.99-3.73-4.05-6.889-6.833-9.938-2.138-2.195-4.403-3.83-7.814-3.83-3.747 0-6.465 1.996-6.465 4.808 0 3.34 2.247 4.683 6.247 6.72l2.13 1.035c6.133 2.98 10.204 5.977 10.204 12.773 0 6.49-5.072 10.09-12.34 10.09-6.705 0-11.18-3.146-13.36-7.208l7.34-4.723c1.563 2.35 3.49 4.38 6.404 4.38 2.91 0 4.77-1.173 4.77-3.757 0-2.62-1.687-3.75-5.72-5.865l-1.94-1.034c-5.56-2.89-9.12-6.518-9.12-12.872 0-6.024 4.58-10.26 11.7-10.26 5.106 0 8.77 1.68 11.4 6.103l-6.025 4.83z" fill="#000"/>
        </svg>
      ),
    },
    {
      name: 'React',
      level: 'Advanced',
      icon: (
        <svg width="48" height="48" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
          <path fill="#61DAFB" d="M64 24c-8.948 0-17.695 1.688-25.4 4.764 4.505 7.9 10.337 17.028 15.806 24.718l-.123.083c-5.533-.139-15.754-2.116-24.87-7.512C20.094 57.433 17.6 60.77 17.6 64c0 3.143 3.335 6.687 9.102 9.234 9.25 4.644 19.095 7.147 24.75 7.379-.059.042-.113.083-.166.123-5.61 7.83-11.203 17.913-15.75 25.554C46.202 106.091 54.764 108 64 108c9.764 0 18.735-1.945 25.308-5.285-4.65-7.726-10.25-17.77-15.816-25.566l.136-.092c6.038.147 15.438 2.333 24.8 7.625 5.792 2.946 8.4 6.268 8.4 9.206 0 3.237-3.29 6.825-9.797 9.425-9.773 4.582-19.843 7.018-25.426 7.264-.03.022-.065.047-.1.067l-.004-.022.003.02c-7.62-1.02-16.34-4.433-24.79-11.224C19.35 95.633 17 88.137 17 80c0-7.64 3.88-15.814 11.677-23.955 5.81-6.246 13.454-11.54 21.832-15.103C51.997 40.13 57.21 39 64 39c6.784 0 12.99 1.144 18.63 3.344C82.734 44.352 74.824 50.64 66.196 56.798c-.855.566-1.717 1.097-2.585 1.598l-.6.387c-2.506 1.644-5.222 2.936-8.26 3.936-1.04.385-2.121.65-3.233.776l-.177.025c3.06 1.094 6.46 3.005 10.03 5.324 8.53 6.113 16.338 13.527 23.12 21.31C111.08 74.555 108 64 108 64c0-8.946-1.686-17.694-4.763-25.4-7.898 4.504-17.025 10.333-24.716 15.8l-.084-.12c.143-5.534 2.117-15.754 7.51-24.875C70.566 20.094 67.227 17.6 64 17.6 60.758 17.6 57.183 20.875 54.168 28.3 51.816 20.836 46.617 12.47 41.6 6c7.783-4.42 16.423-7.76 25.3-7.76 7.62 0 15.09 2.642 22.384 7.394-4.377 7.74-10.75 17.695-17.423 27.72l-.015.024c.005-.018.008-.039.013-.057-.105.182-.216.363-.332.54-1.822 3.08-4.22 5.68-7.177 7.56zm3.367-3.618z"/>
        </svg>
      ),
    }, {
      name: 'CSS3',
      level: 'Advanced',
      icon: (
        <svg width="48" height="48" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1572B6" d="M19.6 114.073l8.21-91.96h72.39l-8.2 91.992-36.211 10.067-36.188-10.1z"/>
          <path fill="#33A9DC" d="M70.106 102.63l23.48-6.535 6.258-70.22H70.1v76.755z"/>
          <path fill="#fff" d="M42.153 51.858h15.292l.544-6.102h-15.831l-.005.01-.005.014-.002.013-.027.305-.837 9.38-4.836 54.023 36.212 10.086 36.174-10.090 4.232-47.496H66.9l-.536 6.098h23.67l-1.773 19.883-27.623 7.65-27.666-7.678-.727-8.168h15.292l.54-6.103z"/>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      level: 'Intermediate',
      icon: (
        <svg width="48" height="48" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="128" height="128" rx="8" fill="#3178C6"/>
          <path fill="#fff" d="M57.88 89.46h-7.06v-44.92h15.11a12.6 12.6 0 0 1 9.38 3.68 11.04 11.04 0 0 1 3.87 8.37c0 5.88-4.31 10.06-9.5 10.93l9.72 13.66h-8.11l-8.02-12.72zm-4.45-23.48v9.19h7.2c3.05 0 5.1-1.53 5.1-4.64a3.75 3.75 0 0 0-3.9-3.84h-8.4zm9.27-11.36h-9.71v9.3h9.85a4.3 4.3 0 0 0 3.84-2.25 4.63 4.63 0 0 0 .16-7.05 4.3 4.3 0 0 0-3.14-1.99z"/>
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      className={`${bgMain} backdrop-blur-2xl p-6 rounded-lg ${shadowMain} ${textMain}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <section className={`${sectionBg} py-16 px-6 max-w-4xl mx-auto`}>
        <div className="text-center">
          <h2 className={`text-4xl font-extrabold mb-4 ${sectionText}`}>
            About Me
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${sectionText}`}>
            I'm a passionate web developer with a knack for creating elegant and
            efficient web solutions. With a strong foundation in modern web
            technologies like React, Tailwind CSS, and JavaScript, I focus on
            delivering responsive, user-friendly interfaces and performant
            applications that help businesses thrive online.
          </p>
        </div>
      </section>

      <section className={`${sectionBg} py-16 px-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-8`}>
        <div className="flex-1">
          <h3 className={`text-2xl font-bold mb-4 ${sectionText}`}>Skills</h3>
          <ul className="list-disc pl-6 space-y-2"> 
            {skills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-2">
                <span className="text-lg sm:hover:animate-spin">{skill.icon}</span>
                <span className="font-semibold">{skill.name}</span> - {skill.level}
              </li>
            ))}
          </ul>
        </div>
        
        <div className={`flex-1 sm:hover:scale-105 ${sectionText}`}>
          <h3 className={`text-2xl font-bold mb-4 ${sectionText}`}>Experience</h3>
          <p>
            I have worked on various projects ranging from small business websites to large-scale web applications. My experience includes collaborating with cross-functional teams, understanding client requirements, and delivering high-quality code.
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default About;
