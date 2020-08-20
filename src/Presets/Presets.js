import React from 'react'
import Paths from '../ModelBox/Paths/Paths'
import './Presets.css'

function Presets(props) {
    return (
        <>
        { Paths.presets.map((element)=>
        <button key={element.id} style={{background:props.themes.background}} className="presetFrame" onClick={()=>{
                    props.setShieldSource(element.path)
                    props.setTranslateShield(element.pathTranslate)
                    props.setShieldColor(element.pathColor)
                    props.setInnerSource(element.inner)
                    props.setTranslateInner(element.innerTranslate)
                    props.setInnerColor(element.innerColor)
                    props.setIconModelSource(element.iconModel)
                    props.setTranslateIconModel(element.iconModelTranslate)
                    props.setIconModelColor(element.iconModelColor)
                    props.setTextInputSource(element.text.slice(0,10))
                    props.setTextInputColor(element.textColor)
                    props.setTextCoverSource('')
                    }}>
                        <center>
                        <svg width="auto" height="auto" viewBox="0 0 322 322" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d={element.path} fill={element.pathColor} transform={element.pathTranslate}/>
                                <path d={element.inner} fill={element.innerColor} transform={element.innerTranslate}/>
                                <path d={element.iconModel} fill={element.iconModelColor} transform={element.iconModelTranslate}/>
                                <text x="50%" y="70%" fontSize="40px" fill={element.textColor} textAnchor="middle">{element.text.slice(0,10)}</text>
                            </g>
                        </svg>
                        </center>
        </button>
        )
        }
        </>
    )
}

export default Presets
