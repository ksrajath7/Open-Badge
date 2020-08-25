import React from 'react'
import './ModelboxItems.css'

function Colors(props) {
    return (
        <>
        <div className="colorsContainer">

            <h5>Shield</h5>
            <div>
                <input className="selectColor" value={props.innerColor} type="color" onChange={value=>{
                    props.setInnerColor(value.target.value)
                }}></input>
                <div className="hexCodeContainer">
                    <input type="text" className="hexCode" value={props.innerColor} maxLength="7" onChange={value=>{
                        if(value.target.value[0]!=="#"){
                            value.target.value = "#"
                        }
                    props.setInnerColor(value.target.value)
                }}></input>
                </div>
            </div>

            <h5>Icon</h5>
            <div>
                <input className="selectColor" value={props.iconModelColor} type="color" onChange={value=>{
                    props.setIconModelColor(value.target.value)
                }}></input>
                <div className="hexCodeContainer">
                    <input type="text" className="hexCode" value={props.iconModelColor} maxLength="7" onChange={value=>{
                        if(value.target.value[0]!=="#"){
                            value.target.value = "#"
                        }
                    props.setIconModelColor(value.target.value)
                }}></input>
                </div>
            </div>

            <h5>Text</h5>
            <div>
                <input className="selectColor" value={props.textInputColor} type="color" onChange={value=>{
                    props.setTextInputColor(value.target.value)
                }}></input>
                <div className="hexCodeContainer">
                    <input type="text" className="hexCode" value={props.textInputColor} maxLength="7" onChange={value=>{
                        if(value.target.value[0]!=="#"){
                            value.target.value = "#"
                        }
                    props.setTextInputColor(value.target.value)
                }}></input>
                </div>
            </div>
            
            <h5>Text Cover</h5>
            <div>
                <input className="selectColor" value={props.textCoverColor} type="color" onChange={value=>{
                    props.setTextInputColor(value.target.value)
                }}></input>
                <div className="hexCodeContainer">
                    <input type="text" className="hexCode" value={props.textCoverColor} maxLength="7" onChange={value=>{
                        if(value.target.value[0]!=="#"){
                            value.target.value = "#"
                        }
                    props.setTextCoverColor(value.target.value)
                }}></input>
                </div>
            </div>

            <h5>Shield Stroke</h5>
            <div>
                <input className="selectColor" value={props.shieldStrokeColor} type="color" onChange={value=>{
                    props.setShieldStrokeColor(value.target.value)
                }}></input>
                <div className="hexCodeContainer">
                    <input type="text" className="hexCode" value={props.shieldStrokeColor} maxLength="7" onChange={value=>{
                        if(value.target.value[0]!=="#"){
                            value.target.value = "#"
                        }
                    props.setShieldStrokeColor(value.target.value)
                }}></input>
                </div>
            </div>

        </div>
            
        </>
    )
}

export default Colors
