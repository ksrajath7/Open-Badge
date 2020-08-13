import React from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

import { Link } from "react-router-dom";
import ThemeContext from './theme-context'
import Switch from './Switch/Switch'
import './Header.css'
import SidebarCollapsable from './SidebarCollapsable'

function Header(props) {

    const themes = React.useContext(ThemeContext)

    const [width, setWidth] = React.useState(window.innerWidth)
    const [collapse, setCollapse] = React.useState(false)
    const breakpoint = 620
    const [inputSearch, setInputSearch] = React.useState('')

    React.useEffect(() => {
        
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
      }, []);
      
    return (
        <div style={{display:'flex', flexDirection:'column', position:'sticky', top:'0'}}>
            <div className="header" style={{backgroundColor:themes.background}}>

                
                <div className="header__left">
                    {
                    width<=breakpoint &&
                        <div className="menuIcon__container" style={{color:themes.color, backgroundColor:themes.background}} onClick={()=>setCollapse(!collapse)}>
                            {collapse && <CloseIcon/>}
                            {!collapse && <MenuIcon/>}
                        </div>
                    }
                    <Switch
                        isOn={props.theme}
                        handleToggle={()=>props.setTheme(!props.theme)}
                    />
                
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                        <img className="header__logo" src="" alt="LOGO"></img>
                    </Link>
                </div>
                
                { width>breakpoint &&
                    <div className="header__input"  style={{borderColor:themes.searchBarBorder}}>
                        <input   style={{backgroundColor:themes.searchBar, color:themes.color}}
                            value={inputSearch}
                            onChange={e=>setInputSearch(e.target.value)}
                            type="text"
                            placeholder="Search"/>
                        <Link to={`${process.env.PUBLIC_URL}/search/${inputSearch}`}>
                            <SearchIcon className="header__inputButton"  style={{color:themes.smallColor}}/>
                        </Link>
                    </div>
                }
                    
                <div className="header__icons"  style={{color:themes.color}}>
                    <VideoCallIcon className="header__icon"/>
                    <AppsIcon className="header__icon" />
                    <NotificationsIcon className="header__icon"/>
                    <Avatar alt="DP" src=""/>
                </div>
           
            </div>
                { width<=breakpoint && collapse &&
                    <SidebarCollapsable collapse={collapse} setCollapse={setCollapse}></SidebarCollapsable>
                }
        </div>
        
    )
}

export default Header
