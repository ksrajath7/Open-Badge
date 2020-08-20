import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

import OpenBadge from './Assets/OpenBadge.svg'
import Notification from './Assets/Notification.svg'
import { Link } from "react-router-dom";
import ThemeContext from './theme-context'
import Switch from './Switch/Switch'
import './Header.css'
import SidebarCollapsable from './SidebarCollapsable'

function Header(props) {

    const themes = React.useContext(ThemeContext)
    const [collapse, setCollapse] = React.useState(false)

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 800

    React.useEffect(() => {
        
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
      }, []);
      
    return (
        <div className="headerContainer">
            <div className="header" style={{backgroundColor:themes.header}}>

                
                <div className="header__left">
                    {
                    width<=breakpoint &&
                        <div className="menuIcon__container" style={{color:"white"}} onClick={()=>setCollapse(!collapse)}>
                            {collapse && <CloseIcon/>}
                            {!collapse && <MenuIcon/>}
                        </div>
                    }
                    
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                        <img className="header__logo" src={OpenBadge} alt="LOGO"></img>
                    </Link>
                </div>



                <div className="header__icons" >
                    <img className="header__logo" src={Notification} alt="LOGO"></img>
                    
                    <Switch
                        isOn={props.theme}
                        handleToggle={()=>props.setTheme(!props.theme)}
                    />
                    <Avatar alt="DP" src="" style={{marginLeft:'20px', marginRight:"10px"}}/>
                </div>
           
            </div>
                { width<=breakpoint && collapse &&
                    <SidebarCollapsable collapse={collapse} setCollapse={setCollapse}></SidebarCollapsable>
                }
        </div>
        
    )
}

export default Header
