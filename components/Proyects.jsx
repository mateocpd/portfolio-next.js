import Image from "next/image";
import Link from "next/link";
import React from "react";
import walletImg from "../public/assets/proyects/wallet.png";
import pokemonImg from "../public/assets/proyects/pokemon.png";
import ProyectItem from "./ProyectItem";

const Proyects = () => {
  return (
    <div id='proyects' className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-6 ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Proyects
        </p>
        <h2 className="py-4">What I've Build </h2>
        <div className="grid md:grid-cols-2 gap-8 "></div>

        <ProyectItem
          tittle="wallet"
          backgroundImg={walletImg}
          proyectUrl="https://henry-pf-client.vercel.app"
          repository='https://github.com/mateocpd/henry-pf-client'
        />
        <ProyectItem
          tittle="Pokemon App"
          backgroundImg={pokemonImg}
          proyectUrl="https://www.linkedin.com/feed/update/urn:li:activity:6952355501183496192?utm_source=share&utm_medium=member_desktop"
          repository='https://github.com/mateocpd/PI-POKEMON'
        />
      </div>
    </div>
  );
};

export default Proyects;
