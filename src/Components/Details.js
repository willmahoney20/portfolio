import React, { useState } from 'react'
import '../Stylesheets/Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default ({ active }) => {
    const [sectionHover, setSectionHover] = useState('')

    const handleScroll = index => {
        const div = document.querySelector(`.sections-container > div:nth-child(${index + 1})`)

        if(!div) return

        let div_top = div.getBoundingClientRect().top + window.scrollY

        div_top -= 70
        
        window.scrollTo({ top: div_top, behavior: 'smooth' })
    }

    return (
        <div className='details-container'>
            <div>
                <div className='details-title'>
                    <h1>Will Mahoney</h1>
                    <h3>Junior Software Developer</h3>
                    <h5>Driven by a love for problem-solving through code, I bring a holistic approach to full-stack development, delivering solutions that prioritize both performance and user satisfaction.</h5>
                </div>
                <div className='details-links'>
                    <div
                        onMouseEnter={() => setSectionHover('About')}
                        onMouseLeave={() => setSectionHover('')}
                        onClick={() => handleScroll(0)}
                    >
                        <span className={active === 0 || sectionHover === 'About' ? 'details-link-spanac' : null}></span>
                        <h6 className={active === 0 || sectionHover === 'About' ? 'details-link-h6ac' : null}>About</h6>
                    </div>
                    <div
                        onMouseEnter={() => setSectionHover('Experience')}
                        onMouseLeave={() => setSectionHover('')}
                        onClick={() => handleScroll(1)}
                    >
                        <span className={active === 1 || sectionHover === 'Experience' ? 'details-link-spanac' : null}></span>
                        <h6 className={active === 1 || sectionHover === 'Experience' ? 'details-link-h6ac' : null}>Experience</h6>
                    </div>
                    <div
                        onMouseEnter={() => setSectionHover('Education')}
                        onMouseLeave={() => setSectionHover('')}
                        onClick={() => handleScroll(2)}
                    >
                        <span className={active === 2 || sectionHover === 'Education' ? 'details-link-spanac' : null}></span>
                        <h6 className={active === 2 || sectionHover === 'Education' ? 'details-link-h6ac' : null}>Education</h6>
                    </div>
                </div>
            </div>
            <div>
                <div className='details-socials'>
                    <a href='mailto:will.mahoney3@gmail.com' alt='Will Mahoney Email'>
                        <FontAwesomeIcon icon={faEnvelope} className='details-social-icon' />
                        <p>will.mahoney3@gmail.com</p>
                    </a>
                    {/* <a href='https://github.com/willmahoney20' alt='Will Mahoney GitHub Profile' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} className='details-social-icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/will-mahoney-a1356529b/' alt='Will Mahoney LinkedIn Profile' target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} className='details-social-icon' />
                    </a> */}
                    {/* <a href='https://twitter.com/WillMahoney741' alt='Will Mahoney X.com Profile' target='_blank'>
                        <FontAwesomeIcon icon={faXTwitter} className='details-social-icon' />
                    </a>
                    <a href='https://youtube.com' alt='Will Mahoney YouTube Profile' target='_blank'>
                        <FontAwesomeIcon icon={faYoutube} className='details-social-icon' />
                    </a> */}
                </div>
            </div>
        </div>
    )
}