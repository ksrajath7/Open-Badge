import React from 'react'
import ThemeContext from './theme-context'
import Presets from './Presets/Presets'
import Toolbox from './Toolbox/Toolbox'
import Shields from './ModelBox/Shields'
import IconModels from './ModelBox/IconModels'
import TextField from './ModelBox/TextField'
import './CreateBadgePage.css'
import { Link } from 'react-router-dom'

function CreateBadgePage() {
    const themes = React.useContext(ThemeContext)
    const [badgeId, setBadgeId] = React.useState('')

    const [shield, setShield] = React.useState(true)
    const [iconModel, setIconModel] = React.useState(false)
    const [text, setText] = React.useState(false)
    const [textCover, setTextCover] = React.useState(false)
    const [presetVisible, setPresetVisible] = React.useState(true)

    const [shieldSource, setShieldSource] = React.useState('')
    const [iconModelSource, setIconModelSource] = React.useState('')
    const [textInputSource, setTextInputSource] = React.useState('')
    const [textCoverSource, setTextCoverSource] = React.useState('')

    const [translateIconModel, setTranslateIconModel] = React.useState('')
    const [translateShield, setTranslateShield] = React.useState('')

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 800

    React.useEffect(() => {
        
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
      }, []);
      
      let createStyle = {backgroundColor:themes.sectionBackground, flex:"0.6"}
      let detailsInputClassName = "badgeName"
      let svg = "320"

      if(width<=breakpoint){
          createStyle.flex="1"
          detailsInputClassName = "badgeName__mobileView"
          svg = "auto"
      }

    setBadgeId('185746a')

    return (
        <div className="createBadgePage">
            
            { width>breakpoint &&
            <div className="presetTab" style={{backgroundColor:themes.background, color:themes.color}}>
                <div className="presetLabel" >
                    Presets
                </div>
                <div className="presets">
                    <Presets themes={themes} setTextInputSource={setTextInputSource} setTextCoverSource={setTextCoverSource} setShieldSource={setShieldSource} setIconModelSource={setIconModelSource} ></Presets>
                </div>
                <hr style={{backgroundColor:themes.searchBarBorder}}/>
            </div>
            }
            

            <div className="create" style={createStyle}>



                { width<=breakpoint &&
                <div className="presetTab__mobileView" style={{backgroundColor:themes.background, color:themes.color}}>
                    <div className="presetLabel__mobileView" onClick={()=>{
                        setPresetVisible(!presetVisible)
                    }}>
                        Presets
                    </div>
                    { presetVisible &&
                    <div className="presets__mobileView">
                        <Presets themes={themes} setTextInputSource={setTextInputSource} setTextCoverSource={setTextCoverSource} setShieldSource={setShieldSource} setIconModelSource={setIconModelSource} ></Presets>
                    </div>
                    }
                </div>
                }



                <div className="canvas" style={{backgroundColor:themes.background, color:themes.color}}>

                        <center>
                        <svg width={svg} height={svg} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d={shieldSource} fill="#FAC302" transform={translateShield}/>
                        <path d={iconModelSource} fill="#DF2F8E" transform={translateIconModel}/>

                        </svg>

                        <h2>{textCoverSource}{textInputSource}</h2>
                        </center>

                </div>


                { width<=breakpoint &&

                <div className="tools__mobileView" style={{backgroundColor:themes.background, color:themes.color}}>
                    <Toolbox themes={themes} shield={shield} iconModel={iconModel} text={text} textCover={textCover} setShield={setShield} setIconModel={setIconModel} setText={setText} setTextCover={setTextCover} />
                </div>
                }

                
                { width<=breakpoint &&
                <div className="modelsContainer__mobileView" style={{backgroundColor:themes.background, color:themes.color}}>
                    <div className="modelsContainer">
                        { shield &&
                        <Shields setShieldSource={setShieldSource} setTranslateShield={setTranslateShield} />
                        }
                        { iconModel &&
                        <IconModels setIconModelSource={setIconModelSource} setTranslateIconModel={setTranslateIconModel} />
                        }
                        { text &&
                        <TextField textInputSource={textInputSource} setTextInputSource={setTextInputSource} themes={themes} />
                        }
                    </div>
                </div>
                }


                <h4 style={{color:themes.color}}>Badge Name <span style={{color:"red"}}>*</span><br/></h4>
                <div className="inputWrap">
                    <input type="text" className={detailsInputClassName} style={{color:themes.color, backgroundColor:themes.sectionBackground, borderColor:themes.searchBarBorder}}/>
                </div>
                <h5 style={{color:themes.grayColor}}>Great badge names are short and memorable. Need inspiration? How about blank-space? </h5><br/>

                <h4 style={{color:themes.color}}>Description  <span style={{color:themes.grayColor}}>(optional)</span><br/></h4>
                <div className="inputWrap">
                    <textarea className={detailsInputClassName} style={{color:themes.color, backgroundColor:themes.sectionBackground, borderColor:themes.searchBarBorder}}/>
                </div>

                <div className="inputWrap">
                    <Link to={`${process.env.PUBLIC_URL}/badge/${badgeId}`}>
                        <button className="createButton" style={{backgroundColor:themes.header }}>Select Recepients</button>
                    </Link>
                    <button className="draftButton">Save to drafts</button>
                </div>


            </div>
            
            
            { width>breakpoint &&
            <div className="models" style={{backgroundColor:themes.background, color:themes.color}}>
                <div className="modelsContainer">
                    { shield &&
                    <Shields setShieldSource={setShieldSource} setTranslateShield={setTranslateShield} />
                    }
                    { iconModel &&
                    <IconModels setIconModelSource={setIconModelSource} setTranslateIconModel={setTranslateIconModel} />
                    }
                    { text &&
                    <TextField textInputSource={textInputSource} setTextInputSource={setTextInputSource} themes={themes} />
                    }
                </div>
            </div>
            }
            
            { width>breakpoint &&
            <div className="tools" style={{backgroundColor:themes.background, color:themes.color}}>
                <Toolbox themes={themes} shield={shield} iconModel={iconModel} text={text} textCover={textCover} setShield={setShield} setIconModel={setIconModel} setText={setText} setTextCover={setTextCover} />
            </div>
            }
        </div>
    )
}

export default CreateBadgePage
