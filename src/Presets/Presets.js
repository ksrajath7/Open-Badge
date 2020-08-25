import React from 'react'
import {PresetArray} from '../ModelBox/Paths/Paths'
import Badge8 from '../Assets/Presets/badge8.svg'
import Badge1 from '../Assets/Presets/badge1.svg'
import Badge2 from '../Assets/Presets/badge2.svg'
import Badge3 from '../Assets/Presets/badge3.svg'
import Badge4 from '../Assets/Presets/badge4.svg'
import Badge5 from '../Assets/Presets/badge5.svg'
import Badge6 from '../Assets/Presets/badge6.svg'
import Badge7 from '../Assets/Presets/badge7.svg'
import Badge from '../Assets/Presets/badge.svg'
import './Presets.css'

function Presets(props) {

    const [PresetsArray] = React.useState([{id:0, preset:Badge},{id:1, preset:Badge1},{id:2, preset:Badge2},{id:3, preset:Badge3},{id:4, preset:Badge4},
        {id:5, preset:Badge5},{id:6, preset:Badge6},{id:7, preset:Badge7},{id:8, preset:Badge8}])
    
    return (
        <>
        {/* { PresetArray.map((element)=>
        <button key={element.id} style={{background:props.themes.background}} className="presetFrame" onClick={()=>{
            console.log(element.id)
            
                props.setEditPreset(false)
                props.setShieldStrokeColor(element.pathColor)
                props.setShieldStrokeWidth(element.shield.strokeWidth)
                props.setInnerSource(element.shield.inner)
                props.setTranslateInner(element.shield.innerTranslate)
                props.setInnerColor(element.innerColor)
                props.setIconModelSource(element.iconModel.path)
                props.setTranslateIconModel(element.iconModel.pathTranslate)
                props.setTranslateTextCover(element.shield.rectTranslate)
                props.setIconModelColor(element.iconModelColor)
                props.setTextInputSource(element.text.slice(0,12))
                props.setTextCoverColor(element.rectColor)
                props.setTextCoverWidth(element.shield.rectWidth)
                props.setTextInputColor(element.textColor)
                props.setTextCoverSource('')
            
        
                }}>
                        <center>
            <svg viewBox='0 0 322 322' xmlns='http://www.w3.org/2000/svg' style={{display:"flex"}} className="presetSvg">
                <path d={element.shield.inner} fill={element.innerColor} transform={element.shield.innerTranslate} stroke={element.pathColor} strokeWidth={element.shield.strokeWidth} strokeLinejoin='round'></path>
                <path d={element.iconModel.path} fill={element.iconModelColor} transform={element.iconModel.pathTranslate}></path>
                <rect width={element.shield.rectWidth} height='60' y='70%' fill={element.rectColor} transform={element.shield.rectTranslate}></rect>
                <text x='50%' y='83%' fontSize='40px' fill={element.textColor} textAnchor='middle'>{element.text.slice(0,12)}</text>
            </svg>
                    <h5 style={{cursor:"pointer", marginTop:"5px", color:props.themes.header}}>Edit</h5>
                        </center>
        </button>
        )
        } */}
        { PresetsArray.map((element)=>
        <button key={element.id} style={{background:props.themes.background}} className="presetFrame" onClick={()=>{
            var svgImage = document.getElementById(element.id).contentDocument
            var inner = svgImage.getElementById("shield")
            var iconModel = svgImage.getElementById("icon")
            var text = svgImage.getElementById("text")
            var rect = svgImage.getElementById("textCover")
                props.setEditPreset(false)
                props.setShieldStrokeColor(inner.getAttribute('stroke'))
                props.setShieldStrokeWidth(inner.getAttribute('stroke-width'))
                props.setInnerSource(inner.getAttribute('d'))
                props.setTranslateInner(inner.getAttribute('transform'))
                props.setInnerColor(inner.getAttribute('fill'))
                props.setIconModelSource(iconModel.getAttribute('d'))
                props.setTranslateIconModel(iconModel.getAttribute('transform'))
                props.setTranslateTextCover(rect.getAttribute('transform'))
                props.setIconModelColor(iconModel.getAttribute('fill'))
                props.setTextInputSource(text.innerHTML.slice(0,11))
                props.setTextCoverColor(rect.getAttribute('fill'))
                props.setTextCoverWidth(rect.getAttribute('width'))
                props.setTextInputColor(text.getAttribute('fill'))
                props.setTextCoverSource('')
            
        
                }}>
                        <center>
                        <object type="image/svg+xml" id={element.id} data={element.preset} alt="badge" className="presetSvg" aria-label=""></object>
                    <p className="editText" style={{color:props.themes.header}}>Edit</p>
                        </center>
        </button>
        )
        }
        </>
    )
}

export default Presets
