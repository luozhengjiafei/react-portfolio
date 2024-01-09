import '../css/App.css';
import resumeFile from '../file/resume.pdf';

function App() {
  return (
    <div id='particles-js' className="App">
      <header>
        <title>My Portfolio</title>
      </header>

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

          <div className='p-10 pl-20 row-auto'>
            <div class="md:flex gap-10">

              <div class="text-left md:shrink-0 md:max-w-2xl">
                <h3 className='text-slate-50 font-bold font-poppins pb-2'>Hello,</h3>
                <h1 className='text-slate-50 font-bold font-poppins tracking-widest pb-3'>I'm Jeffrey LuoZheng</h1>
                <h2 className='text-slate-50 font-bold font-poppins pb-2'>A recent UBC CS Graduates.</h2>
                <p className='text-slate-50 font-poppins pb-2'>
                  I have a passion for software development and 
                  
                </p>
                <p className='text-slate-50 font-poppins pb-2'>
                  I love to learn new technologies and tackle challenging problems.
                </p>

                <button class="download-btn bg-gray-400 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded shadow hover:shadow-lg transition-all duration-300 ease-in-out">
                  <a href={resumeFile} download="resume.pdf" className='no-underline text-slate-50 font-bold font-poppins'>Download Resume/CV</a>
                </button>
              </div>

              <div className ='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 flex-auto'>
                <h1 className='text-slate-50 font-bold font-poppins text-center pb-12'>Experience</h1>
                <ol>
                  <li className='mb-2 flex gap-4 justify-center p-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 hover:bg-opacity-75 transition-all duration-300'>
                    <header className='justify-between items-center'>
                      <p className='z-10 mb-2 mt-2.5 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2'>Jan 2023 - Dec 2023</p>
                    </header>
                    <div className='mt-2'>
                      <p className='text-slate-50 font-bold font-poppins pb-2'>Undergraduate Teaching Assistant</p>
                      <p className='text-slate-50 font-semibold font-poppins pb-2'>University of British Columbia</p>
                      <p className='text-slate-50 font-semibold font-poppins pb-2 text-sm'>Vancouver, BC</p>
                    </div>
                  </li>
                  <li className='mb-2 flex gap-4 justify-center p-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 hover:bg-opacity-75 transition-all duration-300'>
                    <header className='justify-between items-center'>
                      <p className='z-10 mb-2 mt-2.5 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2'>May 2022 - Nov 2022</p>
                    </header>
                    <div className='mt-2'>
                      <p className='text-slate-50 font-bold font-poppins pb-2'>Cloud Full Stack Developer Intern</p>
                      <p className='text-slate-50 font-semibold font-poppins pb-2'>HSBC Canada</p>
                      <p className='text-slate-50 font-semibold font-poppins pb-2 text-sm'>Vancouver, BC</p>
                    </div>
                  </li>
                  <li className='mb-2 flex gap-4 justify-center p-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 hover:bg-opacity-75 transition-all duration-300'>
                    <header className='justify-between items-center'>
                      <p className='z-10 mb-2 mt-2.5 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2'>May 2021 - Aug 2021</p>
                    </header>
                    <div className='mt-2'>
                      <p className='text-slate-50 font-bold font-poppins pb-2'>IT Engineer Intern</p>
                      <p className='text-slate-50 font-semibold font-poppins pb-2'>CPD Institute</p>
                      <p className='text-slate-50 font-semibold font-poppins pb-2 text-sm'>Richmond, BC</p>
                    </div>
                  </li>
                  <li className='mb-2 flex gap-4 justify-center p-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 hover:bg-opacity-75 transition-all duration-300'>
                    <header className='justify-between items-center'>
                      <p className='z-10 mb-2 mt-2.5 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2'>Jan 2021 - Apr 2021</p>
                    </header>
                    <div className='mt-2'>
                      <p className='text-slate-50 font-bold font-poppins pb-2'>Web Developer Intern</p>
                      <p className='text-slate-50 font-semibold font-poppins pb-2'>University of British Columbia</p>
                      <p className='text-slate-50 font-semibold font-poppins pb-2 text-sm'>Kelowna, BC</p>
                    </div>
                  </li>
                  <li className='mb-2 flex gap-4 justify-center p-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 hover:bg-opacity-75 transition-all duration-300'>
                    <header className='justify-between items-center'>
                      <p className='z-10 mb-2 mt-2.5 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2'>Sep 2020 - Dec 2020</p>
                    </header>
                    <div className='mt-2'>
                      <p className='text-slate-50 font-bold font-poppins pb-2'>Application Developer Intern</p>
                      <p className='text-slate-50 font-semibold font-poppins pb-2'>Reliable Controls</p>
                      <p className='text-slate-50 font-semibold font-poppins pb-2 text-sm'>Victoria, BC</p>
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
