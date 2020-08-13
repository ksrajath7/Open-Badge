import React from 'react'

export const themes={
    dark:{
        color:'white',
        selectedColor:'#313131',
        background:'black',
        smallColor:"gray",
        sectionBackground:'#212121',
        searchBar:'#212121',
        searchBarBorder:'#414141'

    },
    light:{
        color:'black',
        selectedColor:'#f1f1f1',
        background:'white',
        smallColor:"red",
        sectionBackground:'#f9f9f9',
        searchBar:'white',
        searchBarBorder:'lightgrey'
        
    }
}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext