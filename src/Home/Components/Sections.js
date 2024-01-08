import '../../Stylesheets/Home/Sections.css'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'

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