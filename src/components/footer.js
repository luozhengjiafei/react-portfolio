function footer() {
    return (
        <footer className="footer" id="contact">
            <div>
                <div className="footer-align">
                    <div className="footer-list">
                        <h1 className="footer-title">Contact</h1>
                    </div>
                    <ul className="footer-list">
                        <li>
                            <a className="nav-link px-4 footer-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jeffrey-luozheng-85883a16b/">linkedin</a>
                        </li>
                        <li>
                            <a className="nav-link px-4 footer-link" target="_blank" rel="noreferrer" href="https://github.com/luozhengjiafei">Github</a>
                        </li>
                    </ul>
                    <div className='copyright'>
                        <p className="footer-copyright" style={{color: '#999999'}}>&copy; <span id="year">2023</span> by Jeffrey LuoZheng - <a target="_blank" rel="noreferrer" href="mailto:luozhengjiafei@gmail.com" style={{color: '#999999'}}>email</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
  
  export default footer;