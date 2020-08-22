import React from 'react'
import './ModelboxItems.css'
// import { Button } from '@material-ui/core'

function TextField(props) {

    let str=""
    str+=props.textInputSource
    
    return (
        <>
            <div className="searchBar2"  style={{borderColor:props.themes.searchBarBorder}}>
                        <input className="input" style={{backgroundColor:props.themes.searchBar, color:props.themes.color}}
                            value={props.textInputSource}
                            onChange={e=>{
                                props.setTextInputSource(e.target.value.slice(0,10))}}
                            type="text"
                            placeholder="Enter your text here"/>
                        {/* <Button onClick={()=>{props.setTextInputSource('')}} style={{borderRadius:"0px", color:props.themes.color}}>Clear</Button> */}
                        
                        </div>
                        <h5 style={{marginLeft:"10px"}}>{10-str.length}  Character(s) left</h5>
        </>
    )
}

export default TextField
