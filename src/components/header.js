function header() {
    return (
        <div className="App">
        <header>
          <title>Jeffrey Luo's Portfolio</title>
        </header>
  
        <main className='bg-slate-700'>
          <section className='min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between'>
              <ul>
                <li className='text-slate-50 font-bold text-2xl'>Home</li>
              </ul>
              <ul>
                <li className='text-slate-50 font-bold text-2xl'>About</li>
              </ul>
              <ul>
                <li className='text-slate-50 font-bold text-2xl'>Projects</li>
              </ul>
              <ul>
                <li className='text-slate-50 font-bold text-2xl'>Contact</li>  
              </ul>
            </nav>
          </section>
        </main>
      </div>
    );
  }
  
  export default header;