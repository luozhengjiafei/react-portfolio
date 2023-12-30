import resumeFile from '../file/resume.pdf';

function home() {
    return (
    <section id="home" className="home">
        <div className="centerContent">

            <div className=" home_margin">
                <h3 className="homeTitle_start">
                    <span>Hello,</span>
                    <span>I'm</span>
                </h3>
                <h1 className="homeTitle_name">
                    <span>Jeffrey</span>
                    <span>LuoZheng</span>
                </h1>
            </div>
        </div>

        <div className="resumebutton">
            <a type="button" className="btn btn-light btn-lg download-button" target="_blank" rel="noreferrer" href={resumeFile}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Resume/CV
            </a>
        </div>

        <div className="home_icon" id="about">
            <a type="button" className="home-icon" target="_blank" href=" https://github.com/luozhengjiafei">
                <i className="fab fa-github home_icons"></i>
            </a>
            <a className="home-icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jeffrey-luozheng-85883a16b">
                <i className="fab fa-linkedin home_icons"></i>
            </a>
        </div>
    </section>
    );
}

export default home;
