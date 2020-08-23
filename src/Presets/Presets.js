import React from 'react'
import {PresetArray} from '../ModelBox/Paths/Paths'
import './Presets.css'

function Presets(props) {
    return (
        <>
        { PresetArray.map((element)=>
        <button key={element.id} style={{background:props.themes.background}} className="presetFrame" onClick={()=>{

                    props.setEditPreset(false)
                    props.setShieldStrokeColor(element.pathColor)
                    props.setInnerSource(element.shield.inner)
                    props.setTranslateInner(element.shield.innerTranslate)
                    props.setInnerColor(element.innerColor)
                    props.setIconModelSource(element.iconModel.path)
                    props.setTranslateIconModel(element.iconModel.pathTranslate)
                    props.setTranslateTextCover(element.shield.rectTranslate)
                    props.setIconModelColor(element.iconModelColor)
                    props.setTextInputSource(element.text.slice(0,11))
                    props.setTextCoverColor(element.rectColor)
                    props.setTextCoverWidth(element.shield.rectWidth)
                    props.setTextInputColor(element.textColor)
                    props.setTextCoverStrokeWidth(element.shield.strokeWidth)
                    props.setTextCoverSource('')
                    }}>
                        <center>
                        <svg viewBox="0 0 322 322" xmlns="http://www.w3.org/2000/svg" className="presetSvg">
                            <g>
                                <path d={element.shield.inner} fill={element.innerColor} transform={element.shield.innerTranslate} stroke={element.pathColor} strokeWidth="10" strokeLinejoin="round"/>
                                <path d={element.iconModel.path} fill={element.iconModelColor} transform={element.iconModel.pathTranslate}/>
                                <rect width={element.shield.rectWidth} height="60" y="70%" fill={element.rectColor} transform={element.shield.rectTranslate}></rect>
                                <text x="50%" y="83%" fontSize="40px" fill={element.textColor} textAnchor="middle">{element.text.slice(0,11)}</text>
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
