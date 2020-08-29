import React from 'react'

class ProductComponent extends React.Component{
    render(){
        return(
            <li>
                <h4>{this.props.name}</h4>
                <div>{this.props.description}</div>
                <div>{this.props.price}</div>
            </li>
        )
    }
}

export default ProductComponent