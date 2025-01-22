import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
const Second = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
        <main className="max-w-4xl mx-auto">
          <div className="mb-16 space-y-6">
            <h1 className="text-6xl font-bold tracking-wider">
              PLAYER
              <span className="text-pink-500"> 20236004</span>
            </h1>
            <h2 className="text-3xl font-light">Fullstack Developer</h2>
            <p className="text-gray-300 max-w-xl">
              Welcome to the game. I am Abhijit Saha. I am a fullstack
              developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-purple-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-pink-500">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Next.js",
                  "Tailwind CSS",
                  "Solidity",
                  "Azure",
                  "C++",
                  "Django",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-800/50 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-purple-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-pink-500">Connect</h3>
              <div className="flex gap-6">
                <a
                  href="https://github.com/abhigit-saha"
                  className="hover:text-pink-500"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhijit-saha-a440b5291/"
                  className="hover:text-pink-500"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:abhijitsaha1006@gmail.com"
                  className="hover:text-pink-500"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Second;
