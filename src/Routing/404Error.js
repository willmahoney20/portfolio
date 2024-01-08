import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import "../Stylesheets/Routing.css"

export default () => {

	useEffect(() => {
		document.title = '404 Error - Will Mahoney'		
		window.history.replaceState(null, "404 Error", `/404-error`)
	}, [])

    return(
        <div className='error-background container'>
            <div className='error-container'>
                <h3>404 ERROR PAGE</h3>
                <h1>404</h1>
                <h5>uh-oh! Page not found</h5>
                <Link to='/'>
                    <button>
                        Return to Home
                    </button>
                </Link>
            </div>
        </div>
    )
}