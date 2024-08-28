import '../assets/css/work.css';

export default function Work() {
  return (
    <div className='work-container' >
        <div className="work-content">
            <h3>Work Experience</h3>
            <ul>
                <li>
                    <div className='post-details'>
                        <div className='company-icon' ></div>
                        <div className='company-details'>
                            <div className='company-name'>Tunisie Télécom</div>
                            <div className='post-title'>Full-stack developer (Internship)</div>
                        </div>
                    </div>
                    <div className='work-duration' >Jun 2022</div>
                </li>
                <li>
                    <div className='post-details'>
                        <div className='company-icon' ></div>
                        <div className='company-details'>
                            <div className='company-name'>Devnet</div>
                            <div className='post-title'>Full-stack developer (Internship)</div>
                        </div>
                    </div>
                    <div className='work-duration' >Feb - Jun 2023</div>
                </li>
                <li>
                    <div className='post-details'>
                        <div className='company-icon' ></div>
                        <div className='company-details'>
                            <div className='company-name'>Magano Inc</div>
                            <div className='post-title'>Full-stack developer (Freelance)</div>
                        </div>
                    </div>
                    <div className='work-duration' >Aug 2023</div>
                </li>
                <li>
                    <div className='post-details'>
                        <div className='company-icon' ></div>
                        <div className='company-details'>
                            <div className='company-name'>Dentixio</div>
                            <div className='post-title'>Full-stack developer</div>
                        </div>
                    </div>
                    <div className='work-duration' >Sept 2023 - Feb 2024</div>
                </li>
                <li>
                    <div className='post-details'>
                        <div className='company-icon' ></div>
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
