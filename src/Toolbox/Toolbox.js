import React from 'react'
import './Toolbox.css'
import IconModel from '../Assets/Icon.svg'
import Inner from '../Assets/Inner.svg'
import Text from '../Assets/Text.svg'
import TextCover from '../Assets/TextCover.svg'

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
            <img className="createBadge__tool" src={Inner} alt="shield"/>
        </button>
        <button style={{background:props.themes.sectionBackground}} className={`frame ${props.iconModel && "selected"}`} onClick={()=>{
                props.setInnerShield(false)
                props.setIconModel(true)
                props.setText(false)
                props.setTextCover(false)
                props.setColors(false)
                
                }}>
            <img className="createBadge__tool__star" src={IconModel} alt="icon"/>
        </button>
        <button style={{background:props.themes.sectionBackground}} className={`frame ${props.text && "selected"}`} onClick={()=>{
                props.setInnerShield(false)
                props.setIconModel(false)
                props.setText(true)
                props.setTextCover(false)
                props.setColors(false)
                
                }}>
            <img className="createBadge__tool__star" src={Text} alt="tex"/>
        </button>
        <button style={{background:props.themes.sectionBackground}} className={`frame ${props.colors && "selected"}`} onClick={()=>{
                props.setInnerShield(false)
                props.setIconModel(false)
                props.setText(false)
                props.setTextCover(false)
                props.setColors(true)
                
                }}>
            <img className="createBadge__tool__star" src={TextCover} alt="tex"/>
        </button>
        </>
    )
}

export default Toolbox
