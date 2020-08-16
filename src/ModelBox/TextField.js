import React from 'react'
import './ModelboxItems.css'
import { Button } from '@material-ui/core'

function TextField(props) {
    
    return (
        <>
            <div className="searchBar2"  style={{borderColor:props.themes.searchBarBorder}}>
                        <input style={{backgroundColor:props.themes.searchBar, color:props.themes.color}}
                            value={props.textInputSource}
                            onChange={e=>props.setTextInputSource(e.target.value)}
                            type="text"
                            placeholder="Enter your text here"/>
                        <Button onClick={()=>{props.setTextInputSource('')}} style={{borderRadius:"0px", color:props.themes.color}}>Clear</Button>
                        
                        </div>
        </>
    )
}

export default TextField
