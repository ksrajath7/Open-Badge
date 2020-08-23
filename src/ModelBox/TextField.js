import React from 'react'
import './ModelboxItems.css'
import { Button } from '@material-ui/core'

function TextField(props) {

    let str=""
    str+=props.textInputSource
    
    return (
        <>
            <div className="searchBar2"  style={{borderColor:props.themes.searchBarBorder}}>
                        <input className="input" style={{backgroundColor:props.themes.searchBar, color:props.themes.color}}
                            value={props.textInputSource}
                            onChange={e=>{
                                props.setTextInputSource(e.target.value.slice(0,11))}}
                            type="text"
                            placeholder="Enter your text here"/>
                        
                        </div>
                        <div style={{flex: 1, display:"flex", alignItems:"center"}}>
                            <h5 style={{marginLeft:"10px", marginRight:"10px", flex:0.7}}>{11-str.length}  Character(s) left</h5>
                            <Button onClick={()=>{props.setTextInputSource('')}} style={{borderRadius:"0px", color:props.themes.color, flex:0.3}}>
                                Clear
                            </Button>
                        </div>

                        
                        
        </>
    )
}

export default TextField
