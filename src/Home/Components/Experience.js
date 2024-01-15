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
                title='matchBetr'
                subtitle='Full-Stack Matched Betting Platform' 
                content="A full-stack matched betting sites, built using the MERN stack. The site provides people with all the tools and tutorials they need to make money from matched betting. This site has oddsmatching software, a slots database, 15 different calculators, tracking software, and much more..."
                skills={['React', 'HTML', 'CSS', 'Node', 'Express', 'MongoDB']}
                hover={sectionHover}
                updateHover={value => setSectionHover(value)}
                majorHover={majorHover}
            />

            <ExperienceCard
                link='https://www.matchbetr.com/forums'
                alt='matchBetr Forums'
                title='Community Forums'
                subtitle='Full-Stack Forums'
                content="The matchBetr.com forums allows users to post questions and discuss matched betting related topics with other users. A user can update their profile picture and receive instant notifications when another user interacts with them."
                skills={['React', 'Node', 'Express', 'MongoDB', 'AWS s3', 'Socket.IO']}
                hover={sectionHover}
                updateHover={value => setSectionHover(value)}
                majorHover={majorHover}
            />

            <ExperienceCard
                link='https://freecodecamp.org'
                alt='freeCodeCamp site'
                title='freeCodeCamp'
                subtitle='Online Courses' 
                content="To learn the basics of programming, I started by completing the first few courses on freeCodeCamp, including: 'Responsive Web Design', 'JavaScript Algorithms and Data Structures', 'Front End Development Libraries', 'Back End Development and APIs', and 'Data Visualisation'."
                skills={['HTML', 'CSS', 'JavaScript']}
                hover={sectionHover}
                updateHover={value => setSectionHover(value)}
                majorHover={majorHover}
            />
        </div>
    )
}