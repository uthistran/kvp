import React from 'react'
import './header.css'
import logo from './appletree.svg'
import Translation from '../translate/translate'

class HeaderComponent extends React.Component{
    render(){
        return(
            <div className='header'>
                <img src={logo} alt='hotelName'></img>
                <Translation></Translation>
            </div>
        )
    }
}

export default HeaderComponent