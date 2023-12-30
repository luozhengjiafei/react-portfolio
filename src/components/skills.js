function skills() {
    return (
    <section id="skill" className="reveal">
        <div className="skillsPage">
            <div className="backgroundCover">
                <div className="animation-area">
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <h1 className="bigHeader">Skills</h1>
            <div className="innerSection">
                <ul>
                    <h1 className="skillTitle">Technology:
                        <div style= {{marginLeft:'30px'}}>
                            <p className="skillText">Java, JavaScript/TypeScript, HTML, CSS/SASS, PHP, C/C++, Python</p>
                        </div>
                    </h1>
                    <h1 className="skillTitle">Framework:
                        <div style={{marginLeft:'30px'}}>
                            <p className="skillText">Node.js, MySQL, jQuery, Mocha, React, Laravel</p>
                        </div>
                    </h1>
                    <h1 className="skillTitle">Other:
                        <div style={{marginLeft:'30px'}}>
                            <p className="skillText" id="project">Version Control (Git), Linux, JUnit, UML, Soap UI, Postman</p>
                        </div>
                    </h1>
                </ul>
            </div>
        </div>
    </section>
    );
}
    
export default skills;
