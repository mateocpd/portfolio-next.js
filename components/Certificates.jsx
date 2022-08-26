import React from 'react'
import Image from "next/image";
import certificado from '../public/assets/Certifica2.jpeg'

const Certificates = () => {
  return (
    <div id="certificates" className="w-full ">
        <div className="max-w-[1140px] mx-auto ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Certificates
        </p>
        <div className="p-6 shadow-xl rounded-xl ">
        
        <Image className="rounded-xl hover:scale-105 ease-in duration-300"
          src={certificado}
          alt="/"
          layout='responsive'
          />
        </div>
        </div>
    </div>
  )
}

export default Certificates