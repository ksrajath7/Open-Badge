import React from 'react'
import { withRouter } from 'react-router-dom'
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
    
    const Row = withRouter(({history})=>(
        <div className={rowClassName} style={selectedBackgroundStyle} onClick={()=>{
            history.push(process.env.PUBLIC_URL+'/'+title)
        }}>
            <img src={Icon} alt=""/>
            <h2 className="sidebarRow__title" style={selectedTitleStyle}>{title}</h2>
        </div>
    ))

    
    return (
            <Row/>
    )
}

export default SidebarRow
