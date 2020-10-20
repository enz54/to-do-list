import React from 'react';
import './style.css'

function index() {
    return (
        <div className="container">
            <div className="title">About</div>
            <div className="text">I have used the following  technologies:  <strong>React</strong> to create interactive UIs
            I used <strong>Material-UI</strong> to build my form. To manage the state of the single page app, I used <strong>Redux</strong>
            as state container. I managed the route using <strong>react-router-dom</strong>
            I decided to use this stack as I thought I would be easier to manage the state of the App. It was not straightforward to
            implement it, especially to make sure the data persist within localSotage
            </div>
        </div>
    )
}

export default index
