import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Portfolio2",
    description: "A modern personal portfolio website showcasing my skills and projects.",
    github: "https://github.com/Akhilkumar4464/portfolio2",
    demo: "https://portfolio2-demo.com",
  },
  {
    name: "User Dash Board",
    description: "A responsive dashboard for managing user data and analytics.",
    github: "https://github.com/Akhilkumar4464/user-dash-board",
    demo: "https://user-dashboard-demo.com",
  },
  {
    name: "Spotify Clone",
    description: "A clone of Spotify with music streaming and playlist features.",
    github: "https://github.com/Akhilkumar4464/spotify-clone",
    demo: "https://spotify-clone-mu-red.vercel.app/",
  },
  {
    name: "Akhil's To-Do App",
    description: "A simple and intuitive to-do list application to manage tasks.",
    github: "https://github.com/Akhilkumar4464/TO-Doapp",
    demo: "https://akhil-todo-demo.com",
  },
];

const Projects = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <section className={`py-12 min-h-screen animate-fade-in ${isLight ? 'bg-gray-100' : 'bg-gradient-to-r from-slate-500 to-slate-900'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-8 text-center animate-slide-down ${isLight ? 'text-gray-900' : 'text-gray-100'}`}>My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={project.name}
              className={`rounded-lg shadow-lg p-6 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-2xl group animate-fade-up ${isLight ? 'bg-gray-200 text-gray-900' : 'bg-gradient-to-r from-slate-600 to-slate-800 text-gray-300'}`}
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "both" }}
            >
              <div>
                <h3 className={`text-xl font-semibold mb-2 ${isLight ? 'text-indigo-600 group-hover:text-indigo-500' : 'text-indigo-400 group-hover:text-indigo-300'} transition`}>{project.name}</h3>
                <p className="mb-4">{project.description}</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center transition-colors duration-200 ${isLight ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}
                  title="GitHub"
                >
                  <FaGithub className="mr-1 group-hover:animate-bounce" /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center transition-colors duration-200 ${isLight ? 'text-indigo-600 hover:text-indigo-800' : 'text-indigo-400 hover:text-indigo-200'}`}
                  title="Live Demo"
                >
                  <FaExternalLinkAlt className="mr-1 group-hover:animate-pulse" /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Tailwind custom animation classes */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        .animate-fade-in {
          animation: fade-in 1s ease;
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-slide-down {
          animation: slide-down 1s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-up {
          animation: fade-up 0.8s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </section>
  );
};

export default Projects;
