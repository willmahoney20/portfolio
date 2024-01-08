import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import NoMatch from './Routing/404Error'
import Loading from './Routing/Loading'
import Game from './Slot/Game'
import './Stylesheets/Site.css'

export default () => {

    return (
        <Router>
            <div className='site-shell'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects/south-park-game' element={<Game />} />

                    <Route path='*' element={<NoMatch />} />
                </Routes>
            </div>
        </Router>
    )
}