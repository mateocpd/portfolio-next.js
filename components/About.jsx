import Image from "next/image";
import React from "react";
import yo from '/public/assets/yo.jpg'

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className="py-4 ">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As an organized person capable of solving problems, I can adapt to
            any type of circumstance and likewise give the best of me in each
            project, in this way teamwork and camaraderie are one of my
            strengths.
          </p>
          <p className="py-2 text-gray-600">
            My personal goal is to acquire knowledge and develop professionally
            in my sector, So I look for opportunities that allow me to do it. At
            the same time commit to the goals of the company
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl' src={yo} alt="/" width="300" height="400" />
        </div>
      </div>
    </div>
  );
};

export default About;
