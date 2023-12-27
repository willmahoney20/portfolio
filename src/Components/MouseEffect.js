import React, { useState, useEffect } from 'react'
import '../Stylesheets/MouseEffect.css'

export default () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = e => setPosition({ x: e.clientX, y: e.clientY })

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className='mouse-container'>
            <div
                className='mouse-circle mouse-circle-1'
                style={{ left: position.x - 100, top: position.y - 100 }}
            />
            <div
                className='mouse-circle mouse-circle-2'
                style={{ left: position.x - 200, top: position.y - 200 }}
            />
            <div
                className='mouse-circle mouse-circle-3'
                style={{ left: position.x - 300, top: position.y - 300 }}
            />
        </div>
    )
}