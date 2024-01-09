import { FaGithub, FaLinkedin} from 'react-icons/fa';
function footer() {
    return (
        <footer className="footer" id="contact">
            <div className='gap-16 text-3xl flex justify-center text-white'>
                <a href='https://github.com/luozhengjiafei' target="_blank" rel="noreferrer" className='text-inherit'>
                <FaGithub className='icon bg-transparent'/>
                </a>
                <a href='https://www.linkedin.com/in/jeffrey-luozheng-85883a16b/' target="_blank" rel="noreferrer" className='text-inherit'>
                <FaLinkedin className='icon bg-transparent'/>
                </a>
            </div>
        </footer>
    );
  }
  export default footer;