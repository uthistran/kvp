import React from 'react'
import './product.css'
import { numberFormat } from '../helper/formatnumber'
import { useTranslation } from 'react-i18next'

function ProductComponent(props) {

    const { t } = useTranslation();
    
    return (
        <li>
            <h4 className='productName'>{t(props.product.name)}</h4>
            <div className='productDescription'>{t(props.product.description)}</div>
            <div className='productPrice'>{numberFormat(props.product.price)}</div>
        </li>
    )

}

export default ProductComponent