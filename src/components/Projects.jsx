import '../assets/css/projects.css';
import ContactList from '../assets/img/contact-proj.png';
import Magano from '../assets/img/magano-proj.png';
import Faerun from '../assets/img/faerun-proj.png';
import Creadevity from '../assets/img/creadevity-proj.png';
import Dentixio from '../assets/img/dentixio-proj.png';
import Mouhami from '../assets/img/mouhami-proj.png';
import PokerPlanning from '../assets/img/pplanning-proj.png';


export default function Projects() {
  return (
    <div className="projects-container">
        <div className="projects-content">
            <h3>Projects</h3>
            <h1> Check out my latest work </h1>
            <p>
                I've worked on a variety of projects, 
                from simple websites to complex web applications. <br />
                Here are a few of my favorites.
            </p>
            <div className="projects">
                <div className="project-card">
                    <div className="project-img">
                        <img src={Dentixio} />
                    </div>
                    <div className="project-details">
                        <div className="project-title">Dentixio</div>
                        <div className="project-description">
                            Dental Firm Management System.
                        </div>
                        <div className="stack">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                            <span>Redux</span>
                            <span>Mui</span>
                            <span>Express.js</span>
                        </div>
                        <div className="links">
                            <div className="link">website</div>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-img">
                        <img src={Magano} />
                    </div>
                    <div className="project-details">
                        <div className="project-title">Magano CRM</div>
                        <div className="project-description">
                            Call Center Management System.
                        </div>
                        <div className="stack">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                            <span>Redux</span>
                            <span>Mui</span>
                            <span>Express.js</span>
                        </div>
                        <div className="links">
                            <div className="link">website</div>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-img">
                        <img src={Mouhami} />
                    </div>
                    <div className="project-details">
                        <div className="project-title">Mou7ami</div>
                        <div className="project-description">
                            Law Firm Management System.
                        </div>
                        <div className="stack">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                            <span>Redux</span>
                            <span>Mui</span>
                            <span>Express.js</span>
                        </div>
                        <div className="links">
                            <div className="link">website</div>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-img">
                        <img src={Creadevity} />
                    </div>
                    <div className="project-details">
                        <div className="project-title">Creadevity</div>
                        <div className="project-description">
                            A Landing page for Creadevity ( a new growing startup ).
                        </div>
                        <div className="stack">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>Sass</span>
                            <span>JQuery</span>
                            <span>Bootstrap</span>
                        </div>
                        <div className="links">
                            <div className="link">website</div>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-img">
                        <img src={ContactList} />
                    </div>
                    <div className="project-details">
                        <div className="project-title">Contact List</div>
                        <div className="project-description">
                            A small university project for managing contacts with basic features
                            and a standard UI.
                        </div>
                        <div className="stack">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                        <div className="links">
                            <div className="link">website</div>
                            <div className="link">Code</div>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-img">
                        <img src={Faerun} />
                    </div>
                    <div className="project-details">
                        <div className="project-title">Battle Of Faerun</div>
                        <div className="project-description">
                            A game I made for a university project, more details in github
                            or you can try it yourself.
                        </div>
                        <div className="stack">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                        <div className="links">
                            <div className="link">website</div>
                            <div className="link">Code</div>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-img">
                        <img src={PokerPlanning} />
                    </div>
                    <div className="project-details">
                        <div className="project-title">Poker Planning</div>
                        <div className="project-description">
                            A project I made as a part of my internship at Attijari Bank.
                        </div>
                        <div className="stack">
                            <span>Angular</span>
                            <span>SpringBoot</span>
                            <span>Bootstrap</span>
                            <span>Git</span>
                            <span>Github</span>
                            <span>Docker</span>
                            <span>Kubernetes</span>
                            <span>Azure</span>
                            <span>AKS</span>
                        </div>
                        <div className="links">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
