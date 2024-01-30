import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default ({ link, alt, dates, title, subtitle, content, skills, hover, updateHover, majorHover }) => {
    return (
        <a href={link} alt={alt} target='_blank'>
            <div
                className={
                    hover === title ? 'experience-section-active' : 
                    majorHover ? 'experience-section-dim' : 
                    null
                }
                onMouseEnter={() => updateHover(title)}
                onMouseLeave={() => updateHover('')}
            >
                <div className='experience-section-title experience-section-col'>
                    <div>
                        <h4>{title}</h4>
                        <FontAwesomeIcon icon={faCircle} className='experience-secion-dot' />
                        <h4>{subtitle}</h4>
                    </div>
                    <div>
                        <h6>{dates}</h6>
                    </div>
                </div>
                <div className='experience-section-details'>
                    <p>{content}</p>
                </div>
                {(skills && skills.length > 0) && 
                <div className='experience-section-skills'>
                    <ul>
                        {skills.map((skill, index) => {
                            return (
                                <li key={index}>
                                    <div>
                                        <p>{skill}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>}
            </div>
        </a>
    )
}