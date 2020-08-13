import React from 'react'
import './ModelboxItems.css'
import Shield1 from '../Assets/Shield1.svg'
import Shield2 from '../Assets/Shield2.svg'
import Shield3 from '../Assets/Shield3.svg'
import Shield4 from '../Assets/Shield4.svg'
import Paths from '../ModelBox/Paths/Paths'

function Shields(props) {
    return (
        <>
            <img className="createBadge__model" src={Shield1} alt="s1" onClick={()=>{
                props.setShieldSource(Paths.shields.s1)
            }}/>
            <img className="createBadge__model" src={Shield2} alt="s2" onClick={()=>{
                props.setShieldSource(Paths.shields.s2)
            }}/>
            <img className="createBadge__model" src={Shield3} alt="s3" onClick={()=>{
                props.setShieldSource(Paths.shields.s3)
            }}/>
            <img className="createBadge__model" src={Shield4} alt="s4" onClick={()=>{
                props.setShieldSource(Paths.shields.s4)
            }}/>
        </>
    )
}

export default Shields
