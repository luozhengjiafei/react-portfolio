function navbar() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">

                    <a class="navbar-brand" href="{{ url('/') }}">
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar navbar-collapse flex-grow-1 text-right navbar-fixed-top" id="navbarNav">
                        <ul class="navbar-nav ms-auto flex-nowrap">
                            <li class="nav-item active">
                                <a class="nav-link px-4" href="#home">Home</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link px-4" href="#about">About</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link px-4" href="#skill">Skills</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link px-4" href="#project">Project</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link px-4" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
  }
  
  export default navbar;