import React from 'react'
import ProductComponent from '../product/product';
import './category.css'

class CategoryComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            showProducts: false
        }
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }

    handleCategoryClick() {
        this.setState({
            showProducts: !this.state.showProducts
        })
    }

    render() {
        var span;
        if (this.state.showProducts) {
            span = <span className='arrowsDown'></span>
        }
        else
            span = <span className='arrowsUp'></span>
        return (
            <div>
                <div className='category' onClick={this.handleCategoryClick} >
                    {this.props.category}
                    {span}
                </div>
                {
                    this.state.showProducts ?
                        <ul className='productList'>
                            {
                                (
                                    this.props.products.map((product, index) => {
                                        return <ProductComponent key={index} product={product}></ProductComponent>
                                    })
                                )
                            }
                        </ul>
                        : null
                }
            </div>
        )
    }
}

export default CategoryComponent;