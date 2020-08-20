import React from 'react'
import './ModelboxItems.css'
import Paths from '../ModelBox/Paths/Paths'

function Shields(props) {
    return (
        <>
        {
            Paths.shields.map(element=>
                <button key={element.path} className="modelFrame" onClick={()=>{
                    props.setShieldSource(element.path)
                    props.setTranslateShield(element.pathTranslate)
                }}>
                    <svg fill="#ccc" className="createBadge__model" height="322" width="322" viewBox="0 0 322 322">
                        <path d={element.path} transform={element.pathTranslate}></path>
                    </svg>
                </button>
                )
        }
        </>
    )
}

export default Shields
