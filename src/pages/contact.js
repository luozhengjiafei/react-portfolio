import '../css/App.css';
import Particle from '../js/particle';


function contact() {
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
              <div className='col-md-10 z-10'>
                <h1 className='text-5xl font-bold font-poppins text-slate-300 pb-14'>Contact</h1>
                <input className='bg-transparent border-b-2 border-slate-50 text-slate-300 font-poppins text-xl w-1/3 mb-8' placeholder='Name' type='text'/>
                <br></br>
                <input className='bg-transparent border-b-2 border-slate-50 text-slate-300 font-poppins text-xl w-1/2 mb-8' placeholder='Email' type='text'/>
                <textarea id="message" rows="4" className="font-poppins block p-2.5 w-full text-sm text-slate-300 bg-transparent border-b-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a message here...">
                </textarea>
                <button type="submit" class="mt-5 download-btn bg-slate-700 hover:bg-gray-300 py-2 px-4 rounded shadow hover:shadow-lg transition-all duration-300 ease-in-out text-slate-400 hover:text-slate-700 font-poppins">
                Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    );
}
    
export default contact;