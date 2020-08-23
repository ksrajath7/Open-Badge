import React from 'react'
import './ModelboxItems.css'
import {Paths} from '../ModelBox/Paths/Paths'

function IconModels(props) {
    return (
        <>
        {
            Paths.iconModels.map(element=>
                <button key={element.path} className="modelFrame" onClick={()=>{
                    props.setIconModelSource(element.path)
                    props.setTranslateIconModel(element.pathTranslate)
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

export default IconModels
