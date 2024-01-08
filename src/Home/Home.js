import React, { useState, useEffect } from 'react'
import Details from './Components/Details'
import MouseEffect from './Components/MouseEffect'
import Sections from './Components/Sections'

export default () => {
    const [activeDiv, setActiveDiv] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const divs = document.querySelectorAll('.sections-container > div')
    
            divs.forEach((div, index) => {
                const divRect = div.getBoundingClientRect()

                if(divRect.top <= 0.3 * window.innerHeight) setActiveDiv(index)
            })
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='home-shell'>
            {window.matchMedia('(hover: hover)').matches && <MouseEffect />}
            <div className='home-container'>
                <Details active={activeDiv} />
                <Sections />
            </div>
        </div>
    )
}