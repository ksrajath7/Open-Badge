import React from 'react'
import './ModelboxItems.css'
import Shield1 from '../Assets/Shield1.svg'
import Shield2 from '../Assets/Shield2.svg'
import Shield3 from '../Assets/Shield3.svg'
import Shield4 from '../Assets/Shield4.svg'
import Paths from '../ModelBox/Paths/Paths'

function Shields(props) {
    return (
        <>
        <button className="modelFrame" onClick={()=>{
                props.setShieldSource(Paths.shields.sharp)
                props.setTranslateShield(Paths.shields.sharpTranslate)
            }}>
            <img className="createBadge__model" src={Shield1} alt="s1"/>
        </button>
        <button className="modelFrame" onClick={()=>{
                props.setShieldSource(Paths.shields.colar)
                props.setTranslateShield(Paths.shields.colarTranslate)
            }}>
            <img className="createBadge__model" src={Shield2} alt="s2"/>
        </button>
        <button className="modelFrame" onClick={()=>{
                props.setShieldSource(Paths.shields.circle)
                props.setTranslateShield(Paths.shields.circleTranslate)
            }}>
            <img className="createBadge__model" src={Shield3} alt="s3"/>
        </button>
        <button className="modelFrame" onClick={()=>{
                props.setShieldSource(Paths.shields.rectangle)
                props.setTranslateShield(Paths.shields.rectangleTranslate)
            }}>
            <img className="createBadge__model" src={Shield4} alt="s4"/>
        </button>
        <button className="modelFrame"onClick={()=>{
                props.setShieldSource('')
                props.setTranslateShield('')
            }}>
            <h2>CLEAR</h2>
        </button>
        </>
    )
}

export default Shields
