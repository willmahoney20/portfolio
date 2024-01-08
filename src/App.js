import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from './Routing/Loading'
import './Stylesheets/Site.css'
const Home = lazy(() => import ('./Home/Home'))
const NoMatch = lazy(() => import ('./Routing/404Error'))
const Game = lazy(() => import ('./Slot/Game'))

export default () => {

    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <div className='site-shell'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/projects/south-park-game' element={<Game />} />

                        <Route path='*' element={<NoMatch />} />
                    </Routes>
                </div>
            </Suspense>
        </Router>
    )
}