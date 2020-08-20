import React from 'react'
import './ModelboxItems.css'
import Paths from '../ModelBox/Paths/Paths'

function InnerShields(props) {
    return (
        <>
        {
            Paths.shields.map(element=>
                <button key={element.inner} className="modelFrame" onClick={()=>{
                    props.setInnerSource(element.inner)
                    props.setTranslateInner(element.innerTranslate)
                    props.setShieldSource(element.path)
                    props.setTranslateShield(element.pathTranslate)
                }}>
                    <svg fill="#5200ff" className="createBadge__model" height="322" width="322" viewBox="0 0 322 322">
                        <path d={element.path} transform={element.pathTranslate}></path>
                    </svg>
                </button>
                )
        }
        </>
    )
}

export default InnerShields
