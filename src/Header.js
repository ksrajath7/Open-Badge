import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

import OpenBadge from './Assets/OpenBadge.svg'
import Notification from './Assets/Notification.svg'
import { Link } from "react-router-dom";
import ThemeContext from './theme-context'
// import Switch from './Switch/Switch'
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
        
                { width<=breakpoint &&
                <div style={{color:"white"}} onClick={()=>setCollapse(!collapse)}>
                    {collapse && <CloseIcon/>}
                    {!collapse && <MenuIcon/>}
                </div>
                }

                
                    <div style={{display:"flex", alignItems:"center"}}>
                        <Link to={`${process.env.PUBLIC_URL}/`}>
                            <img className="header__logo" src={OpenBadge} alt="LOGO"></img>
                        </Link>
                        { width>breakpoint &&
                        <h2 className="header__title">Open Badge</h2>
                        }
                    </div>
                    
                <img src={Notification} alt="noti"></img>
                
                {/* <Switch
                    isOn={props.theme}
                    handleToggle={()=>props.setTheme(!props.theme)}
                /> */}
           
            </div>
                { width<=breakpoint && collapse &&
                    <SidebarCollapsable collapse={collapse} setCollapse={setCollapse}></SidebarCollapsable>
                }
        </div>
        
    )
}

export default Header
