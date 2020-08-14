import React from 'react'
import './Toolbox.css'
import IconModel from '../Assets/Icon.svg'
import Shield from '../Assets/Shield.svg'
import Text from '../Assets/Text.svg'
import TextCover from '../Assets/TextCover.svg'

function Toolbox(props) {
    
    return (
        <>
        <button style={{background:props.themes.sectionBackground}} className={`frame ${props.shield && "selected"}`}  onClick={()=>{
                    props.setShield(true)
                    props.setIconModel(false)
                    props.setText(false)
                    props.setTextCover(false)
                    
                    }}>
            <img className="createBadge__tool" src={Shield} alt="shield"/>
        </button>
        <button style={{background:props.themes.sectionBackground}} className={`frame ${props.iconModel && "selected"}`} onClick={()=>{
                props.setShield(false)
                props.setIconModel(true)
                props.setText(false)
                props.setTextCover(false)
                
                }}>
            <img className="createBadge__tool__star" src={IconModel} alt="icon"/>
        </button>
        <button style={{background:props.themes.sectionBackground}} className={`frame ${props.text && "selected"}`} onClick={()=>{
                props.setShield(false)
                props.setIconModel(false)
                props.setText(true)
                props.setTextCover(false)
                
                }}>
            <img className="createBadge__tool__star" src={Text} alt="tex"/>
        </button>
        <button style={{background:props.themes.sectionBackground}} className={`frame ${props.textCover && "selected"}`} onClick={()=>{
                props.setShield(false)
                props.setIconModel(false)
                props.setText(false)
                props.setTextCover(true)
                
                }}>
            <img className="createBadge__tool__star" src={TextCover} alt="tex"/>
        </button>
        </>
    )
}

export default Toolbox
