import React, {useEffect, useState} from 'react'
import i18n from '../i18n'
import './translate.css'

function Translation(){

    const [value, changeLanguage] = useState('en-US');
    
    function handleChange(event){
        changeLanguage(event.target.value)
        
        
    }

    useEffect(()=>{
        i18n.changeLanguage(value, function(e){
            console.log("language updated")
        })
    })
    
    return(
        <div className='translateDiv'>
            <select value={value} onChange={handleChange}>
            <option value="en-US">English</option>
            <option value="zh-ZH">Chinese</option>
            <option value="es-ES">Spanish</option>
            <option value="ta-IN">Tamil</option>
          </select>
        </div>
    )
}

export default Translation;