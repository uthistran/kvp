import React, { useState } from 'react'
import ProductComponent from '../product/product';
import './category.css';
import { useTranslation } from 'react-i18next'

function CategoryComponent(props) {
    const [showProducts, displayProduct] = useState(false);
    const { t } = useTranslation();

    function handleCategoryClick() {
        displayProduct(!showProducts)
    }


    var span;
    if (showProducts) {
        span = <span className='arrowsDown'></span>
    }
    else
        span = <span className='arrowsUp'></span>
    return (
        <div>
            <div className='category' onClick={handleCategoryClick} >
                {t(props.category)}
                {span}
            </div>
            {
                showProducts ?
                    <ul className='productList'>
                        {
                            (
                                props.products.map((product, index) => {
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

export default CategoryComponent;