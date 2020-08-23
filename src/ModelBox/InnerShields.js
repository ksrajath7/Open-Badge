import React from 'react'
import './ModelboxItems.css'
import {Paths} from '../ModelBox/Paths/Paths'

function InnerShields(props) {
    return (
        <>
        {
            Paths.shields.map(element=>
                <button key={element.inner} className="modelFrame" onClick={()=>{
                    props.setInnerSource(element.inner)
                    props.setTranslateInner(element.innerTranslate)
                    props.setTextCoverWidth(element.rectWidth)
                    props.setTranslateTextCover(element.rectTranslate)
                    // props.setShieldSource(element.path)
                    // props.setTranslateShield(element.pathTranslate)
                }}>
                    <svg fill="#F45C43" className="createBadge__model" height="322" width="322" viewBox="0 0 322 322">
                        <path d={element.inner} transform={element.innerTranslate} stroke="#db3f27" strokeWidth="10" strokeLinejoin="round"></path>
                    </svg>
                </button>
                )
        }
        </>
    )
}

export default InnerShields
