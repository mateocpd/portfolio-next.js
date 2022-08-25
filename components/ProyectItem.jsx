import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProyectItem = ({tittle, backgroundImg, proyectUrl, repository}) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#433dee] to-[#8aaefc]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {tittle}
          </h3>
          <p className="pb-4 pt-2 text-white text-center ">React js</p>

          <a target='_blank' href={proyectUrl} rel="noreferrer">
            <p className="text-center py-3 rounded-lg bg-white text-gray-600 font-bold text-lg cursor-pointer ">
              Demo
            </p>
          </a>
          <a target='_blank'  rel="noreferrer" href={repository}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-600 font-bold text-lg cursor-pointer ">
              Code
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProyectItem;
