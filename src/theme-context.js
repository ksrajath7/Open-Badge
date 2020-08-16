import React from 'react'

export const themes={
    dark:{
        color:'white',
        grayColor:"#6b7b8c",
        selectedColor:'#313131',
        background:'#000',
        smallColor:"gray",
        sectionBackground:'#110035',
        searchBar:'#111111',
        searchBarBorder:'#414141',
        header:"#29037a",
        uploadCsvBackground:"#313131",
        spanColor:"#fff",


    },
    light:{
        color:'black',
        grayColor:"#6b7b8c",
        selectedColor:'#f1f1f1',
        background:'white',
        smallColor:"red",
        sectionBackground:'#f9f9f9',
        searchBar:'white',
        searchBarBorder:'#e1e4e8',
        header:"#5200ff",
        uploadCsvBackground:"#f2f3fa",
        spanColor:"#5200ff",

    }
}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext