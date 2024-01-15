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
            <h4>Projects</h4>
            <ExperienceCard
                link='/projects/south-park-game'
                alt='South Park Slot'
                title='South Park Slot'
                subtitle='Online Casino Slot Game' 
                content="I combined my love of South Park and my interest in the online casino gaming space, to create this casino slot game. The slot features a seamlessly implemented logic that ensures a fair and engaging gaming experience, and the intricate slot and reel spinning animations, enhance the visual appeal and dynamism of the gameplay."
                skills={['JavaScript', 'React', 'HTML', 'CSS']}
                hover={sectionHover}
                updateHover={value => setSectionHover(value)}
                majorHover={majorHover}
            />

            <ExperienceCard
                link='https://www.matchbetr.com/#oddsmatcher'
                alt='matchBetr Oddsmatching page'
                title='Oddsmatcher'
                subtitle='Betting Odds Comparison Software'
                content="This betting tool combines multiple sports betting APIs to find the most profitable bets for matched bettors. This software combines and compares data from thousands of sporting events, on over 20 different betting sites every minute."
                skills={['JavaScript', 'Node', 'Express', 'MongoDB', 'Matchbook API', 'Sports Betting API']}
                hover={sectionHover}
                updateHover={value => setSectionHover(value)}
                majorHover={majorHover}
            />
        </div>
    )
}