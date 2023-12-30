function navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <a className="navbar-brand" href="{{ url('/') }}">
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar navbar-collapse flex-grow-1 text-right navbar-fixed-top" id="navbarNav">
                        <ul className="navbar-nav ms-auto flex-nowrap">
                            <li className="nav-item active">
                                <a className="nav-link px-4" href="#home">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link px-4" href="#about">About</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link px-4" href="#skill">Skills</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link px-4" href="#project">Project</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link px-4" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
  }
  
  export default navbar;