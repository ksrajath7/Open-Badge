import React from 'react'
import ThemeContext from './theme-context'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core'
import './Home.css'

function Home() {
    const themes = React.useContext(ThemeContext)

    const Button1 = withRouter(({history})=>(
        <Button style={{borderRadius:"0px", color:themes.header}} onClick={()=>{
            history.push(process.env.PUBLIC_URL+'/Create Badge')
        }}>Create new badge</Button>
    ))
        

    return (
        <div className="home">
             <div style={{display:"flex"}}>
                <div className="homeHeading">
                    <h2>Home Page</h2>
                    
                </div>
            </div>
            
            <Button1/>
            
        </div>
    )
}

export default Home
