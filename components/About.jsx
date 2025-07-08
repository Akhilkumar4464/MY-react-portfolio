import React from "react";
import {
  SiJavascript,
  SiReact,
  SiCss3,
  SiTypescript,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiFigma,
  SiMongodb,
  SiExpress,
  SiNodedotjs
} from "react-icons/si";

function About({ theme }) {
  const isLight = theme === "light";

  const skills = [
    { name: "JavaScript", level: "Advanced", icon: <SiJavascript size={32} className="text-yellow-400" /> },
    { name: "React", level: "Intermediate", icon: <SiReact size={32} className="text-cyan-400" /> },
    { name: "CSS3", level: "Advanced", icon: <SiCss3 size={32} className="text-blue-500" /> },
    { name: "TypeScript", level: "Beginner", icon: <SiTypescript size={32} className="text-blue-600" /> },
    { name: "Git", level: "Beginner", icon: <SiGit size={32} className="text-orange-500" /> },
    { name: "GitHub", level: "Intermediate", icon: <SiGithub size={32} className="text-white" /> },
    { name: "Bootstrap", level: "Intermediate", icon: <SiBootstrap size={32} className="text-purple-600" /> },
    { name: "Figma", level: "Beginner UI Designer", icon: <SiFigma size={32} className="text-pink-500" /> },
  ];

  const learningSkills = [
    {
      name: "MERN Stack",
      level: "Currently Learning",
      icon: (
        <div className="flex gap-1 items-center">
          <SiMongodb size={28} className="text-green-500" title="MongoDB" />
          <SiExpress size={28} className="text-gray-400" title="Express.js" />
          <SiReact size={28} className="text-cyan-400" title="React.js" />
          <SiNodedotjs size={28} className="text-green-600" title="Node.js" />
        </div>
      ),
    },
  ];

  return (
    <div
      className={`w-full h-full mt-2 flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-20 transition-all duration-700 ease-in-out ${
        isLight ? "bg-gray-100 text-gray-900" : "bg-gradient-to-r from-slate-700 to-slate-900 text-white"
      }`}
    >
      {/* About Me */}
      <section className={`w-full md:w-1/2 max-w-2xl rounded-2xl p-8 md:p-12`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi! I'm <span className="font-semibold text-violet-600">Akhil Kumar</span>, a passionate web developer with a knack for building dynamic, responsive, and user-friendly web applications.
          I specialize in frontend technologies like <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          I enjoy solving real-world problems and continuously learning new technologies to stay ahead in this fast-paced tech world.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          Let’s connect and build something amazing together!
        </p>
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block bg-violet-600 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-700 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Skills & Experience */}
      <section className="w-full md:w-1/2 max-w-2xl mt-10 md:mt-0 md:ml-8">
        {/* Skills */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <ul className="space-y-4">
            {skills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-4">
                <div className="hover:animate-spin">{skill.icon}</div>
                <div>
                  <span className="font-semibold">{skill.name}</span> — {skill.level}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Currently Learning */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4 text-violet-500">Currently Learning</h3>
          <ul className="space-y-4">
            {learningSkills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-4">
                <div className="flex gap-2">{skill.icon}</div>
                <div>
                  <span className="font-semibold">{skill.name}</span> — {skill.level}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Experience</h3>
          <p className="text-lg leading-relaxed">
            I’ve worked on various projects ranging from small business websites to scalable web apps. I enjoy collaborating with teams, understanding user needs, and delivering high-quality solutions.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
