import '../css/App.css';
import {FaGithub} from 'react-icons/fa';

function project() {
    return (
        <main className='bg-slate-700 pl-32 pr-32'>

        <section className='min-h-screen'>
          <nav className='py-14 mb-12 flex justify-end ml-auto flex-wrap'>
            <div className='flex pr-28'>
              <ul className='mr-8'>
                <li className='gradual-hover-bottom'>
                  <a className='text-slate-50 font-bold font-poppins no-underline' href='/'>About</a>
                </li>
              </ul>
              <ul className='mr-8'>
                <li className='gradual-hover-bottom'>
                  <a className='text-slate-50 font-bold font-poppins no-underline' href='/project'>Projects</a>
                </li>
              </ul>
              <ul className='mr-8'>
                <li className='gradual-hover-bottom'>
                  <a className='text-slate-50 font-bold font-poppins no-underline' href='/contact'>Contact</a>
                </li>  
              </ul>
            </div>
          </nav>

          <div className='container md:w-32 lg:w-48'>
            <div className='row align-items-center justify-content-center'>
              <div className='col-md-10'>
                <h1 className='text-5xl font-bold font-poppins text-slate-50 pb-14'>Personal Projects</h1>
                 <div className='project-card flex p-1'>
                  <div className="h-40">
                        <div className='mr-2'>
                          <h3 className='font-bold font-poppins text-slate-50'>The Tail-end</h3>
                          <p className='font-poppins text-slate-50'>Interactive data visulization project build with JavaScript and D3.js</p>
                          <p className="d-flex flex-wrap">
                            <span className='font-poppins text-slate-50 bg-stone-800 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                            <span className='font-poppins text-slate-50 bg-stone-800 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>Python</span>
                            <span className='font-poppins text-slate-50 bg-stone-800 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>D3.js</span>
                          </p>
                          <FaGithub className='icon bg-transparent text-white'/>
                        </div>
                    </div>
                    <div className="h-40">
                        <div>
                          <h3 className='font-bold font-poppins text-slate-50'>The Tail-end</h3>
                          <p className='font-poppins text-slate-50'>Interactive data visulization project build with JavaScript and D3.js</p>
                          <p className="d-flex flex-wrap">
                            <span className='font-poppins text-slate-50 bg-stone-800 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                            <span className='font-poppins text-slate-50 bg-stone-800 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>Python</span>
                            <span className='font-poppins text-slate-50 bg-stone-800 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>D3.js</span>
                          </p>
                          <FaGithub className='icon bg-transparent text-white'/>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    );
}
    
export default project;