import React from 'react'
import ThemeContext from './theme-context'
import { Button } from '@material-ui/core'
import Paths from './ModelBox/Paths/Paths'
import './CreatedBadges.css'

function CreatedBadges(props) {
    const themes = React.useContext(ThemeContext)
    
    return (
        <div className="createdBadges">
            <div style={{display:"flex"}}>
                <div className="heading">
                    <h2>{props.title}</h2>
                    <div className="searchBarContainer"  style={{borderColor:themes.searchBarBorder}}>
                        <input className="input1" style={{backgroundColor:themes.searchBar, color:themes.color}}
                            type="text"
                            placeholder="Badge Name, Year, Recepient, etc"/>
                        <Button style={{borderRadius:"0px", color:themes.header}}>GO</Button>
                    </div>
                </div>
                <div className="space"/>
            </div>
            


            <h3 className="yearText">2019</h3>
            <hr className="hr" style={{backgroundColor:themes.searchBarBorder}}/>
            <div className="badgeContainer">
                <div className="badge" style={{borderColor:themes.searchBarBorder}}>
                    <div className="badgeNameContainer">
                        <div style={{flex:1}} className="badgeNameText">
                            Badge Name
                        </div>
                        <div style={{cursor:"pointer", color:themes.header}} className="badgeNameText">
                            Edit
                        </div>
                    </div>
                    <svg className="createdBadgeSvg" viewBox="0 0 322 322" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d={Paths.presets[0].path} fill={Paths.presets[0].pathColor} transform={Paths.presets[0].pathTranslate}/>
                            <path d={Paths.presets[0].inner} fill={Paths.presets[0].innerColor} transform={Paths.presets[0].innerTranslate}/>
                            <path d={Paths.presets[0].iconModel} fill={Paths.presets[0].iconModelColor} transform={Paths.presets[0].iconModelTranslate}/>
                            <text x="50%" y="70%" fontSize="40px" fill={Paths.presets[0].textColor} textAnchor="middle">{Paths.presets[0].text}</text>
                        </g>
                    </svg>
                </div>
            </div>














            <div style={{height:"100px"}}></div>
            
        </div>
    )
}

export default CreatedBadges
