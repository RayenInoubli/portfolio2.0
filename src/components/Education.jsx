import '../assets/css/education.css';

export default function Education() {
  return (
    <div className='education-container' >
        <div className="education-content">
            <h3>Education</h3>
            <ul>
                <li>
                    <div className='degree-details'>
                        <div className='institution-icon' ></div>
                        <div className='institution-details'>
                            <div className='institution-name'>ISAMM</div>
                            <div className='degree-title'>Bachelor's Degree of Computer Science</div>
                        </div>
                    </div>
                    <div className='degree-duration' >2020 - 2023</div>
                </li>
                <li>
                    <div className='degree-details'>
                        <div className='institution-icon' ></div>
                        <div className='institution-details'>
                            <div className='institution-name'>ISAMM</div>
                            <div className='degree-title'>Software Engineering Degree</div>
                        </div>
                    </div>
                    <div className='degree-duration' >2023 - present</div>
                </li>
            </ul>
        </div>
    </div>
  )
}
