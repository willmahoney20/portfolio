import React, { useState } from 'react'
import EducationCard from './EducationCard'

export default () => {
    const [sectionHover, setSectionHover] = useState('')
    const [majorHover, setMajorHover] = useState(false)

    return (
        <div
            className='experience-container'
            onMouseEnter={() => setMajorHover(true)}
            onMouseLeave={() => setMajorHover(false)}
        >
            <h4>Education</h4>
            <EducationCard
                school='University of Leeds'
                course='Mathematics'
                date='2019 - 2020'
                content="During my time at the University of Leeds studying Mathematics, I found the challenging nature of the course invigorating. Despite ultimately deciding to pursue programming and leaving the university, I cherished the collaborative experience of working on projects with like-minded individuals."
                hover={sectionHover}
                updateHover={value => setSectionHover(value)}
                majorHover={majorHover}
            />

            <EducationCard
                school='Haybridge Sixth Form'
                course='A Levels'
                date='2017 - 2019'
                content="My A Levels were the most enjoyable portion of my education, I loved working on challenging problems in my maths classes. The social side of sixth form was great, and I was apart of the football team, that got to the county final."
                grades={[
                    {subject: 'Maths', grade: 'A*'},
                    {subject: 'Further Maths', grade: 'A'},
                    {subject: 'Chemistry', grade: 'D'},
                ]}
                hover={sectionHover}
                updateHover={value => setSectionHover(value)}
                majorHover={majorHover}
            />

            <EducationCard
                school='Haybridge High School'
                course='GCSEs'
                date='2012 - 2017'
                content="Although I didn't love every course in my GCSEs, I really enjoyed the opportunity to study a wide range of subjects, and expand my knowledge of different topics and subjects."
                grades={[
                    {subject: 'Maths', grade: 'A*'},
                    {subject: 'Physics', grade: 'A'},
                    {subject: 'Chemisty', grade: 'A'},
                    {subject: 'Biology', grade: 'A'},
                    {subject: 'English Lauguage', grade: 'A'},
                    {subject: 'English Literature', grade: 'B'},
                    {subject: 'Geography', grade: 'A'},
                    {subject: 'Physical Education', grade: 'A'},
                    {subject: 'Business Studies', grade: 'B'},
                    {subject: 'ICT', grade: 'B'}
                ]}
                hover={sectionHover}
                updateHover={value => setSectionHover(value)}
                majorHover={majorHover}
            />
        </div>
    )
}