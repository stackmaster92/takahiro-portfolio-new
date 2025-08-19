import { FaLinkedin, FaInstagram, FaDownload, } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { CgFileDocument } from "react-icons/cg";
import resumePdf from '../assets/hiroshi.pdf';

const NavBar = () => {
  return (
    <nav className="mb-12 flex items-center justify-between py-4 px-4 sm:px-0">
      <div className="flex flex-shrink-0 items-center">
        <h1 className='text-2xl font-semibold sm:text-[28px]'>TH</h1>
      </div>
      <div className='flex items-center justify-center gap-3 text-xl sm:gap-4 sm:text-2xl'>
        {/* <a 
          href="https://upwork.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <SiUpwork />
        </a>
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <FaLinkedin />
        </a> */}
        {/* <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <FaInstagram />
        </a> */}
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-neutral-800 transition-colors text-lg sm:text-xl"
        >
          <CgFileDocument />
          <span className='text-xs sm:text-sm'>Resume</span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
