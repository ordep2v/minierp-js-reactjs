import React from 'react'
import Navbar from './navbar'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>2V</b>!</span>
            <span className='logo-lg'>
                <i className='fa fa-money'></i>
                <b> 2V</b> APP
            </span>        
        </a>
        <nav className='navbar navbar-static-top'>
            <a href='true' className='sidebar-toggle' data-toggle='offcanvas'> </a>
            <Navbar />
        </nav>
    </header>
)