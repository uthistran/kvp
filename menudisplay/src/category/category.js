import React from 'react'

class CategoryComponent extends React.Component{
    render(){
        return(
            <div>
                <div className='category' ></div>
                <ul>
                    {
                        this.props.products.map((product, index) => {
                            <ProductComponent key={index} product={product}></ProductComponent>
                        })
                    }
                </ul>
            </div>
        )
    }
}