function project() {
    return (

    <section id="project" className="reveal">
        <div className="projectPage">
            <h1 className="projectTitle" style={{color: 'white'}}>Projects</h1>
            <div className="container-fluid">
                <div className="row projectBox">


                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-image">

                        </div>
                        <div className="card-text">
                            <h2>Space shooter</h2>
                            <p>A Java-based side-scrolling space shooter contains basic features like collision system, enemy generation,
                                frame change handler, background image, sound, scoring, levelling and game-ending mechanism.
                            </p>
                        </div>
                        <div className="card-stats">
                            <div className="stat-link">
                                <h5 className="stat-des">Github link:</h5>
                            </div>
                            <div className="stat">
                                <i className="fas fa-long-arrow-alt-right link_icons" href="https://github.com/luozhengjiafei/SpaceShooter"></i>
                            </div>
                        </div>
                    </div>


                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-image">

                        </div>
                        <div className="card-text">
                            <h2>Snake Game</h2>
                            <p>A two-dimensional snake game with Java that utilizes JPanel and JFrame as
                                the UI. Core features include a title screen and a dynamic difficulty system that
                                increase the snake movement speed based on the user score.
                            </p>
                        </div>
                        <div className="card-stats">
                            <div className="stat-link">
                                <h5 className="stat-des">Github link:</h5>
                            </div>
                            <div className="stat">
                                <i className="fas fa-long-arrow-alt-right link_icons" href="https://github.com/luozhengjiafei/SnakeGame"></i>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-image">

                        </div>
                        <div className="card-text">
                            <h2>Calculator App</h2>
                            <p>A calculator application explicitly with the React.JS that
                                performs all the standard, scientific and currency calculator's fundamental operations.
                            </p>
                        </div>
                        <div className="card-stats">
                            <div className="stat-link">
                                <h5 className="stat-des">Github link:</h5>
                            </div>
                            <div className="stat">
                                <i className="fas fa-long-arrow-alt-right link_icons" href="https://github.com/luozhengjiafei/Calculator"></i>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-image">

                        </div>
                        <div className="card-text">
                            <h2>Weather App</h2>
                            <p>A weather application with React.js and Open Weather API. The app contains
                                a city name search function also dynamic background change features based on the city's
                                weather conditions.
                            </p>
                        </div>
                        <div className="card-stats">
                            <div className="stat-link">
                                <h5 className="stat-des">Github link:</h5>
                            </div>
                            <div className="stat">
                                <i className="fas fa-long-arrow-alt-right link_icons" href="https://github.com/luozhengjiafei/WeatherApp"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    );
}
    
export default project;