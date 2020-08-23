import React from 'react'
import './Toolbox.css'
import IconModel from '../Assets/star.svg'
import Inner from '../Assets/shield.svg'
import Text from '../Assets/text.svg'
import Color from '../Assets/colors.svg'

function Toolbox(props) {
    
    return (
        <>
        <button style={{background:props.themes.sectionBackground}} className={`frame ${props.innerShield && "selected"}`}  onClick={()=>{
                    props.setInnerShield(true)
                    props.setIconModel(false)
                    props.setText(false)
                    props.setTextCover(false)
                    props.setColors(false)
                    
                    }}>
            <img  src={Inner} alt="shield"/>
            Shield
        </button>
        <button style={{background:props.themes.sectionBackground}} className={`frame ${props.iconModel && "selected"}`} onClick={()=>{
                props.setInnerShield(false)
                props.setIconModel(true)
                props.setText(false)
                props.setTextCover(false)
                props.setColors(false)
                
                }}>
            <img src={IconModel} alt="icon"/>
            Icon
        </button>
        <button style={{background:props.themes.sectionBackground}} className={`frame ${props.text && "selected"}`} onClick={()=>{
                props.setInnerShield(false)
                props.setIconModel(false)
                props.setText(true)
                props.setTextCover(false)
                props.setColors(false)
                
                }}>
            <img  src={Text} alt="tex"/>
            Text
        </button>
        <button style={{background:props.themes.sectionBackground}} className={`frame ${props.colors && "selected"}`} onClick={()=>{
                props.setInnerShield(false)
                props.setIconModel(false)
                props.setText(false)
                props.setTextCover(false)
                props.setColors(true)
                
                }}>
            <img src={Color} alt="tex"/>
            Colors
        </button>
        </>
    )
}

export default Toolbox
