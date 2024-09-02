import '../assets/css/work.css';
import Telecom from '../assets/img/logo_tt.jpg';
import Attijari from '../assets/img/attijari.png';
import Devnet from '../assets/img/devnet.png';

export default function Work() {
  return (
    <div className='work-container' >
        <div className="work-content">
            <h3>Work Experience</h3>
            <ul>
                <li>
                    <div className='post-details'>
                        <img className='company-icon' src={Telecom} />
                        <div className='company-details'>
                            <div className='company-name'>Tunisie Télécom</div>
                            <div className='post-title'>Full-stack developer (Internship)</div>
                        </div>
                    </div>
                    <div className='work-duration' >Jun 2022</div>
                </li>
                <li>
                    <div className='post-details'>
                        <img className='company-icon' src={Devnet} />
                        <div className='company-details'>
                            <div className='company-name'>Devnet</div>
                            <div className='post-title'>Full-stack developer (Internship)</div>
                        </div>
                    </div>
                    <div className='work-duration' >Feb - Jun 2023</div>
                </li>
                <li>
                    <div className='post-details'>
                        <img className='company-icon' src={Attijari} />
                        <div className='company-details'>
                            <div className='company-name'>Attijari Bank</div>
                            <div className='post-title'>DevOps Engineer (Internship)</div>
                        </div>
                    </div>
                    <div className='work-duration' >Jul - Aug 2024</div>
                </li>
            </ul>
        </div>
    </div>
  )
}
