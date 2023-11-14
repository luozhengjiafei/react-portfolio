function home() {
    return (
    <section id="home" class="home">
        <div class="centerContent">

            <div class=" home_margin">
                <h3 class="homeTitle_start">
                    <span>Hello,</span>
                    <span>I'm</span>
                </h3>
                <h1 class="homeTitle_name">
                    <span>Jeffrey</span>
                    <span>LuoZheng</span>
                </h1>
            </div>
        </div>

        <div class="resumebutton">
            <a type="button" class="btn btn-light btn-lg download-button" target="_blank" href="/file/resume.pdf">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Resume/CV
            </a>
        </div>

        <div class="home_icon" id="about">
            <a type="button" class="home-icon" target="_blank" href=" https://github.com/luozhengjiafei">
                <i class="fab fa-github home_icons"></i>
            </a>
            <a class="home-icon" target="_blank" href="https://www.linkedin.com/in/jeffrey-luozheng-85883a16b">
                <i class="fab fa-linkedin home_icons"></i>
            </a>
        </div>
    </section>
    );
}

export default home;
