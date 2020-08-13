import React from 'react'
import ThemeContext from './theme-context'
import './SearchPage.css'

function SearchPage({a}) {
    const themes = React.useContext(ThemeContext)
    return (
        <div className="searchPage"  style={{backgroundColor:themes.sectionBackground}}>
            <div className="searchPage__filter">
                <h2><span style={{color:'red'}}>No result for </span>{a}</h2>
            </div>
            <hr/>
            
            
        </div>
    )
}

export default SearchPage
