import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default ({ school, course, date, content, grades, hover, updateHover, majorHover }) => {
    return (
        <div
            className={
                hover === school ? 'experience-section-active' : 
                majorHover ? 'experience-section-dim' : 
                null
            }
            onMouseEnter={() => updateHover(school)}
            onMouseLeave={() => updateHover('')}
        >
            <div className='experience-section-title'>
                <h4>{school}</h4>
                <FontAwesomeIcon icon={faCircle} className='experience-secion-dot' />
                <h4>{course}</h4>
            </div>
            <div className='education-section-date'>
                <h5>{date}</h5>
            </div>
            <div className='experience-section-details'>
                <p>{content}</p>
            </div>
            {(grades && grades.length > 0) && 
            <div className='education-section-grades'>
                <ul>
                    {grades.map((item, index) => {
                        return (
                            <li key={index}>
                                <div>
                                    <p>{item.subject} - {item.grade}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>}
        </div>
    )
}