import '../css/App.css';
import {FaGithub} from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";
import Particle from '../js/particle';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

function project() {
    return (
        <main className='bg-slate-900 pl-32 pr-32'>
          <Particle />
          
        <section className='min-h-screen'>
          <Navbar />

          <div className='container md:w-32 lg:w-48'>
            <div className='row align-items-center justify-content-center pb-10'>
              <div className='col-md-10'>
                <h1 className='text-5xl font-bold font-poppins text-slate-300 pb-14'>Personal Projects</h1>
                 <div className='project-card grid grid-cols-2 p-1 gap-10'>
                  <div className="m-h-40 z-10 rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300">
                          <div className='p-3'>
                            <h3 className='font-bold font-poppins text-slate-300'>Personal Portfolio</h3>
                            <p className='font-poppins text-slate-300'>My personal Portfolio website in React</p>
                            <p className='text-slate-400 font-poppins text-xs'>
                            My personal portfolio website built with React, Tailwind CSS, and JavaScript.
                            </p>
                            <p className="d-flex flex-wrap">
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>React</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>Tailwind</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>Docker</span>
                            </p>
                            <a href='https://jeffreyluozheng.onrender.com/' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50 text-xl pl-2 pr-6'>
                              <CgWebsite className='icon bg-transparent'/>
                            </a>
                            <a href='https://github.com/luozhengjiafei/react-portfolio' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50 text-xl'>
                              <FaGithub className='icon bg-transparent'/>
                            </a>
                          </div>
                    </div>
                    <div className="m-h-40 z-10 rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300">
                          <div className='p-3'>
                            <h3 className='font-bold font-poppins text-slate-300'>The Tail-end</h3>
                            <p className='font-poppins text-slate-300'>Interactive data visulization project build with JavaScript and D3.js</p>
                            <p className='text-slate-400 font-poppins text-xs'>
                            Developed an interactive data visualization application utilizing D3.js, JavaScript, and Python to present global life
                            expectancy alongside other factors on a two-dimensional graph to visualize predicted trends
                            </p>
                            <p className='text-slate-400 font-poppins text-xs'>
                              Utilized Python with Pandas to train a polynomial regression machine learning model, leveraging public datasets
                            sourced from Kaggle. Integrated the model into the application, enabling users to explore and analyze trends
                            </p>
                            <p className="d-flex flex-wrap">
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>Python</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>D3.js</span>
                            </p>
                            <a href='https://luozhengjiafei.github.io/TheTailEnd/' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50 text-xl pl-2 pr-6'>
                              <CgWebsite className='icon bg-transparent'/>
                            </a>
                            <a href='https://github.com/luozhengjiafei/TheTailEnd' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50 text-xl'>
                              <FaGithub className='icon bg-transparent'/>
                            </a>
                          </div>
                      </div>
                      <div className="m-h-40 z-10 rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300">
                          <div className='p-3'>
                            <h3 className='font-bold font-poppins text-slate-300'>Calculator Application</h3>
                            <p className='font-poppins text-slate-300'>Calculator application developed in React</p>
                            <p className='text-slate-400 font-poppins text-xs'>
                            A basic calculator application with three types of calculators. 
                            One that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. 
                            Scientific calculators enable users to perform more complex operations such as square root, power, and trigonometric functions. 
                            Currency calculator allows users to convert between different currencies using real-time exchange rates fetched from an API.
                            </p>
                            <p className="d-flex flex-wrap">
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>React</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                            </p>
                            <a href='https://luozhengjiafei.github.io/Calculator/' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50 text-xl pl-2 pr-6'>
                              <CgWebsite className='icon bg-transparent'/>
                            </a>
                            <a href='https://github.com/luozhengjiafei/Calculator' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50 text-xl'>
                              <FaGithub className='icon bg-transparent'/>
                            </a>
                          </div>
                      </div>
                      <div className="m-h-40 z-10 rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300">
                          <div className='p-3'>
                            <h3 className='font-bold font-poppins text-slate-300'>Inventory Tracking application</h3>
                            <p className='font-poppins text-slate-300'>Inventory tracking application in PHP</p>
                            <p className='text-slate-400 font-poppins text-xs'>
                            An inventory tracking application that allows users to perform basic CRUD operations such as adding, editing, and deleting items from the database.
                            </p>
                            <p className="d-flex flex-wrap">
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>PHP</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                              <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>SQlite</span>
                            </p>
                            <a href='https://github.com/luozhengjiafei/Inventory-tracking-application' target="_blank" rel="noreferrer" className='text-gray-400 hover:text-slate-50 pl-2 text-xl'>
                              <FaGithub className='icon bg-transparent'/>
                            </a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>

    );
}
    
export default project;