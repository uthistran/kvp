import React from 'react'
import CategoryComponent from '../category/category'
import './menu.css'

class MenuComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            productData: {},
            dataPopulated: false
        }
    }
    componentDidMount() {
        fetch('product.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        productData: result,
                        dataPopulated: true
                    })
                },
                (error) => {
                    console.log('error in loading')
                }
            )
    }


    render() {
        return (
            <div className='menuDiv'>
                {
                    this.state.dataPopulated ?
                        Object.entries(this.state.productData).map(([key, value], index) => {
                            return (<CategoryComponent category={key} products={value} key={index}></CategoryComponent>)
                        }) : (<div className='loader'>Loading...</div>)
                }
            </div>

        )
    }
}

export default MenuComponent;