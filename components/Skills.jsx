import Image from "next/image";
import React from "react";
import html from "/public/assets/skills/html.png"
import css from "/public/assets/skills/css.png"
import javascript from "/public/assets/skills/javascript.png"
import react from "/public/assets/skills/react.png"
import redux from "/public/assets/skills/redux.png"
import next from "/public/assets/skills/nextjs.png"
import tailwind from "/public/assets/skills/tailwind.png"
import node from "/public/assets/skills/node.png"
import mysql from "/public/assets/skills/mysql.png"
import linux from "/public/assets/skills/linux.png"
import python from "/public/assets/skills/python.png"
import git from "/public/assets/skills/git.png"

const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={html}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={css}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={javascript}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={react}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={redux}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>REDUX</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={next}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NEXT.JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={tailwind}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={node}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NODE.JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={mysql}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MYSQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={linux}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>LINUX</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={python}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PYTHON</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={git}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>GIT</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
