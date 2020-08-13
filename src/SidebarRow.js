import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeContext from './theme-context'
import './SidebarRow.css'

function SidebarRow({title, Icon, selected}) {
    const themes = React.useContext(ThemeContext)
    let selectedBackground = null
    let selectedIcon=null
    if(selected){
        selectedBackground={backgroundColor:themes.selectedColor}
        selectedIcon={color:'red'}
    }
    else{
        selectedBackground = null
        selectedIcon=null
    }
    return (
        <NavLink to={`${process.env.PUBLIC_URL}/${title}`} style={{textDecoration:'none'}} activeStyle={{color:'red'}}>
            <div className="sidebarRow" style={selectedBackground} >
                <Icon className="sidebarRow__icon" style={selectedIcon}/>
                <h2 className="sidebarRow__title" style={{color:themes.color}}>{title}</h2>
            </div>
        </NavLink>
    )
}

export default SidebarRow
