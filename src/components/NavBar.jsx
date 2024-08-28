import '../assets/css/navbar.css';
import Home from '../assets/img/home.png';
import Github from '../assets/img/github.png';
import Linkedin from '../assets/img/linkedin.png';
import Moon from '../assets/img/moon.png';
import Sun from '../assets/img/sun.png';

export default function NavBar(props) {
  return (
    <div className="navbar-container">
        <div className="navbar-content">
            <ul>
                <li>
                  <a href=".home-container">
                    <img src={Home} alt="home" id='home-icon' />
                  </a>
                </li>
                <hr />
                <li>
                  <a href="https://github.com/RayenInoubli">
                    <img src={Github} alt="github" id='github-icon' />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rayen-inoubli-a7842120b/">
                    <img src={Linkedin} alt="linkedin" />
                  </a>
                </li>
                <hr />
                <li
                  onClick={() => props.setIsDark(!props.isDark)}
                >
                  <img src={props.isDark ? Moon : Sun} alt="theme" id='theme-icon' />
                </li>
            </ul>
        </div>
    </div>
  )
}
