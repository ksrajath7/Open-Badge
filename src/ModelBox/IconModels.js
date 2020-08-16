import React from 'react'
import './ModelboxItems.css'
import Star from '../Assets/Star.svg'
import Diamond from '../Assets/Diamond.svg'
import Pencil from '../Assets/Pencil.svg'
import Crown from '../Assets/Crown.svg'
import Growth from '../Assets/Growth.svg'
import Institution from '../Assets/Institution.svg'
import Graduate from '../Assets/Graduate.svg'

import Paths from '../ModelBox/Paths/Paths'

function IconModels(props) {
    return (
        <>
        <button className="modelFrame" onClick={()=>{
                props.setIconModelSource(Paths.iconModels.star)
                props.setTranslateIconModel(Paths.iconModels.starTranslate)
            }}>
           <img className="createBadge__model__IconModels" src={Star} alt="i1"/>
        </button>
        <button className="modelFrame" onClick={()=>{
                props.setIconModelSource(Paths.iconModels.diamond)
                props.setTranslateIconModel(Paths.iconModels.diamondTranslate)
            }}>
            <img className="createBadge__model__IconModels" src={Diamond} alt="i2"/>
        </button>
        <button className="modelFrame" onClick={()=>{
                props.setIconModelSource(Paths.iconModels.crown)
                props.setTranslateIconModel(Paths.iconModels.crownTranslate)
            }}>
            <img className="createBadge__model__IconModels" src={Crown} alt="i3"/>
        </button>
        <button className="modelFrame" onClick={()=>{
                props.setIconModelSource(Paths.iconModels.pencil)
                props.setTranslateIconModel(Paths.iconModels.pencilTranslate)
            }}>
            <img className="createBadge__model__IconModels" src={Pencil} alt="i4"/>
        </button>
        <button className="modelFrame" onClick={()=>{
                props.setIconModelSource(Paths.iconModels.graduate)
                props.setTranslateIconModel(Paths.iconModels.graduateTranslate)
            }}>
            <img className="createBadge__model__IconModels" src={Graduate} alt="i4"/>
        </button>
        <button className="modelFrame" onClick={()=>{
                props.setIconModelSource(Paths.iconModels.institution)
                props.setTranslateIconModel(Paths.iconModels.institutionTranslate)
            }}>
            <img className="createBadge__model__IconModels" src={Institution} alt="i4"/>
        </button>
        <button className="modelFrame" onClick={()=>{
                props.setIconModelSource(Paths.iconModels.growth)
                props.setTranslateIconModel(Paths.iconModels.growthTranslate)
            }}>
            <img className="createBadge__model__IconModels" src={Growth} alt="i4"/>
        </button>
        <button className="modelFrame" onClick={()=>{
                props.setIconModelSource('')
                props.setTranslateIconModel('')
            }}>
            <h2>CLEAR</h2>
        </button>
        </>
    )
}

export default IconModels
