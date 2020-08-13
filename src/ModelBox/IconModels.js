import React from 'react'
import './ModelboxItems.css'
import Star from '../Assets/Star.svg'
import Diamond from '../Assets/Diamond.svg'
import Crown from '../Assets/Crown.svg'
import Paths from '../ModelBox/Paths/Paths'

function IconModels(props) {
    return (
        <>
           <img className="createBadge__model__IconModels" src={Star} alt="i1" onClick={()=>{
                props.setIconModelSource(Paths.iconModels.i1)
            }}/>
            <img className="createBadge__model__IconModels" src={Diamond} alt="i2" onClick={()=>{
                props.setIconModelSource(Paths.iconModels.i2)
            }}/>
            <img className="createBadge__model__IconModels" src={Crown} alt="i3" onClick={()=>{
                props.setIconModelSource(Paths.iconModels.i3)
            }}/>
        </>
    )
}

export default IconModels
