import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeContext from './theme-context'
import './SidebarRow.css'

function SidebarRow({title, Icon, selected, color, fromSidebar}) {
    const themes = React.useContext(ThemeContext)

    let rowClassName = "colRow"
    if(fromSidebar){
        rowClassName = "sidebarRow"
    }
    // const [hoverBackgroundStyle, setHoverBackgroundStyle] = React.useState(hoverColor)
    let selectedBackgroundStyle = {}
    let selectedTitleStyle = {color:color}
    if(selected){
        selectedBackgroundStyle={background:themes.selectedColor, borderRadius:"7px"}
        selectedTitleStyle.fontWeight="700"
    }


    
    return (
        <NavLink to={`${process.env.PUBLIC_URL}/${title}`} style={{textDecoration:'none'}} activeStyle={{color:'red'}}>
            <div className={rowClassName} style={selectedBackgroundStyle}>
                <img src={Icon} alt=""/>
                <h2 className="sidebarRow__title" style={selectedTitleStyle}>{title}</h2>
            </div>
        </NavLink>
    )
}

export default SidebarRow
