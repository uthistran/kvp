import React from 'react'
import './header.css'
import logo from './appletree.svg'

class HeaderComponent extends React.Component{
    render(){
        return(
            <div className='header'>
                <img src={logo} alt='hotelName'></img>
            </div>
        )
    }
}

export default HeaderComponent