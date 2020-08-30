import React from 'react'
import productData from './product.json'
import CategoryComponent from '../category/category'
import './menu.css'

class MenuComponent extends React.Component {



    render() {
        return (
            <div className='menuDiv'>
                {
                    Object.entries(productData).map(([key, value], index) => {
                        return (<CategoryComponent category={key} products={value} key={index}></CategoryComponent>)
                    })
                }
            </div>

        )
    }
}

export default MenuComponent;