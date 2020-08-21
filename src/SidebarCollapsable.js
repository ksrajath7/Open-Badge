import React from 'react'
import User from './Assets/user1.svg'
import Created from './Assets/codesandbox1.svg'
import Drafts from './Assets/pen-tool1.svg'
import ThemeContext from './theme-context'
import SidebarRow from './SidebarRow'

import './SidebarCollapsable.css'

function SidebarCollapsable(props) {
    const themes = React.useContext(ThemeContext)
    
        return (
                <div className="sidebar1">
                    
                    { props.collapse &&
                    <div className="SidebarRow__container"  style={{backgroundColor:themes.header}} onClick={()=>props.setCollapse(!props.collapse)}>
                            
                        <SidebarRow Icon={User} title="Home" color="white" fromSidebar={false}/>
                        <SidebarRow Icon={Created} title="Created Badges" color="white" fromSidebar={false}/>
                        <SidebarRow Icon={Drafts} title="Drafts" color="white" fromSidebar={false}/>
                    </div>
                    }
                </div>
        )
      
      
}

export default SidebarCollapsable
