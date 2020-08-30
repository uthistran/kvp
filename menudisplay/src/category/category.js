import React from 'react'
import ProductComponent from '../product/product';
import './category.css'

class CategoryComponent extends React.Component {
    render() {
        return (
            <div>
                <div className='category' >{this.props.category}</div>
                <ul className='productList'>
                    {
                        this.props.products.map((product, index) => {
                            return <ProductComponent key={index} product={product}></ProductComponent>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default CategoryComponent;