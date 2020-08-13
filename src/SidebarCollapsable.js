import React from 'react'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import SearchIcon from '@material-ui/icons/Search'
import SidebarRow from './SidebarRow'

import ThemeContext from './theme-context'
import { Link } from "react-router-dom";

import './SidebarCollapsable.css'

function SidebarCollapsable(props) {
    const themes = React.useContext(ThemeContext)
    const [inputSearch, setInputSearch] = React.useState('')
    
        return (
                <div className="sidebar1">
                    
                    { props.collapse &&
                    <div className="SidebarRow__container"  style={{backgroundColor:themes.background}}>
                            
                        <div className="searchBar"  style={{borderColor:themes.searchBarBorder}}>
                        <input   style={{backgroundColor:themes.searchBar, color:themes.color}}
                            value={inputSearch}
                            onChange={e=>setInputSearch(e.target.value)}
                            type="text"
                            placeholder="Search"/>
                        <Link to={`${process.env.PUBLIC_URL}/search/${inputSearch}`}     onClick={e=>props.setCollapse(!props.collapse)}>
                            <SearchIcon className="searchButton"  style={{color:themes.smallColor}}/>
                        </Link>
                        </div>
                        <div onClick={()=>props.setCollapse(!props.collapse)}>
                            <SidebarRow Icon={VideoLibraryIcon} title="Create Badge"/>
                            <hr style={{backgroundColor:themes.searchBarBorder}}/>
                            <SidebarRow Icon={HistoryIcon} title="History"/>
                        </div>
                    </div>
                    }
                </div>
        )
      
      
}

export default SidebarCollapsable
