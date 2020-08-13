import React from 'react'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import ThemeContext from './theme-context'

import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar({createBadge}) {
    const themes = React.useContext(ThemeContext)
    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 620
    React.useEffect(() => {
        
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
      }, []);
    if(width>breakpoint)
    {
        return (
        
            <div className="sidebar">
                <SidebarRow selected={createBadge} Icon={VideoLibraryIcon} title="Create Badge"/>
                <hr style={{backgroundColor:themes.searchBarBorder}}/>
                <SidebarRow Icon={HistoryIcon} title="History"/>
            </div>
        )
    }
    else{
        return (<></>)
    }
    
}

export default Sidebar
