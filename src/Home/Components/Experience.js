import React, { useState } from 'react'
import ExperienceCard from './ExperienceCard'

export default () => {
    const [sectionHover, setSectionHover] = useState('')
    const [majorHover, setMajorHover] = useState(false)

    return (
        <div
            className='experience-container'
            onMouseEnter={() => setMajorHover(true)}
            onMouseLeave={() => setMajorHover(false)}
        >
            <h4>Experience</h4>
            <ExperienceCard
                link='https://www.matchbetr.com'
                alt='matchBetr site'
                dates='2020 - PRESENT'
                title='Full Stack Developer'
                subtitle='matchBetr' 
                content="I was the lone developer at matchBetr, responsible for building the entire project from scratch. A full-stack matched betting site, built using the MERN stack. The site provides people with all the tools and tutorials they need to make money from matched betting. This site has oddsmatching software, a slots database, 15 different calculators, forums, tracking software, and much more."
                skills={['React', 'Node', 'Express', 'MongoDB']}
                hover={sectionHover}
                updateHover={value => setSectionHover(value)}
                majorHover={majorHover}
            />
        </div>
    )
}