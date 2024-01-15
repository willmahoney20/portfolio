import React, { lazy } from 'react'
import '../../Stylesheets/Home/Sections.css'
import About from './About'
import Experience from './Experience'
const Projects = lazy(() => import ('./Projects'))
const Education = lazy(() => import ('./Education'))

export default () => {
    return (
        <div className='sections-container'>
            <About />
            <Experience />
            <Projects />
            <Education />
        </div>
    )
}