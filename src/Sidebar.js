import React from 'react'
import User from './Assets/user.svg'
import Created from './Assets/codesandbox.svg'
import Drafts from './Assets/pen-tool.svg'
import ThemeContext from './theme-context'

import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar({createdBadges, home, drafts}) {
    
    const themes = React.useContext(ThemeContext)
    
        return (
            <>
            <div className="sidebar">
                <SidebarRow selected={home} Icon={User} title="Home" color={themes.color} fromSidebar={true}/>
                <SidebarRow selected={createdBadges} Icon={Created} title="Created Badges" color={themes.color} fromSidebar={true}/>
                <SidebarRow selected={drafts} Icon={Drafts} title="Drafts" color={themes.color} fromSidebar={true}/>
            </div>
            </>
        )
    
}

export default Sidebar
