import '../css/App.css';
import resumeFile from '../file/resume.pdf';
import Particle from '../js/particle.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

function App() {
  return (
    <div className="App">
      <header>
        <title>My Portfolio</title>
      </header>
      <Particle />
      <main className='bg-slate-900 lg:px-4 xl:px-22 2xl:px-36'>

        <section className='min-h-screen'>
          <Navbar/>

          <div className='p-10 pl-20 row-auto'>
            <div class="md:flex gap-10">

              <div class="text-left md:shrink-0 md:max-w-xl z-10">
                <h3 className='text-slate-300 font-bold font-poppins pb-2'>Hello,</h3>
                <h1 className='text-slate-300 font-bold font-poppins tracking-widest pb-3'>I'm Jeffrey LuoZheng</h1>
                <h4 className='text-slate-300 font-bold font-poppins pb-2'>A recent UBC CS Graduates.</h4>
                <p className='text-slate-400 font-poppins pb-2'>
                  I have a passion for software development and a strong interest in web development, data science, and machine learning.
                  
                </p>
                <p className='text-slate-400 font-poppins pb-2'>
                  I love to learn new technologies and tackle challenging problems, and I am always looking for opportunities to grow and improve my skills.
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
                      Worked as a computer science teaching assistant for Introduction to Relational Databases (CPSC 304) courses. 
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
                      Designed and implemented a Process API using Springboot and Java to optimize data transmission between the
                      API gateway and servers, resulting in increased revenue generation by delivering timely investment opportunities
                      to mobile platforms
                      </p>
                      <p className='text-slate-400 font-poppins text-xs'>
                      Developed React web and mobile UI components, integrating risk assessment and address validation features
                      through backend API calls in JavaScript and NodeJs, enhanced the useability and security of banking services,
                      improved overall customer satisfaction</p>
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
                      Streamlined user registration processes by incorporating OAuth2 authentication functionalities in PHP and
                      Laravel, leveraging a MySQL database, which led to a notable increase in overall user registration numbers
                      </p>
                      <p className='text-slate-400 font-poppins text-xs'>
                      Designed and developed server-side REST APIs in PHP and Laravel, integrating OAuth 2.0 token validation for
                      user authentication, thereby facilitating seamless record updates and date validation between website and server
                      </p>
                      <p className='text-slate-400 font-poppins text-xs'>
                      Revamped the company’s primary website by implementing frontend UI components and backend enhancement
                      features using React, NodeJs and MySQL, resulting in a significant improvement in overall user experience
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
                      Designed and developed an educational web application using PHP, Laravel and MySQL to enhance teaching
                      staff's ability to visualize course structure and assessment practices, resulting in an enriched learning experience
                      </p>
                      <p className='text-slate-400 font-poppins text-xs'>
                      Implemented a course-sharing feature and an invitation email system utilizing MailTrap and MySQL, facilitating
                      seamless collaboration between students and professors, thereby fostering a more dynamic learning environment
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
                      Orchestrated and developed full-stack web pages and REST APIs with PHP for efficient product searching and
                      filtering features, which enhanced user functionality and experience
                      </p>
                      <p className='text-slate-400 font-poppins text-xs'>Automated product update and deletion processes by integrating a backend REST API with MySQL, leading to a
                      significant increase in the product department's operational efficiency and saved hours of labour weekly</p>
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
        <Footer />
      </main>
    </div>
  );
}

export default App;
