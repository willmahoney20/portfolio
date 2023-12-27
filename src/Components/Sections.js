import '../Stylesheets/Sections.css'
import About from './About'
import Experience from './Experience'
import Education from './Education'

export default () => {
    return (
        <div className='sections-container'>
            <About />
            <Experience />
            <Education />
        </div>
    )
}