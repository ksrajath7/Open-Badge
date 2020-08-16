import React from 'react'
import Shield from '../Assets/Shield.svg'
import './Presets.css'

function Presets(props) {
    return (
        <>
        <button style={{background:props.themes.background}} className="presetFrame" onClick={()=>{
                    props.setShieldSource('')
                    props.setIconModelSource('')
                    props.setTextInputSource('')
                    props.setTextCoverSource('')
                    
                    }}>
            <img className="presetItem" src={Shield} alt="preset1"/>
        </button>
        <button style={{background:props.themes.background}} className="presetFrame" onClick={()=>{
                    props.setShieldSource('')
                    props.setIconModelSource('')
                    props.setTextInputSource('')
                    props.setTextCoverSource('')
                    
                    }}>
            <img className="presetItem" src={Shield} alt="preset1"/>
        </button>
        <button style={{background:props.themes.background}} className="presetFrame" onClick={()=>{
                    props.setShieldSource('')
                    props.setIconModelSource('')
                    props.setTextInputSource('')
                    props.setTextCoverSource('')
                    
                    }}>
            <img className="presetItem" src={Shield} alt="preset1"/>
        </button>
        <button style={{background:props.themes.background}} className="presetFrame" onClick={()=>{
                    props.setShieldSource('')
                    props.setIconModelSource('')
                    props.setTextInputSource('')
                    props.setTextCoverSource('')
                    
                    }}>
            <img className="presetItem" src={Shield} alt="preset2"/>
        </button>
        <button style={{background:props.themes.background}} className="presetFrame" onClick={()=>{
                    props.setShieldSource('')
                    props.setIconModelSource('')
                    props.setTextInputSource('')
                    props.setTextCoverSource('')
                    
                    }}>
            <img className="presetItem" src={Shield} alt="preset3"/>
        </button>
        <button style={{background:props.themes.background}} className="presetFrame" onClick={()=>{
                    props.setShieldSource('')
                    props.setIconModelSource('')
                    props.setTextInputSource('')
                    props.setTextCoverSource('')
                    
                    }}>
            <img className="presetItem" src={Shield} alt="preset4"/>
        </button>
        <button style={{background:props.themes.background}} className="presetFrame" onClick={()=>{
                    props.setShieldSource('')
                    props.setIconModelSource('')
                    props.setTextInputSource('')
                    props.setTextCoverSource('')
                    
                    }}>
            <img className="presetItem" src={Shield} alt="preset4"/>
        </button>
        <button style={{background:props.themes.background}} className="presetFrame" onClick={()=>{
                    props.setShieldSource('')
                    props.setIconModelSource('')
                    props.setTextInputSource('')
                    props.setTextCoverSource('')
                    
                    }}>
            <img className="presetItem" src={Shield} alt="preset4"/>
        </button>
        </>
    )
}

export default Presets
