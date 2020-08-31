import React from 'react'
import './product.css'
import { numberFormat } from '../helper/formatnumber'

class ProductComponent extends React.Component {
    render() {
        return (
            <li>
                <h4 className='productName'>{this.props.product.name}</h4>
                <div className='productDescription'>{this.props.product.description}</div>
                <div className='productPrice'>{numberFormat(this.props.product.price)}</div>
            </li>
        )
    }
}

export default ProductComponent