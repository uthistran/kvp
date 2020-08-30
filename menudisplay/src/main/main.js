import React from 'react'
import HeaderComponent from '../header/header'
import './main.css'
import MenuComponent from '../menu/menu'

class MainComponent extends React.Component {
    render() {
        return (
            <div className='mainDiv'>
                <HeaderComponent></HeaderComponent>
                <MenuComponent></MenuComponent>
            </div>
        )
    }
}

export default MainComponent;