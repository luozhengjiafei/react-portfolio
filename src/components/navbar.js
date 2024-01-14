import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

function navbar() {
    return (
      <nav className='py-14 mb-12 flex justify-between ml-auto flex-wrap'>
      <div className='flex justify-between'>
        <ul className='ml-12'>
          <li className='text-3xl'>
              <a href='https://github.com/luozhengjiafei' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50'>
                <FaGithub className='icon bg-transparent'/>
              </a>
            </li>
          </ul>
          <ul className='text-3xl ml-5'>
            <a href='https://www.linkedin.com/in/jeffrey-luozheng-85883a16b/' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50'>
              <FaLinkedin className='icon bg-transparent'/>
            </a>
          </ul>
          <ul className='text-3xl ml-5'>
            <a href="mailto:luozhengjiafei@gmail.com" target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50'>
              <MdEmail className='icon bg-transparent'/>
            </a>
          </ul>
        </div>
        
        <div className='flex justify-between pr-28'>
          <ul className='mr-8'>
            <li className='gradual-hover-bottom'>
              <a className='text-slate-300 font-bold font-poppins no-underline' href='/'>About</a>
            </li>
          </ul>
          <ul className='mr-8'>
            <li className='gradual-hover-bottom'>
              <a className='text-slate-300 font-bold font-poppins no-underline' href='/project'>Projects</a>
            </li>
          </ul>
          <ul className='mr-8'>
            <li className='gradual-hover-bottom'>
              <a className='text-slate-300 font-bold font-poppins no-underline' href='/contact'>Contact</a>
            </li>  
          </ul>
        </div>
      </nav>
    );
  }
  
  export default navbar;