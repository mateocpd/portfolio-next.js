import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 ">
            Hi i&apos;m <span className="text-[#5651e5]">Mateo</span>
          </h1>
          <h1 className="py-2 text-gray-700 "> A Full Stack Web Developer</h1>
          <h2 className="my-7 mb-1">Social Media</h2>
          <div className="flex items-center justify-between max-w-[]330px m-auto py-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mateocapdevila/"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mateocpd"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:mateo.capdevila2801@gmail.com?Subject=Portfolio"
              >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
            </div>
            
              </a>
            {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
