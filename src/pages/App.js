import '../css/App.css';
import resumeFile from '../file/resume.pdf';
import Particle from '../js/particle.js';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header>
        <title>My Portfolio</title>
      </header>
      <Particle />
      <main className='bg-slate-900 lg:px-4 xl:px-22 2xl:px-36'>

        <section className='min-h-screen'>
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

          <div className='p-10 pl-20 row-auto'>
            <div class="md:flex gap-10">

              <div class="text-left md:shrink-0 md:max-w-3xl z-10">
                <h3 className='text-slate-300 font-bold font-poppins pb-2'>Hello,</h3>
                <h1 className='text-slate-300 font-bold font-poppins tracking-widest pb-3'>I'm Jeffrey LuoZheng</h1>
                <h4 className='text-slate-300 font-bold font-poppins pb-2'>A recent UBC CS Graduates.</h4>
                <p className='text-slate-300 font-poppins pb-2'>
                  I have a passion for software development and 
                  
                </p>
                <p className='text-slate-300 font-poppins pb-2'>
                  I love to learn new technologies and tackle challenging problems.
                </p>

                <div className='group'>
                  <button className="download-btn bg-slate-700 group-hover:bg-gray-300 py-2 px-4 rounded shadow hover:shadow-lg transition-all duration-300 ease-in-out">
                    <a href={resumeFile} download="resume.pdf" className='no-underline text-slate-400 group-hover:text-slate-700 font-poppins'>Download Resume/CV</a>
                  </button>
                  </div>
              </div>

              <div className ='scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 flex-auto z-10'>
                <h1 className='text-slate-300 font-bold font-poppins text-center pb-12'>Experience</h1>
                <ol>
                  <li className='mb-2 flex gap-4 justify-center p-2 bg-opacity-0 text-white rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300 2xl:mx-20'>
                    <header className='pl-2 justify-between items-center min-w-20'>
                      <p className='z-10 mb-2 mt-2.5 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2'>Jan - Dec 2023</p>
                    </header>
                    <div className='mt-2'>
                      <p className='text-slate-300 font-semibold font-poppins'>Undergraduate Teaching Assistant</p>
                      <p className='text-slate-300 font-poppins text-sm'>University of British Columbia</p>
                      <p className='text-slate-300 font-poppins text-sm'>Vancouver, BC</p>
                      <p className='text-slate-400 font-poppins text-xs'>
                        Worked as an Computer Science teaching assistant for Introduction to Relational Databases (CPSC 304) courses. 
                        Hosted weekly office hours and tutorials to assist students with their labs, class projects, and course materials.
                      </p>
                      <p className="d-flex flex-wrap">
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>PHP</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>React</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>Java</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>SQL</span>
                      </p>
                    </div>
                  </li>
                  <li className='mb-2 flex gap-4 justify-center p-2 bg-opacity-0 text-white rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300 2xl:mx-20'>
                    <header className='pl-2 justify-between items-center min-w-20'>
                      <p className='z-10 mb-2 mt-2.5 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2'>May - Nov 2022</p>
                    </header>
                    <div className='mt-2'>
                      <p className='text-slate-300 font-semibold font-poppins'>Cloud Full Stack Developer Intern</p>
                      <p className='text-slate-300 font-poppins text-sm'>HSBC Canada</p>
                      <p className='text-slate-300 font-poppins text-sm'>Vancouver, BC</p>
                      <p className='text-slate-400 font-poppins text-xs'>
                      Engineered a Process API with to handle data transmission between the API gateway and the
                      backend server for fetching and sending personalized promotion data and boosted overall revenue by
                      informing clients of investment opportunities on mobile. Implemented React-based web and mobile UI features and backend services, including data validation by making
                      API calls, user section timeout, and the creation of various new React components.
                      </p>
                      <p className="d-flex flex-wrap">
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>Java</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>Spring</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>React</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                      </p>
                    </div>
                  </li>
                  <li className='mb-2 flex gap-4 justify-center p-2 bg-opacity-0 text-white rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300 2xl:mx-20'>
                    <header className='pl-2 justify-between items-center min-w-20'>
                      <p className='z-10 mb-2 mt-2.5 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2'>May 2021 - Aug 2021</p>
                    </header>
                    <div className='mt-2'>
                      <p className='text-slate-300 font-semibold font-poppins'>IT Engineer Intern</p>
                      <p className='text-slate-300 font-poppins text-sm'>CPD Institute</p>
                      <p className='text-slate-300 font-poppins text-sm'>Richmond, BC</p>
                      <p className='text-slate-400 font-poppins text-xs'>
                      Implemented frontend UI and backend enhancement features for the company's primary website using React,
                      enabled OAuth2 registration and login functionalities with Facebook and Google accounts, leading to a simplified
                      user registration.
                      Constructed server-side REST APIs using PHP and Laravel, which supported OAuth 2.0 token validation for user
                      authentication, facilitating record updates, and data validation for the primary website.
                      </p>
                      <p className="d-flex flex-wrap">
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>React</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>PHP</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>Laravel</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>MySQL</span>
                      </p>
                    </div>
                  </li>
                  <li className='mb-2 flex gap-4 justify-center p-2 bg-opacity-0 text-white rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300 2xl:mx-20'>
                    <header className='pl-2 justify-between items-center min-w-20'>
                      <p className='z-10 mb-2 mt-2.5 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2'>Jan 2021 - Apr 2021</p>
                    </header>
                    <div className='mt-2'>
                      <p className='text-slate-300 font-semibold font-poppins'>Web Developer Intern</p>
                      <p className='text-slate-300 font-poppins text-sm'>University of British Columbia</p>
                      <p className='text-slate-300 font-poppins text-sm'>Kelowna, BC</p>
                      <p className='text-slate-400 font-poppins text-xs'>
                      Designed and developed an educational web application using PHP with the Laravel framework.
                      Overhauled features include new user-friendly UIs for new web pages, an invitation email system powered by
                      MailTrap to facilitate user registration, course-sharing features, and a PDF course outline generator tailored for
                      professors.
                      </p>
                      <p className="d-flex flex-wrap">
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>PHP</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>Laravel</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>MySQL</span>
                      </p>
                    </div>
                  </li>
                  <li className='mb-2 flex gap-4 justify-center p-2 bg-opacity-0 text-white rounded-lg hover:shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300 2xl:mx-20'>
                    <header className='pl-2 justify-between items-center min-w-20'>
                      <p className='z-10 mb-2 mt-2.5 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2'>Sep 2020 - Dec 2020</p>
                    </header>
                    <div className='mt-2'>
                      <p className='text-slate-300 font-semibold font-poppins'>Application Developer Intern</p>
                      <p className='text-slate-300 font-poppins text-sm'>Reliable Controls</p>
                      <p className='text-slate-300 font-poppins text-sm'>Victoria, BC</p>
                      <p className='text-slate-400 font-poppins text-xs'>
                      Orchestrated and developed full-stack web pages and a REST API with PHP for product lookup and update.
                      Automated the product update process through the API to MySQL, which improved the department's
                      productivity and led to hours of manual work time saved weekly.
                      </p>
                      <p className="d-flex flex-wrap">
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>PHP</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs pr-2 mr-2 px-2.5 py-0.5 rounded-full z-10'>MySQL</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>JavaScript</span>
                        <span className='font-poppins text-teal-300/90 bg-teal-400/40 bg-opacity-60 text-xs mr-2 px-2.5 py-0.5 rounded-full z-10'>jQuery</span>
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
