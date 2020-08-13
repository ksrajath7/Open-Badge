import React from 'react'
import './Toolbox.css'
import Shield from '../Assets/Shield1.svg'
import IconModel from '../Assets/Star.svg'

function Toolbox(props) {
    return (
        <>
            <img className="createBadge__tool" src={Shield} alt="shield" onClick={()=>{
                props.setShield(true)
                props.setIconModel(false)
                props.setText(false)
                props.setTextCover(false)
                
                }}/>
            <img className="createBadge__tool__star" src={IconModel} alt="icon" onClick={()=>{
                props.setShield(false)
                props.setIconModel(true)
                props.setText(false)
                props.setTextCover(false)
                
                }}/>
            <img className="createBadge__tool" src="" alt="T" onClick={()=>{
                props.setShield(false)
                props.setIconModel(false)
                props.setText(true)
                props.setTextCover(false)
                
                }}/>
            <img className="createBadge__tool" src="" alt="tex" onClick={()=>{
                props.setShield(false)
                props.setIconModel(false)
                props.setText(false)
                props.setTextCover(true)
                
                }}/>
        </>
    )
}

export default Toolbox
