import '../css/App.css';
import {FaGithub} from 'react-icons/fa';
import Particle from '../js/particle';

function project() {
    return (
        <main className='bg-slate-900 pl-32 pr-32'>
          <Particle />
          
        <section className='min-h-screen'>
          <nav className='py-14 mb-12 flex justify-end ml-auto flex-wrap'>
            <div className='flex pr-28'>
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

          <div className='container md:w-32 lg:w-48'>
            <div className='row align-items-center justify-content-center'>
              <div className='col-md-10'>
                <h1 className='text-5xl font-bold font-poppins text-slate-300 pb-14'>Personal Projects</h1>
                 <div className='project-card grid grid-cols-2 p-1 gap-10'>
                  <div className="m-h-40 z-10 rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300">
                          <div>
                            <h3 className='font-bold font-poppins text-slate-300'>Personal Portfolio</h3>
                            <p className='font-poppins text-slate-300'>My personal Portfolio website developed in React</p>
                            <p className="d-flex flex-wrap">
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>React</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>Tailwind</span>
                            </p>
                            <a href='https://luozhengjiafei.github.io/TheTailEnd/' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50 text-xl'>
                              <FaGithub className='icon bg-transparent'/>
                            </a>
                          </div>
                    </div>
                    <div className="m-h-40 z-10 rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300">
                          <div>
                            <h3 className='font-bold font-poppins text-slate-300'>The Tail-end</h3>
                            <p className='font-poppins text-slate-300'>Interactive data visulization project build with JavaScript and D3.js</p>
                            <p className='text-slate-400 font-poppins text-xs'>
                            Developed an interactive data visualization application using D3.js, JavaScript, and Python, which facilitates user
                            engagement by showcasing global life expectancy versus other factors on a two-dimensional graph.
                            Trained a polynomial regression model in Python with Pandas using public datasets from Kaggle made into a
                            user-controlled toggle prediction line feature.
                            </p>
                            <p className="d-flex flex-wrap">
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>Python</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>D3.js</span>
                            </p>
                            <a href='https://luozhengjiafei.github.io/TheTailEnd/' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50 text-xl'>
                              <FaGithub className='icon bg-transparent'/>
                            </a>
                          </div>
                      </div>
                      <div className="m-h-40 z-10 rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300">
                          <div>
                            <h3 className='font-bold font-poppins text-slate-300'>Calculator Application</h3>
                            <p className='font-poppins text-slate-300'>Three calculator application developed in React</p>
                            <p className="d-flex flex-wrap">
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>React</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                            </p>
                            <a href='https://luozhengjiafei.github.io/Calculator/' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50 text-xl'>
                              <FaGithub className='icon bg-transparent'/>
                            </a>
                          </div>
                      </div>
                      <div className="m-h-40 z-10 rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300">
                          <div>
                            <h3 className='font-bold font-poppins text-slate-300'>Inventory Tracking application</h3>
                            <p className='font-poppins text-slate-300'>Inventory tracking application in PHP</p>
                            <p className="d-flex flex-wrap">
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>PHP</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>SQlite</span>
                            </p>
                            <a href='https://luozhengjiafei.github.io/Calculator/' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50 text-xl'>
                              <FaGithub className='icon bg-transparent'/>
                            </a>
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